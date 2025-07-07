const icon_hamburger = document.querySelector('.icon_hamburger');
const closeNav = document.querySelector('.closeNav');
const navContent = document.querySelector('.navContent');

icon_hamburger.addEventListener('click', () => {
    navContent.style.display = 'flex' 

});

closeNav.addEventListener('click', () => {
    navContent.style.display = 'none'
    location.reload(); 

});

fetch('data.json')
    .then(response => response.json())
    .then(data => {

    });