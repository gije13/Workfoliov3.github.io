function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show'); 
}

window.addEventListener('load', setActiveLink);


window.addEventListener('hashchange', setActiveLink);

function showContent(contentId) {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    const menuItems = document.querySelectorAll('.nav-menu ul li');
    menuItems.forEach(item => item.classList.remove('active'));

   
    document.getElementById(contentId).classList.add('active');

  
    const activeItem = Array.from(menuItems).find(
        item => item.textContent.trim().toLowerCase().replace(' ', '-') === contentId
    );
    if (activeItem) {
        activeItem.classList.add('active');
    }
}
