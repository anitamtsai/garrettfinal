// const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// let pics = document.querySelectorAll(".spacer img")

// for (let i = 0; i < pics.length; i++) {
//     console.log("Looking at " + pics[i].src);

//     pics[i].addEventListener("error", function (){

//     if (reduceMotion) {
//     this.src= 'https://raw.githubusercontent.com/anitamtsai/garrettfinal/main/images/runnerpng.png';
// }
//     else{
//     this.src='https://raw.githubusercontent.com/anitamtsai/garrettfinal/main/images/runnergif.gif';
//     this.alt = "image is not available";
// }
//     })
// } 

// /*grabbed code from discussion & attended Sami's office hours*/


const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let pics = document.querySelectorAll(".spacer img");

for (let i = 0; i < pics.length; i++) {
  console.log("Looking at " + pics[i].src);

  pics[i].addEventListener("error", function () {
    if (reduceMotion) {
      this.src = "images/runnerpng.png";
    } else {
      this.src = "images/runnergif.gif";
    }
    this.alt = "image is not available";
  });
}
