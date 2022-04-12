let btn = document.getElementById('ok');
let spanCreated = false;

document.addEventListener('click', () => {

    if (spanCreated === false) {
        console.log('it work!');
        btn.remove();
        console.log(btn);

        const div = document.getElementById('frostedDiv');

        const span = document.createElement('span');
        styleSpan();
        div.appendChild(span);

        let Minutes = 60 * 30, display = document.querySelector('#time');
        startTimer(Minutes, display);

        function startTimer(duration, display) {
            let timer = duration, minutes, seconds;

            setInterval(function () {
                console.log(timer);

                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.textContent = minutes + ":" + seconds;
                timer++;
        
                if (--timer < 0 && duration === 1800) {
                    duration = 60 * 5;
                    timer = duration;
                    console.log('first done');
                } else if (--timer < 0 && duration === 300) {
                    duration = 60 * 30;
                    timer = duration;
                    console.log('second done');
                }
            }, 1000);

        }

        function styleSpan() {
            span.id = 'time';
            span.style.top = '50%';
            span.style.left = '50%';
            span.style.transform = 'translate(-50%, -40%)';
            span.style.position = 'absolute';
            span.style.textAlign = 'center';
            span.style.fontSize = '80px';
            span.style.color = 'black';
            span.style.fontFamily = "'Anek Odia', sans-serif";
        }

        spanCreated = true;
    } else {
        alert('Timer already created!');
    }
});