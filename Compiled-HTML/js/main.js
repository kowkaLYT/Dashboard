//show and hide sidebar
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.main__sidebar-icon');
    const sidebarCloseButton = document.querySelector('.sidebar__logo-icon');
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
    sidebarCloseButton.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });
});


//show search bar on mobile
document.addEventListener('DOMContentLoaded', function () {
    const search = document.querySelector('.main__search-input');
    const searchToggle = document.querySelector('.main__search-icon');

    searchToggle.addEventListener('click', function () {
        search.classList.toggle('active');
    });
});
