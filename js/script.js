const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
var tooltipSpan = document.getElementsByClassName('tooltiptext');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        tooltipSpan[0].innerHTML = "hey you! yea you. ya like light mode? click me.";
        localStorage.setItem('theme', 'dark'); 
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        tooltipSpan[0].innerHTML = "hey you! yea you. ya like dark mode? click me.";
        localStorage.setItem('theme', 'light'); 
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


//https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8


window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    Array.from(tooltipSpan).forEach((element) => {
        element.style.top = (y + 20) + 'px';
        element.style.left = (x - 50) + 'px';
    });
};

//http://jsfiddle.net/HJf8q/2/

const backButton = document.getElementsByClassName('back-button')[0];

function goBack() {
    window.history.back();
}

backButton.addEventListener('click', goBack);