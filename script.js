const mySwich = document.querySelector(".switch");
const middle = document.querySelector(".middle");
const oilOne = middle.querySelector("div.oil1");
const oilTwo = middle.querySelector("div.oil2");
const oilThree = middle.querySelector("div.oil3");
var lavaBlobs = ["big", "small", "smaller"];
var randomBlob = lavaBlobs[Math.floor(Math.random() * lavaBlobs.length)];

mySwich.addEventListener('click', toggleOnOff);

function toggleOnOff(){
    if( middle.classList.contains("off")) {
        middle.classList.remove("off");
        middle.classList.add("on");
        lavaLamp();    
    } else {
        middle.classList.remove("on"); 
        middle.classList.add("off");
        if(middle.classList.contains("off")){
            oilOne.removeAttribute("class");
            oilTwo.removeAttribute("class");
            oilThree.removeAttribute("class");
        } 
    }   
}

function lavaLamp(){
    oilOne.classList.add(lavaBlobs[Math.floor(Math.random() * lavaBlobs.length)]);
    oilTwo.classList.add(lavaBlobs[Math.floor(Math.random() * lavaBlobs.length)]);
    oilThree.classList.add(lavaBlobs[Math.floor(Math.random() * lavaBlobs.length)]);
    }


