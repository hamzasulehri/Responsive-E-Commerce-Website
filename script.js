const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


window.addEventListener("scroll", reveal);

function reveal(){

    let reveals = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
    );

    reveals.forEach(element => {

        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        let revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){
            element.classList.add("active");
        }
    });
}

reveal();

const products = document.querySelectorAll("#product1 .pro");

window.addEventListener("scroll", ()=>{

    products.forEach(product=>{

        const top = product.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            product.classList.add("active");
        }

    });

});