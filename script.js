import { countries } from "./countries.js";
console.log(Object.keys(countries));

// let link = document.querySelector("link[rel~='shortcut icon']")
// link.href = "svg/gb.svg"

let flag = document.getElementsByClassName("country")[0]
let random, places
let buttons = document.getElementsByClassName("gamebutton")
let scorecounter = 0
let livescounter = 3
let score = document.getElementById("score")
let lives = document.getElementById("lives")
let time = document.getElementById("time")
let setting = document.getElementById("settings")
let settingbutton = document.getElementById("settingbutton")
let mainform = document.getElementById("mainform")
console.log(setting);
console.log(random);
let correctcountry
let timecounter = 60
let gameinterval = setInterval(function () {
    timecounter = timecounter - 1
    time.innerHTML = "time:" + timecounter;
    if (timecounter == 0) {
        for (let button of buttons) {
            button.disabled = true
            button.style.opacity = 0
        }
        clearInterval(gameinterval)
    }
}, 1000)

function getQuiz() {
    random = Math.floor(Math.random() * Object.keys(countries).length)
    flag.src = "svg/" + (Object.keys(countries)[random].toLowerCase()) + ".svg"
    places = [
        Object.values(countries)[Math.floor(Math.random() * Object.keys(countries).length)],
        Object.values(countries)[Math.floor(Math.random() * Object.keys(countries).length)],
        Object.values(countries)[Math.floor(Math.random() * Object.keys(countries).length)],
    ]
    correctcountry = Object.values(countries)[random]
    places.splice(Math.floor(Math.random() * 4), 0, correctcountry)
    let counter = 0
    for (let button of buttons) {
        button.innerHTML = places[counter]
        counter = counter + 1
        button.onclick = function (event) {
            console.log(button.innerHTML);
            event.preventDefault()
            if (correctcountry == button.innerHTML) {
                scorecounter = scorecounter + 1
                score.innerHTML = "score: " + scorecounter
                console.log("you're correct");
            }
            else {
                livescounter = livescounter - 1
                console.log(("you're inncorrect " + livescounter));
                lives.innerHTML = "lives: " + livescounter
                if (livescounter == 0) {
                    button.disable = true

                }
            }
            getQuiz()

        }


    }
}
getQuiz()

settingbutton.onclick = function (event) {
    mainform.style.opacity = 0
    setTimeout(function () {
        setting.style.display = "block"
        setTimeout(function () {
            setting.style.opacity = 1

        }, 0)
    }, 500)
}

document.body.onkeydown = function (event) {
    console.log(event.key);
    if (event.key == 1) {
        if (correctcountry == buttons[0].innerHTML) {
            scorecounter = scorecounter + 1
            score.innerHTML = "score: " + scorecounter
            console.log("you're correct");
        }
        else {
            livescounter = livescounter - 1
            console.log(("you're inncorrect " + livescounter));
            lives.innerHTML = "lives: " + livescounter
            if (livescounter == 0) {
                button.disable = true

            }
        }
        getQuiz()

    }
    if (event.key == 2) {
        if (correctcountry == buttons[0].innerHTML) {
            scorecounter = scorecounter + 1
            score.innerHTML = "score: " + scorecounter
            console.log("you're correct");
        }
        else {
            livescounter = livescounter - 1
            console.log(("you're inncorrect " + livescounter));
            lives.innerHTML = "lives: " + livescounter
            if (livescounter == 0) {
                button.disable = true

            }
        }
        getQuiz()

    } if (event.key == 3) {
        if (correctcountry == buttons[0].innerHTML) {
            scorecounter = scorecounter + 1
            score.innerHTML = "score: " + scorecounter
            console.log("you're correct");
        }
        else {
            livescounter = livescounter - 1
            console.log(("you're inncorrect " + livescounter));
            lives.innerHTML = "lives: " + livescounter
            if (livescounter == 0) {
                button.disable = true

            }
        }
        getQuiz()

    } if (event.key == 4) {
        if (correctcountry == buttons[0].innerHTML) {
            scorecounter = scorecounter + 1
            score.innerHTML = "score: " + scorecounter
            console.log("you're correct");
        }
        else {
            livescounter = livescounter - 1
            console.log(("you're inncorrect " + livescounter));
            lives.innerHTML = "lives: " + livescounter
            if (livescounter == 0) {
                button.disable = true

            }
        }
        getQuiz()

    }
}
