const countdown = () => {
    const objective = new Date('September 06, 2021 00:00:01').getTime();
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

    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentSecond = new Date().getSeconds();

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    document.querySelector('.day').innerText = leftDay;
    document.querySelector('.hour').innerText = leftHour;
    document.querySelector('.minute').innerText = leftMinute;
    document.querySelector('.second').innerText = leftSecond;

    document.querySelector('.time').innerText = "Saat : " + currentHour + ":" + currentMinute + ":" + currentSecond;
    document.querySelector('.date').innerText = "Tarih : " + currentDay + "/" + currentMonth + "/" + currentYear;

    if(left < 0){
        const past = now - objective;
        const pastDay = Math.floor(past / day);
        const pastHour = Math.floor((past % day) / hour);
        const pastMinute = Math.floor((past % hour) / minute);
        const pastSecond = Math.floor((past % minute) / second);

        document.querySelector('.center-text').innerText = "Okulun Açık Oldugu Gün, Saat, Dakika, Saniye Miktarı";

        document.querySelector('.day').innerText = pastDay;
        document.querySelector('.hour').innerText = pastHour;
        document.querySelector('.minute').innerText = pastMinute;
        document.querySelector('.second').innerText = pastSecond;
    }
}

setInterval(countdown, 1000)
