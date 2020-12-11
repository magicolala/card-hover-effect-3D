//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container-fluid');

//Items
const title = document.querySelector('.title');
const sneak = document.querySelector('.sneaker');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizesButton = document.getElementsByClassName('btn');

//Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`;
    // sneak.style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`;
});

//Animate when mouse enter in the container
container.addEventListener('mouseenter', e => {
    setTimeout(() => {
        card.style.transition = 'none';
    }, 500);
    // Popin
    title.style.transform = 'translateZ(100px)';
    sneaker.style.transform = 'translateZ(130px) rotate(-20deg)';
    purchase.style.transform = 'translateZ(75px)';
    description.style.transform = 'translateZ(50px)';
    sizes.style.transform = 'translateZ(125px)';
});

//Animate when mouse out of the container
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.25s ease';
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    // Popback
    title.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'translateZ(0) rotate(0)';
    purchase.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
});

//Button active
for (let i = 0; i < sizesButton.length; i++) {
    sizesButton[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
