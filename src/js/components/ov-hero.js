Vue.component('ov-hero', {
    props: {
        data: Object,
      },
    data: () => {
      return {
        showingMore: false,
        showingAux: false
      }
    },
    template: `
      <div class='heroCard'>
        <img class='charImg' :src='data.portrait' :alt='data.name'>
        <div class='textDiv'>
          <h1 class='name'>{{data.name}}</h1>
          <p class='role'>{{data.role}}</p>
          <p v-if='showingMore' class='message'>{{data.message}}</p>
          <input v-on:click='moreInfo()' type='image' src='https://www.pinclipart.com/picdir/big/43-437827_plus-clipart.png' class='moreButton' :class="this.showingAux ? 'spin' : ''" alt='+'>
        </div>
      </div>`,
    methods: {
      async moreInfo() {
        this.showingAux = !this.showingAux;
        if(this.showingMore == false) {
          await new Promise(r => setTimeout(r, 1000));
          fetch('http://localhost:3000/api/detail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.data)
          })
          .then(response => response.json())
          .then(data => this.data.message = data[0].message)
          .then(console.log(`API call successful: POST detail request for "${this.data.key}"`))
          .catch(error => console.error('Error:', error));
        }
        this.showingMore = !this.showingMore;
      }
    },
})
