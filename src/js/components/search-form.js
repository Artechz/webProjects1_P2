Vue.component('search-form', {
    data: () => {
        return {
            searchInput: ""
        }
    },
    template: `
        <div class="search">
            <form v-on:submit.prevent="search">
                <input type="text" v-model="searchInput">
                <input type="submit" value="Search">
            </form>
        </div>`,
    methods: {
        search() {
            console.log(this.searchInput);
            fetch(`http://localhost:3000/api/list?search=${this.searchInput}`)
            .then(response => response.json())
            .then(data => this.$root.heroes = data)
            .then(console.log("API request successful"));
        }
    }
})