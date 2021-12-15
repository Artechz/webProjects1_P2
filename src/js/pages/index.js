
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
    }
})

