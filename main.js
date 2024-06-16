let yesbtn=document.querySelector(".yesbtn");
let nobtn=document.querySelector(".nobtn");
let t=document.querySelector(".t");


console.log("dd");
nobtn.addEventListener('click', (e) => {
    const button = e.target;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomX = Math.random() * (screenWidth - button.offsetWidth);
    const randomY = Math.random() * (screenHeight - button.offsetHeight);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

yesbtn.addEventListener('click', (e) => {
    t.style="visibility: visible;"
    nobtn.style="visibility: hidden;"
});