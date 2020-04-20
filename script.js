const btns = document.querySelector("#filter-btn").children;
const gallery = document.querySelector(".gallery");
const items = document.querySelector(".gallery").children;
const close = document.querySelector(".close");
const lightbox = document.querySelector(".lightbox");
const galleryItems = document.querySelectorAll(".item");
const imgs = lightbox.querySelector("img");




for (let i = 0; i < btns.length; i++) {
   const element = btns[i];
   element.addEventListener("click", function () {
      for (let j = 0; j < btns.length; j++) {
         const el = btns[j];
         el.classList.remove("active");
      }
      this.classList.add("active");
      const target = this.getAttribute("data-target");

      for (let k = 0; k < items.length; k++) {
         const elem = items[k];
         elem.style.display = "none";
         if(target === elem.getAttribute("data-id")){
             elem.style.display = "block";
         }
         if(target === "all"){
             elem.style.display = "block";
         } 
      }
   });
}

lightbox.addEventListener("click", function (event) {
   if(event.target!==imgs){
      lightbox.classList.remove("show");
      lightbox.classList.add("hide");
   } 
});

close.addEventListener("click", function () {
   lightbox.classList.remove("show");
   lightbox.classList.add("hide");
});

galleryItems.forEach(element => {
   element.querySelector(".fa-plus").addEventListener("click", function () {
      lightbox.classList.remove("hide");
      lightbox.classList.add("show");
      lightbox.querySelector("img").src = element.querySelector("img").getAttribute("src");
   });
});





const slider = document.querySelector(".slider");
const slides = slider.children;
const margin = 30;
const containerWidth = slider.offsetWidth;
let itemPerSlide = 0;
let slideDots = 0; 

const responsive = [
   {breakPoint: {width:0, item:1}},
   {breakPoint: {width:991, item:2}}
];



function load() {
   for (let i = 0; i < responsive.length; i++) {
      const element = responsive[i].breakPoint;
      if(window.innerWidth > element.width){
         itemPerSlide = element.item;
      }
   }
   start();
}

function start(){
   let totalWidth = 0;
   for (let i = 0; i < slides.length; i++) {
      const element = slides[i];
      element.style.width = (containerWidth/itemPerSlide) - margin + "px";
      element.style.margin = margin/2 +"px";
      totalWidth += containerWidth/itemPerSlide;
   }
   slider.style.width = totalWidth +"px";

   slideDots = Math.ceil(slides.length/itemPerSlide);
  
   for (let j = 0; j < slideDots; j+=1) { 
      const div = document.createElement("div");
      div.id = j;
      console.log(div.id);
      // div.setAttribute("onclick", controlSlide(j));
      if(j==0){
         div.classList.add("active");
      }
      document.querySelector(".slide-controls").appendChild(div);
   }
}

let currIndex = 0;
let autoSlide = 0;
let timer = setInterval(autoPlay, 5000);
let controlBtns;

function controlSlide(el) {
   clearInterval(timer);
   timer = setInterval(autoPlay, 5000);
   autoSlide = el.id;
   currIndex = el.id;
   console.log(el.id);
   changeSlide(currIndex);
}

function changeSlide(currIndex) {
   let controlBtns = document.querySelector(".slide-controls").children;
   
   for (let i = 0; i < controlBtns.length; i++) {
      const element = controlBtns[i];
      element.classList.remove("active");
   }
   controlBtns[currIndex].classList.add("active");
   slider.style.marginLeft = -(containerWidth*currIndex) +"px";
}

function autoPlay() {
   if(autoSlide===slideDots-1){
      autoSlide = 0;
   } else {
      autoSlide +=1;
   }
   changeSlide(autoSlide);
}
 

window.onload = load();

window.onscroll = function () {
   const documentScrollYop = document.documentElement.scrollTop;
   if(window.innerWidth > 991){
      if(documentScrollYop > 100){
         document.querySelector("header").classList.add("fixed");
      } else{
         document.querySelector("header").classList.remove("fixed");
      }
   }
}


const nav = document.querySelector(".navbar");
const links = document.querySelectorAll("a");
links.forEach(element => {
   element.addEventListener("click", function(){
      for (let i = 0; i < links.length; i++) {
         const a = links[i];
         a.classList.remove("active");
      }
      this.classList.add("active");
   });
});


const burger = document.querySelector(".burger");
burger.addEventListener("click", function(){
   nav.classList.toggle("show");
});


