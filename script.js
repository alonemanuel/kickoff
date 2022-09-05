const container = document.querySelector('.bottom_signup');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a new text content!'
container.appendChild(content);

function alertFunction(e) {
    alert("YAY! YOU DID IT!");
    e.target.style.background = 'blue';
}

signUpButton.addEventListener('keydown', alertFunction);

