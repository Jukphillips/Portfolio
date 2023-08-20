// import * as THREE from 'three';
const nameType = document.getElementById("nameType");
const cursorType = document.getElementById("cursor")
const about = document.getElementById('about')
const links = document.getElementById('Links')
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

writeType();
