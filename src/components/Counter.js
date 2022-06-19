import { useState, useEffect } from 'react';
import audio from '../assets/yeehaw.mp3';
import './Counter.css';

var adjustTimer = null;
const yeehaw = new Audio(audio);

export default function Counter(){
    const  [counter, setCounter ]  = useState({ min: 25, sec: 0, pause: false });
    const [ buttonState, setButtonState ] = useState("Reproduzir");
    const [ hiddenState, setHiddenState ] = useState("hidden");
    const [ taskOptions, setAllTasks ] = useState([]);

    useEffect(()=>{
        const arrayOfTasks = JSON.parse(localStorage.getItem("tasksArray"));
        setAllTasks(arrayOfTasks);
     }, []);

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
                        yeehaw.play();
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
       
        clearInterval(adjustTimer);
        setCounter({min: pause ? 5 : 25, sec:0, pause});
        setButtonState("Reproduzir");
    }

    return( 
        <div className="container-sm">
            <div className="card text-white ">
                <div className='card-header applythatGrayColor'>
                    <div className='row'>
                        <h2>Temporizador Pomodoro</h2>
                    </div>
                    <div className='row row-task-choice'>
                        <div className='col-sm-3'>
                            <h5 className='applythatGrayColor' id='choose-tasks-label'> Escolha uma task: </h5>
                        </div>
                        <div className='col-sm-3'>  
                            <select name='list-of-tasks-timer' id='list-of-tasks'>
                                { taskOptions.length > 0 ? taskOptions.map((task)=><option value={task.id}>{task.title}</option>) : <option value="livre">Sem task</option>}
                            </select>
                        </div>
                    </div>
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