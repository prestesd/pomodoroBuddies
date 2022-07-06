import { useState, useEffect, useRef } from 'react';
import audio from '../assets/yeehaw.mp3';
import './Counter.css';

var adjustTimer = null;
const yeehaw = new Audio(audio);

export default function Counter(){
    const [ counter, setCounter ]  = useState({ min: 0, sec: 5, pause: false });
    const [ buttonState, setButtonState ] = useState("Reproduzir");
    const [ hiddenState, setHiddenState ] = useState("hidden");
    const [ taskOptions, setAllTasks ] = useState([]);
    const [ cicleGoals, setCicleGoals ] = useState(0);
    const [ numberOfCicles, setNumberOfCicles] = useState(0);

    const selectedTask = useRef(null);

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
        let updateCounterCalled = false;
        setCounter(({ min, sec, pause }) => {
            if(min > -1) {
                if(sec > 0) {
                    return { min: min, sec: sec - 1, pause };
                } else {
                    if (updateCounterCalled){
                        return resetPomodoro(!pause, true);
                    }
                    if (min - 1 === -1){
                        yeehaw.play();
                        updateCounterCalled = true;
                        return resetPomodoro(!pause);
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

    function resetPomodoro(pause = false, called = false)
    {
        clearInterval(adjustTimer);
        if(pause === true && called === false){
            setNumberOfCicles(num =>{
                const updatedCicles = num + 1;
                compareCicles(cicleGoals, updatedCicles);
                return updatedCicles;
            });
        }
        setButtonState("Reproduzir");
        setCounter({min: pause ? 5: 25, sec: 0, pause});
        setHiddenState("hidden");
        adjustTimer = null;
        return ({min: pause ? 5: 25, sec: 0, pause});
    }

    const retrieveCicles = event => {
        const index = taskOptions.findIndex(task => event.target.value === task.id);
        setCicleGoals(taskOptions[index].cicles);
    }

    function compareCicles(cicleGoals, numberOfCicles){
        let chosenTaskId = selectedTask.current.value;
        if (cicleGoals == numberOfCicles){
            const indexOfTask = taskOptions.findIndex(task => task.id === chosenTaskId);
            let actualTask = taskOptions[indexOfTask];
            actualTask.completed = true;
            taskOptions[indexOfTask] = actualTask;
            localStorage.setItem("tasksArray", JSON.stringify(taskOptions));
        }
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
                            <h5 className='applythatGrayColor' id='choose-tasks-label'> Escolha uma tarefa: </h5>
                        </div>
                        <div className='col-sm-3'>  
                            <select name='list-of-tasks-timer' id='list-of-tasks' onChange={ retrieveCicles } ref={selectedTask} disabled={hiddenState === ""}>
                            <option value="0">Escolha...</option>{ taskOptions.filter((task)=>task.completed == false).map((task)=><option value={task.id}>{task.title}</option>)}
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
                        <div className='cicles-div mt-3 text-center'>
                            <h5 className='applythatGrayColor'>Ciclos feitos: {numberOfCicles} de {cicleGoals} </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}