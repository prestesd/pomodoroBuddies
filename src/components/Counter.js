import { useState } from 'react';
import './Counter.css';

var adjustTimer = null;
export default function Counter(){
    const [counter, setCounter] = useState({ min: 25, sec: 0, pause: false });
    const [buttonState, setButtonState] = useState("Reproduzir");
    const [hiddenState, setHiddenState] = useState("hidden");

    function controlPomodoro(){
        if (!adjustTimer){
            adjustTimer = setInterval(updateCounter, 1000);
            setButtonState("Pausar");
            setHiddenState("");
        }
        else{
            clearInterval(adjustTimer);
            adjustTimer = null;
            setButtonState("Reproduzir");
            setHiddenState("hidden");
        }
    }

    function updateCounter(){
        setCounter(({ min, sec, pause }) => {
            if(min > -1) {
                if(sec > 0) {
                    return { min: min, sec: sec - 1, pause };
                } else {
                    if (min - 1 === -1){
                        resetPomodoro(!pause);
                    }
                    return { min: min - 1, sec: 59, pause };
                }
            }   
            clearInterval(adjustTimer);
            adjustTimer = null;
            return { min, sec, pause };
        })
    }

    function formatTime(number){
        if(number < 10) 
            return "0" + number;
        else
            return number;    
    }

    function resetPomodoro(pause = false)
    {
        console.log(pause);
        clearInterval(adjustTimer);
        setCounter({min: pause ? 5 : 25, sec:0, pause});
        setButtonState("Reproduzir");
    }

    return( 
        <div className="container-sm">
            <div className="card text-white ">
                <div className='card-header applythatGrayColor'>
                    <h1>Temporizador Pomodoro</h1>
                </div>
                <div className='card-body counter-wrapper' role='status'>
                    <div className='timer-area'>
                        <div className='timer-components'>
                            <h1 className='applythatGrayColor pointers'>{formatTime(counter.min)}</h1>
                            <h1 className='applythatGrayColor pointers'>:</h1>
                            <h1 className='applythatGrayColor pointers'>{formatTime(counter.sec)}</h1>
                        </div>
                        <div className='div-btn-start'>
                            <button className="btn btn-danger btnController" onClick={controlPomodoro}>{buttonState}</button>
                            <button className="btn btn-danger btnController" onClick={()=>resetPomodoro()} hidden={hiddenState}>Recomeçar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}