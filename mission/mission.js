const themeSelector = document.getElementById('theme');

function changeTheme() {
    let value = themeSelector.value;
    let logo = document.getElementById('logo');

    if (value == 'dark') {
        document.body.classList.add(value);
        logo.src='images/byui-logo_white.png';
    }
    else {
        document.body.classList.remove('dark');
        logo.src='images/byui-logo_blue.webp'
    }
    
}

themeSelector.addEventListener('change', changeTheme);