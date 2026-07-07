const texts = [
    "AI & Data Engineering enthusiast with hands-on experience in Neural Networks, Computer Vision, and NLP. From fine-tuning Q&A models to analyzing complex datasets — Let's turn data into intelligence."
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

    if(charIndex < texts[textIndex].length){

        typing.textContent += texts[textIndex][charIndex];

        charIndex++;

        setTimeout(type,25);

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