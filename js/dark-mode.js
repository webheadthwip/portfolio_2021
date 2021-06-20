export default function darkMode() {
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.querySelector('#toggle-dark-mode');

    const enableDarkMode = () => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', null);
    }

    if (darkMode === 'enabled' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    if(darkModeToggle){
    darkModeToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });}
}