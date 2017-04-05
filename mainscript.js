let stepButton = document.querySelector("#steps-button");
let mainCharacter = document.querySelector("#maincharacter");
let namePage = document.querySelector("#playername");
let mainPage = document.querySelector("#main");

window.onload = firstFunction;

/*
object.addEventListener("load", firstFunction);
*/
function firstFunction () {
    console.log("Hithere");
    mainCharacter.classList.add("mainenter");
}

