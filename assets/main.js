import * as THREE from 'three';
const nameType = document.getElementById("nameType");
const cursorType = document.getElementById("cursor")
// typewrite animation 

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrase = "Justin Phillips";
let sleepTime = 200;

const writeType = async () => {
    
    for (let i = 0; i < phrase.length; i++) {
      nameType.innerText = phrase.substring(0, i + 1);
        await sleep(sleepTime) 
    }
    cursorType.style.animationPlayState = "paused"
    cursorType.style.opacity = 0;
};

writeType();
