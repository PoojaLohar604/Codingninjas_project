// Javascript of light and dark mode

const button = document.querySelector('.button');
const bodyTag = document.querySelector('body');

button.onclick = () => {
    button.classList.toggle('active');
    bodyTag.classList.toggle('active');
}
