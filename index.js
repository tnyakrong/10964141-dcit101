const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }
    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.appendChild(inputElement);

    inputElement.select();

    document.exeCommand('copy');
}

document.querySelector('#copy-text-btn').onclick=
function () {
    copyText(document.querySelector('#text'));
}