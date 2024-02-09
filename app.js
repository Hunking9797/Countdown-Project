let date = document.querySelector('.date').innerText;
let display = document.querySelectorAll('.remainingTime');

function clock(){
    let endDate = new Date(date);
    let currDate = new Date();
    let seconds = (endDate - currDate) / 1000;
    
    if(seconds < 0){
        let message = document.createElement('h1');
        let innerDiv = document.querySelector('.timeData');
        message.innerText = "Happy New Year";
        message.style.marginTop= "50px";
        innerDiv.after(message);
        clearInterval(interval);
        return;

    }

    let days = Math.floor(seconds /(24*60*60));
    let hours = Math.floor(seconds / (60 * 60) % 24);
    let minutes = Math.floor(seconds / (60) % 60);
    seconds = Math.floor(seconds % 60);

    display[0].value = days;
    display[1].value = hours;
    display[2].value = minutes;
    display[3].value = seconds;
}

let interval = setInterval(()=>{
    clock();
}, 1000);