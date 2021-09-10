const countdown = () => {
    const objective = new Date('September 06, 2021 00:00:01').getTime();
    const now = new Date().getTime();
    const left = objective - now;

    

    if(left < 0){
        const past = now - objective;


        document.querySelector('.einstein').innerText = past;
        document.querySelector('.center-text').innerText = "Okulun Açık Olduğu Süre Milisaniye";
        document.querySelector('.center-text').style.fontSize = "4rem";
    }
}

setInterval(countdown, 1)
