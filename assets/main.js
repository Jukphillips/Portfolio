// import * as THREE from 'three';
const nameType = document.getElementById("nameType");
const cursorType = document.getElementById("cursor")
const about = document.getElementById('about')
const links = document.getElementById('Links')
const aboutHello = document.getElementById('aboutHello')
const aboutStudy = document.getElementById('aboutStudy')
const aboutWork = document.getElementById('aboutWork')
const aboutText = document.getElementsByClassName('aboutText')
const aboutSec = document.getElementById('aboutSection')
const container = document.getElementById('container')
const closeBtn = document.getElementById('close')
const webDev = document.getElementById('webDev')
const webDevAni = document.getElementById('webDevAni')
const fadeIn = document.getElementsByClassName('fadeIn')
const downButton = document.getElementById('downButton')
const project1Con = document.getElementById('project1Con')
const imgPrevs = document.querySelectorAll(".imgPrev")
const imgNexts = document.querySelectorAll(".imgNext")
// typewrite animation 


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrase = "Justin Phillips";
let sleepTime = 350;

const writeType = async () => {
    
    for (let i = 0; i < phrase.length; i++) {
      nameType.innerText = phrase.substring(0, i + 1);
        await sleep(sleepTime) 
    };

    cursorType.style.animationPlayState = "paused"
    cursorType.style.opacity = 0;
    about.style.visibility = "visible";
    links.style.visibility = "visible";
    downButton.style.visibility = "visible";
};

function aboutSection() {

    container.classList.remove('active')
    container.classList.add('inactive')
    aboutSec.classList.remove('inactive')
    aboutSec.classList.add('active')
    closeBtn.style.visibility = "visible"

    for(var i = 0; i < aboutText.length; i++){
        
        aboutText[i].style.animation = 'flySide 2s, fadeIn 2s';
        aboutText[i].style.animationFillMode = 'forwards';
        aboutText[i].style.animationDelay = (i * 2) + 's';

    }
}

function closeAbout () {

    closeBtn.style.visibility = "hidden"
    container.classList.remove('inactive')
    container.classList.add('active')
    aboutSec.classList.remove('active')
    aboutSec.classList.add('inactive')
    webDev.style.opacity = 100 
    cursorType.style.visibility = 'hidden'
    console.log(webDev)
    webDev.style.animationDelay = 0 + 's'

    for(var i = 0; i < fadeIn.length; i++ ){
        fadeIn[i].style.animationDelay = 0 + 's';
    }

}

const sections = document.getElementsByClassName('project')
let currentPage = 0;
const projects = Array.from(sections)
const body = document.body


function MouseWheelHandler(e) {
    // console.log("in function Mouse")
    
    setTimeout ( function() {
        e.preventDefault();
        e.stopPropagation()
        return false
    }, 3000 )

    // console.log(currentPage = currentPage + 1)
    
}

function arrowDown () {

    currentPage = Math.min(currentPage + 1, (projects.length + 1) - 1)

}

function arrowUp() {

    currentPage = Math.max(currentPage - 1, 0)
    
}

let slideIndex = [0, 1] ;
console.log(slideIndex)
let slideId = ["projectSlides1", "projectSlides2", "projectSlides3"]
// showSlides(1, 0)
showSlides(1, 1)
// showSlides(1, 2)

function showSlides(n, no){
    // n is the slide page
    // no is the slideshow page
    let x = document.getElementsByClassName(slideId[no])
    let xSlide = Array.from(x)

    if( n > xSlide.length) {
        slideIndex[no] = 1
    } if (n < 1 ) {
        slideIndex[no] = xSlide.length
    }
    for(let i = 0; i < xSlide.length; i++){
        console.log(x[i])
        xSlide[i].style.display = "none";
    }
    
    xSlide[slideIndex[no] - 1].style.display = "block";
}

function plusSlides(n, no) {

    slideIndex[no] += n
  showSlides(slideIndex[no], no);
}

function handleImgPrev(event) {
    console.log(event.target.dataset)
    plusSlides(parseInt(event.target.getAttribute('data-id')), parseInt(event.target.getAttribute('data-section')))
}

function handleImgNext(event) {
    console.log(event.target.dataset)
    plusSlides(parseInt(event.target.getAttribute('data-id')), parseInt(event.target.getAttribute('data-section')))
}

imgPrevs.forEach(imgPrev => {
    imgPrev.addEventListener('click', handleImgPrev)
})

imgNexts.forEach(imgNext => {
    imgNext.addEventListener('click', handleImgNext)
})

writeType();

document.addEventListener("keydown", function(event) {
    if(event.code == "ArrowDown") {
        arrowDown()
    } else if (event.code == "ArrowUp") {
        arrowUp()
    }

} )

body.addEventListener("wheel", MouseWheelHandler, {passive: false });
// document.addEventListener("wheel", (event) => {
//     const delta = Math.sign(event.deltaY);
//     if (delta < 0 ){
//          X
//     }
// })

downButton.addEventListener("click", function() {
    project1Con.scrollIntoView({behavior: "smooth"})
    downButton.style.visibility = "hidden"
    arrowDown()
})
about.addEventListener("click", aboutSection)
closeBtn.addEventListener('click', closeAbout)
