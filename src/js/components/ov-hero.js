Vue.component('ov-hero', {
    props: {
        data: Object,
      },
    data: () => {
      return {
        showingMore: false
      }
    },
    template: `
      <div class='heroCard'>
        <img class='charImg' :src='data.portrait' :alt='data.name'>
        <div class='textDiv'>
          <h1 class='name'>{{data.name}}</h1>
          <p class='role'>{{data.role}}</p>
          <p v-if='showingMore' class='message'>{{data.message}}</p>
          <input v-on:click='moreInfo()' type='image' src='https://www.pinclipart.com/picdir/big/43-437827_plus-clipart.png' class='moreButton' alt='+'>
        </div>
      </div>`,
    methods: {
      moreInfo() {
        fetch('http://localhost:3000/api/detail', {
          method: 'POST',
          body: JSON.stringify(this.data)
        })
        .then(response => response.json())
        .then(data => this.data.message = data.message)
        .then(console.log("API request successful"));

        this.showingMore = !this.showingMore;
      }
    },
  })
