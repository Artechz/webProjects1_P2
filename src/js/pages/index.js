import {} from "../components/search-form.js"
import {} from "../components/ov-hero.js"

var app = new Vue({
    el: '#appOverwatch',
    data: () => {
        return {
            heroes: [
                {
                    "key": "1",
                    "name": "Hanzo",
                    "role": "Damage",
                    "portrait": "http://localhost:8000/media/img/PikPng.com_overwatch-logo-png_1032278.png",
                    "message": "Age: 38"
                },
                {
                    "key": "hanzo",
                    "name": "Hanzo",
                    "role": "Support",
                    "portrait": "http://localhost:8000/media/img/PikPng.com_overwatch-logo-png_1032278.png",
                    "message": "Age: 37"
                }
            ]
        }
    },
    created: () => {
        fetch('http://localhost:3000/api/list?search=')
        .then(response => response.json())
        .then(data => app.heroes = data)
        .then(console.log("API request successful"));
    }
})

//FIXME: stopped working at some point
document.addEventListener('DOMContentLoaded', () => {
    let myButtons=document.querySelectorAll('.moreButton');

    myButtons.forEach((button) => {  
        button.addEventListener('click', () => {
            myButtons.forEach(b => b.classList.remove('spin'));
            button.classList.add('spin');
        });  
    }); 
});