const countdown = () => {
    const objective = new Date('September 06, 2021 01:00:00').getTime();
    const now = new Date().getTime();
    const left = objective - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const leftDay = Math.floor(left / day);
    const leftHour = Math.floor((left % day) / hour);
    const leftMinute = Math.floor((left % hour) / minute);
    const leftSecond = Math.floor((left % minute) / second);

    document.querySelector('.day').innerText = leftDay;
    document.querySelector('.hour').innerText = leftHour;
    document.querySelector('.minute').innerText = leftMinute;
    document.querySelector('.second').innerText = leftSecond;
}

setInterval(countdown, 1000)