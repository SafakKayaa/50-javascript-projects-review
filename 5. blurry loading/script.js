const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let load = 0; 
 let int = setInterval(blurring,30);

function blurring() {
    load++;

    if(load>99) { 
        clearInterval(int);
    }
loadingText.innerText = `${load}%`;
}

