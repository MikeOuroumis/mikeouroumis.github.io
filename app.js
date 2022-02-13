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

const aboutSection = document.querySelector(".skills-bars-container");

const options = {
    root: null,
    threshold: 0.25,
    rootMargin: "-150px"
};
//skills
document.querySelector('.bar .progress-line.html').style.display = 'none';
document.querySelector('.bar .progress-line.css').style.display = 'none';
document.querySelector('.bar .progress-line.jquery').style.display = 'none';
document.querySelector('.bar .progress-line.ReactJS').style.display = 'none';
document.querySelector('.progress-line.Wordpress').style.display = 'none';
document.querySelector('.bar .progress-line.python').style.display = 'none';


//soft skills
document.querySelector('.bar .progress-line-soft-skills').style.display = 'none';
document.querySelector('.bar .progress-line-soft-skills.creativity').style.display = 'none';
document.querySelector('.bar .progress-line-soft-skills.adaptivity').style.display = 'none';
document.querySelector('.bar .progress-line-soft-skills.problem-solving').style.display = 'none';
document.querySelector('.bar .progress-line-soft-skills.accountability').style.display = 'none';
document.querySelector('.bar .progress-line-soft-skills.empathy').style.display = 'none';

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){

            //skills
            document.querySelector('.bar .progress-line.html').style.display = 'grid';
            document.querySelector('.bar .progress-line.css').style.display = 'grid';
            document.querySelector('.bar .progress-line.jquery').style.display = 'grid';
            document.querySelector('.bar .progress-line.ReactJS').style.display = 'grid';
            document.querySelector('.progress-line.Wordpress').style.display = 'grid';
            document.querySelector('.bar .progress-line.python').style.display = 'grid';



            //soft skills
            document.querySelector('.bar .progress-line-soft-skills').style.display = 'grid';
            document.querySelector('.bar .progress-line-soft-skills.creativity').style.display = 'grid';
            document.querySelector('.bar .progress-line-soft-skills.adaptivity').style.display = 'grid';
            document.querySelector('.bar .progress-line-soft-skills.problem-solving').style.display = 'grid';
            document.querySelector('.bar .progress-line-soft-skills.accountability').style.display = 'grid';
            document.querySelector('.bar .progress-line-soft-skills.empathy').style.display = 'grid';

            
            console.log(entry);
        }
    });
}, options);

observer.observe(aboutSection);