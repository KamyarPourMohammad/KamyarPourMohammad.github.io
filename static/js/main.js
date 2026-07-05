const texts = [
    "Computer Vision, Machine Learning and Neural netwok."
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

    if(charIndex < texts[textIndex].length){

        typing.textContent += texts[textIndex][charIndex];

        charIndex++;

        setTimeout(type,70);

    }
}

type();

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(l=>l.classList.remove("active"));

        link.classList.add("active");

    });

});