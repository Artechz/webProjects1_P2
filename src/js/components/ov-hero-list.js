Vue.component('ov-hero-list', {
    props: {
        data: Object
      },
    template: '<div class="flexElement"><div class="imageDiv"> <img class="charImg" :src="data.portrait" :alt="data.name"></div><div class="textDiv"><p class="name">{{data.name}}</p><p class="role">{{data.role}}</p><p class="message">{{data.message}}</p><input type="image" src="https://www.pinclipart.com/picdir/big/43-437827_plus-clipart.png" class="moreButton" alt="+"></div></div>',
    created: "",
})

  
//TODO make this a component instead of html