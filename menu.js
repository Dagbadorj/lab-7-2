const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');


menuIcon.addEventListener('click', function () {
  if (menu.style.opacity == "1") {
    menu.style.opacity = '0';
    menu.style.pointerEvents = 'none';
  } else {
    menu.style.opacity = '1';
    menu.style.pointerEvents = 'auto';
  }
})



