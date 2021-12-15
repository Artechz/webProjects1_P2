Vue.component('ov-hero', {
    props: {
        data: Object,
        showingMore: Boolean
      },
    template: `
      <div class='heroCard'>
        <img class='charImg' :src='data.portrait' :alt='data.name'>
        <div class='textDiv'>
          <h1 class='name'>{{data.name}}</h1>
          <p class='role'>{{data.role}}</p>
          <p v-if='showingMore' class='message'>{{data.message}}</p>
          <input v-on:click='showingMore = !showingMore' type='image' src='https://www.pinclipart.com/picdir/big/43-437827_plus-clipart.png' class='moreButton' alt='+'>
        </div>
      </div>`,
  })
