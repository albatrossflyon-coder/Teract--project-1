function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}


window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    // Mobile-specific logic
  }
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu-list').classList.toggle('active');
});
