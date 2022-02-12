const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// display mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//text animation
const text = document.querySelector(".hero_text");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for(let letter of splitText){
    text.innerHTML += "<span>" + letter + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
/*
    if(span.innerHTML != " "){
    }
    else{
        span.classList.add("empty_space")
    }*/
    char++;



    if (char === splitText.length){
        complete();
        return;
    }


}



function complete(){
    clearInterval(timer);
    timer = null;
}
