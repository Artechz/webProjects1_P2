
import {} from "../components/ov-hero.js"

//TODO be able to update heroes with API (know how to get them but not how to update variable bc of Vue)
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
    }
})

  /*    fetch('http://localhost:3000/api/list?search=')
        .then(response => response.json())
        .then(data => heroes = data[0]);*/