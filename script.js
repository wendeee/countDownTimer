let days = document.querySelector('.days')
let  hours = document.querySelector('.hours')
let minutes = document.querySelector('.Mins')
let seconds = document.querySelector('.Seconds')

        

        setInterval(countDownTimer, 1000)

        function countDownTimer(){
            const endDate = new Date('April 16, 2022 00:00:00').getTime();
            const currentDate = new Date().getTime();

            let distance = endDate - currentDate;

            let sec = 1000;
            let mins = sec * 60;
            let hr = mins * 60;
            let day = hr * 24;
            const dayTime = Math.floor(distance / day);
            const hrsTime = Math.floor((distance % day)/hr);
            const minsTime = Math.floor((distance % hr)/mins);
            const secsTime = Math.floor((distance % mins) / sec); 

            days.innerText = dayTime;
            hours.textContent = hrsTime;
            minutes.textContent = minsTime;
            seconds.innerHTML = secsTime;
        }