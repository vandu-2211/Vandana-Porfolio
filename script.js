//toggle of navbar

let toggle=document.getElementById("toggle");
let nav=document.getElementById("navbar");
toggle.addEventListener('click',(e)=>{
console.log("hii")
nav.classList.toggle("active-navbar");

})



let text="I'm a Senior Email Marketer";

let elem=document.getElementById("elem");

setInterval(write,100);
let indx=1;
function write(){

let str=text.slice(0,indx);
elem.innerText=str;
indx++;
if(indx==text.length+1){
    indx=1;
}

}


//scroll animation



//project section

// let proj=document.getElementById("projwct1");

// proj.addEventListener("click",()=>{
//     window.location.replace("https://github.com/nikunj22nik/React-Expense-App");
// })


//slides
var sindex=0;
var slides=document.querySelector('.slider-items').children;
let left=document.querySelector(".left-slider");
let right=document.querySelector(".right-slider");
console.log(slides);
console.log(left);
console.log(right);


left.addEventListener("click",function(){
    slide("prev")
})

right.addEventListener("click",function(){
    slide("next");
});

function slide(direction){
    if(direction=="next"){
sindex++;
if(sindex==slides.length){
    sindex=0;
}
for(var j=0;j<slides.length;j++){
    slides[j].classList.remove("active");
}

slides[sindex].classList.add("active");
    }else{
        sindex--;
if(sindex==-1){
    sindex=slides.length-1;
}
for(var j=0;j<slides.length;j++){
    slides[j].classList.remove("active");
}

slides[sindex].classList.add("active");
    }



}








