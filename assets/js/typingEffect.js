const text = "Hi, it's Nguyen,";
const typingContainer = document.getElementById('typing');
let index = 0;

function type() {
    if (index < text.length) {
        typingContainer.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, 500);
});