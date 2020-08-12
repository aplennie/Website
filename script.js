const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
var tooltipSpan = document.getElementsByClassName('tooltiptext')[0];

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        tooltipSpan.innerHTML = "hey you! yea you. ya like light mode? click me.";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        tooltipSpan.innerHTML = "hey you! yea you. ya like dark mode? click me.";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

//https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8


window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x - 120) + 'px';
};

//http://jsfiddle.net/HJf8q/2/