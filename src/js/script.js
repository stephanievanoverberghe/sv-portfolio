const light = document.querySelector('#light');
const dark = document.querySelector('#dark');
const lightMobile = document.querySelector('#light-mobile');
const darkMobile = document.querySelector('#dark-mobile');
const root = document.documentElement;

const toggleDark = () => {
    root.classList.toggle('dark');
};

light.addEventListener('click', toggleDark);
dark.addEventListener('click', toggleDark);
lightMobile.addEventListener('click', toggleDark);
darkMobile.addEventListener('click', toggleDark);
