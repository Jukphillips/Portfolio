// import * as THREE from 'three';
const nameType = document.getElementById("nameType");
const cursorType = document.getElementById("cursor")
const about = document.getElementById('about')
const links = document.getElementById('Links')
const aboutHello = document.getElementById('aboutHello')
const aboutStudy = document.getElementById('aboutStudy')
const aboutWork = document.getElementById('aboutWork')
const aboutText = document.getElementsByClassName('aboutText')
// typewrite animation 

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrase = "Justin Phillips";
let sleepTime = 600;

const writeType = async () => {
    
    for (let i = 0; i < phrase.length; i++) {
      nameType.innerText = phrase.substring(0, i + 1);
        await sleep(sleepTime) 
    };

    console.log(phrase)
    cursorType.style.animationPlayState = "paused"
    cursorType.style.opacity = 0;
    console.log(about)
    console.log(links)
    about.style.visibility = "visible";
    links.style.visibility = "visible";
};

function aboutSection() {

    for(var i = 0; i < aboutText.length; i++){
        
        aboutText[i].style.animation = 'flySide 2s, fadeIn 2s';
        aboutText[i].style.animationFillMode = 'forwards';
        aboutText[i].style.animationDelay = (i * 2) + 's';
        console.log(document.location)
        // console.log(aboutText[i].style.animationDelay = (i * 2) + 's')
    }
    // create html about section 
    // hide visibility
    //use javascript to close whatever content is on the page and show about section
    //switch "about" to "exit"
}

writeType();




about.addEventListener("click", aboutSection)