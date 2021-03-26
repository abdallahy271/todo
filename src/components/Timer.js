import React, {useEffect, useState, useRef } from 'react'
import './Timer.css'


function Timer( { startOver, setStartOver, timerRunning, setTimerRunning, setColorChanger, timeLimit }) {
    // Start with an initial value of 20 seconds
    const TIME_LIMIT = timeLimit;
    const FULL_DASH_ARRAY = Math.ceil(2 * Math.PI * 45);
    // Initially, no time has passed, but this will count up
    // and subtract from the TIME_LIMIT
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    
    const [ timeShown, setTimeShown ]  = useState(formatTimeLeft(timeLeft))
    const [ strokeDash, setStrokeDash ] = useState("283")
    const [ timerInterval, setTimerInterval ] = useState(null);
    const ref = useRef()


        // Warning occurs at 10s
    const WARNING_THRESHOLD = 10;
    // Alert occurs at 5s
    const ALERT_THRESHOLD = 5;

    const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
    };
      
    let remainingPathColor = COLOR_CODES.info.color;
    const [ colorNames, setColorNames ] = useState(COLOR_CODES.info.color)

    function formatTimeLeft(time) {
        // The largest round integer less than or equal to the result of time divided being by 60.
        const minutes = Math.floor(time / 60);
        
        // Seconds are the remainder of the time divided by 60 (modulus operator)
        let seconds = time % 60;
        
        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      
        // The output in MM:SS format
        return `${minutes}:${seconds}`;
      }

      function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
      
        // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.
        if (timeLeft <= alert.threshold) {
            
            setColorNames(alert.color);
            setColorChanger(alert.color)
      
        // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
        } else if (timeLeft <= warning.threshold) {
        
            setColorNames(warning.color);
            setColorChanger(warning.color)

        }
      }

      function startTimer() {
        if (timerRunning){
        let a
            a = setInterval(() => {
          // The amount of time passed increments by one
          if (timePassed <= TIME_LIMIT-1){
            
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            // The time left label is updated
            setTimeShown(formatTimeLeft(timeLeft));
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
          }
          setTimerInterval(a)
        }, 1000)};

      }
    //   clearInterval(timerInterval);

      function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
          
      // Update the dasharray value as time passes, starting with 283
      function setCircleDasharray() {
        const circleDasharray = `${(
          calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        
        setStrokeDash(circleDasharray)
               
     
      }

    function reset() {
        clearInterval(timerInterval);
        setTimerInterval(null)
        timePassed = 0;
        timeLeft = TIME_LIMIT
        setTimeShown(formatTimeLeft(TIME_LIMIT))
        setStrokeDash("283")
        setColorNames(COLOR_CODES.info.color)
        setColorChanger("")
        setStartOver(false)
        setTimerRunning(false)


    }


    console.log(timerInterval)

    useEffect(() => {
        if (timerRunning && !startOver)
            startTimer();
        if (startOver){
            reset()
        }
        
    }, [ startOver, timerRunning])
   
    useEffect(()=>{
        reset()
    },[timeLimit])

    return (
        <div className='Timer'>
            <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                <path
                    ref = {ref}
                    id="base-timer-path-remaining"
                    strokeDasharray={strokeDash}
                    className={`base-timer__path-remaining ${remainingPathColor} ${colorNames}`}
                    d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                    "
                ></path>
                </g>
            </svg>
            <span id="base-timer-label" className="base-timer__label">{timeShown} </span>
            </div>
        </div>
    )
}

export default Timer
