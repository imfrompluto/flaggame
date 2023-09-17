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
let timer = document.getElementById("time")
let setting = document.getElementById("settings")
let settingbutton = document.getElementById("settingbutton")
let mainform = document.getElementById("mainform")
let settingbuttons = document.getElementsByClassName("settbutton")
let category = "timer"
let countrytitle = document.getElementById("countrytitle")
let mode = "flag"
console.log(setting);
console.log(random);
let correctcountry
let timecounter = 60
let gameinterval = setInterval(function () {

    timecounter = timecounter - 1
    timer.innerHTML = "time:" + timecounter;
    if (timecounter == 0) {
        for (let button of buttons) {
            button.disabled = true
            button.style.opacity = 0
        }
        clearInterval(gameinterval)
    }
}, 1000)

function getQuiz() {
    if(category == "timer"){
        lives.style.opacity = 0
        timer.style.opacity = 1
    }
    else{
        timer.style.opacity = 0
        lives.style.opacity = 1
    }
    if(mode == "flag"){
        countrytitle.style.display = "none"
        flag.style.display = "block"
    }
    else{
        flag.style.display = "none"
        countrytitle.style.display = "block"
    }
    

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


for (let i = 0; i < 4; i++){
    settingbuttons[i].onclick = function (event) {
        if (i < 2){
            category = "timer"
            lives.style.opacity = 0
            timecounter = 60
            scorecounter = 0
            score.innerHTML = "score: 0"
        }
        else{
            category = "lives"
            timer.style.opacity = 0
        }
        if(i == 1 || i == 3){
            mode = "country"
        }
        setting.style.opacity = 0

        setTimeout(function () {
            mainform.style.display = "block"
            setting.style.display = "none"
            setTimeout(function () {
                mainform.style.opacity = 1
    
            }, 0)
        }, 500)
        getQuiz()
    }
}

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
