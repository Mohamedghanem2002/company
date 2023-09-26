let menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".nav")
let a = document.querySelector(".menu")
let imgs = document.querySelectorAll(".imags")

let modalImg = document.querySelector(".modal-content")
let modeal = document.getElementById("myModal")
let close = document.querySelector(".close")
let captionText = document.getElementById("caption");

menu.onclick = function () {
    menu.classList.toggle("active");
    nav.classList.toggle("show")
};
a.onclick = function(){
    nav.classList.remove("show")
    menu.classList.remove("active")
    
};

Array.from(imgs).forEach((img)=>{
    img.onclick = function(){

        modalImg.src = this.src
        modeal.style.display = "block"
        captionText.innerHTML = this.alt;
    }
})
close.onclick = function(){
    modeal.style.display = "none"
}

