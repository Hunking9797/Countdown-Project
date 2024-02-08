let date = document.querySelector(".date").innerText;
let display = document.querySelectorAll('input');

function clock(){
    let endDate = new Date(date);
    let currentDate = new Date();
    let seconds = (endDate - currentDate) / 1000;

    if(seconds < 0) return;

    let days = Math.floor(seconds / (24*60*60));
    let hours = Math.floor(seconds / (60 * 60) % 24);
    let minutes = Math.floor(seconds / 60 % 60);
    seconds = Math.floor(seconds % 60);
    
    display[0].value = days;
    display[1].value = hours;
    display[2].value = minutes;
    display[3].value = seconds;
}

setInterval( () => {
    clock();
}, 1000);