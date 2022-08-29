import React from 'react'
import './Test.css'

const Test = () => {
    // var countDownDate = new Date("Aug 20,2022 00:00:00").getTime();
    // var x = setInterval(function () {
    //     var now = new Date().getTime();
    //     var distance = countDownDate - now;

    //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     document.getElementById("days").innerHTML = days;
    //     document.getElementById("hours").innerHTML = hours;
    //     document.getElementById("minutes").innerHTML = minutes;
    //     document.getElementById("seconds").innerHTML = seconds;

    //     if (distance < 0) {
    //         clearInterval(x);
    //         document.getElementById("days").innerHTML = "00";
    //         document.getElementById("hours").innerHTML = "00";
    //         document.getElementById("minutes").innerHTML = "00";
    //         document.getElementById("seconds").innerHTML = "00";
    //     }
    // }, 1000);


    return (
        <div className="container-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBIQPsmQjza3nOxVKaxN2JGOHumsm9nHehQ&usqp=CAU" className='logo' alt="true" />
            <div className="content">
                <p>Welcome to our Webb-School Website</p>
                <h1>We are <span>Launching</span> Soon</h1>
                <div className="launch-time">
                    <div>
                        <p id="days">00</p>
                        <span>Days</span>
                    </div>
                    <div>
                        <p id="hours">00</p>
                        <span>Hours</span>
                    </div>
                    <div>
                        <p id='minutes'>00</p>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <p id='seconds'>00</p>
                        <span>Seconds</span>
                    </div>
                </div>
                <button type='button'>Learn More</button>
            </div>
            <img src="https://www.freeiconspng.com/thumbs/rocket-png/red-rocket-png-5.png" className='rocket' alt="true" />
        </div>
    )
}
export default Test;