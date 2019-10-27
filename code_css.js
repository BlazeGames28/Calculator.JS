const toggleSwitch = document.getElementById('theme-switch');

toggleSwitch.addEventListener('change', function(e){
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('em').innerText = "Enable Light Mode!";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('em').innerText = "Enable Night Mode!";
    }
}, false);