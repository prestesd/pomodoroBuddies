import { useState, useEffect } from "react";
import "./TaskList.css";

export default function TaskList(){
    const [allTasks, setAllTasks] = useState([]);
    const [ updatedTasks, setUpdates] = useState(false);

    useEffect(()=>{
       const loadedTasks = JSON.parse(localStorage.getItem("tasksArray"));
       setAllTasks(loadedTasks);
    }, [updatedTasks]);

    function callModal(modalId){
        document.getElementById("modal-button"+modalId).click();
    } 

    function removeTask(task){
        const oldTasksArray = getAll().filter((tasks)=>tasks.id!== task.id);
        localStorage.setItem("tasksArray", JSON.stringify(oldTasksArray));
        setUpdates((ut)=>!ut);
    }

    function editTask(oldTask){
        // const newTask = Object.assign({}, task);
        const newTask = { ...oldTask };
        newTask.title = document.getElementById("input-name-task"+ newTask.id).value;
        var radios = document.getElementsByName("inlineRadioOptions");
        for (let i = 0; i<radios.length; i++)
        {
            if(radios[i].checked)
            {
                newTask.cicles = radios[i].value;
            }
        }  
       newTask.status = document.getElementById("task-status"+newTask.id).value === "true";    
       saveUpdates(newTask);
    }

    function saveUpdates(newTask){
        const updatedArrayOfTasks = getAll();
        const index = updatedArrayOfTasks.findIndex((task )=> task.id === newTask.id);
        if(index === -1)
            return alert("Erro! Task não encontrada");
        updatedArrayOfTasks[index] = newTask;
        localStorage.setItem("tasksArray", JSON.stringify(updatedArrayOfTasks));
        document.getElementById("close-fckn-modal"+ newTask.id).click();
        setUpdates((ut)=>!ut);  
    }

    function getAll() {
        const tasksRaw  = localStorage.getItem("tasksArray");
        return JSON.parse(tasksRaw || "[]");
    }

    if (allTasks.length === 0)
    {
        // In case there's no tasks...
        return (
            <div>
                <h2 className="applythatGrayColor text-center">Sem tarefas por enquanto! Que tal começar?</h2>
            </div>
        )   
    }
    return( allTasks.map((task)=>{
        return( 
                <div className="applythatGrayColor row">
                    <div className="col-sm-6">
                        <ul>
                            <h4><b>Tarefa:</b> { task.title }</h4>
                            <li><b>Tempo destinado: </b>{ task.cicles } Pomodoros</li>
                            <li><b>Status:</b>  { task.status ? "Concluído" : "Não concluído" }</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex ctrlBtns">
                            <button type="button" className="btn btn-light" id='edit-task' onClick={()=>{callModal(task.id)}}>Editar Tarefa</button>
                            <button type="button" className="btn btn-danger" onClick={()=>{removeTask(task)}}>Deletar Tarefa</button>
                        </div>
                    </div>

                        {/* MODAL EDIÇÃO */}
                            <button type="button" className="btn btn-primary" id ={"modal-button"+task.id} data-bs-toggle="modal" data-bs-target={"#edit-modal"+task.id} hidden>
                            </button>

                            <div className="modal fade" id={"edit-modal"+task.id} tabIndex="-1" aria-labelledby="modal-label" aria-hidden="true">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="applyThatGrayColor">Edição de Tarefa</h4>
                                            <button type="button" className="btn-close" id={"close-fckn-modal"+task.id} data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className='card-body task-register'>
                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text btn-danger" id="inputGroup-sizing-default">Nome da Tarefa:</label>
                                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id={"input-name-task"+task.id} defaultValue={task.title} required/>
                                                    </div>
                                                    <div className="input-group mb-3 duration-time">
                                                        <div className='duration-time-text'>
                                                            <label className="btn btn-danger" type="button">Tempo de duração</label>
                                                        </div>
                                                        <div className='radio-options-pomodoro mt-2'>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"/>
                                                                <label className="form-check-label" htmlFor="inlineRadio1">1 Pomodoros</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"/>
                                                                <label className="form-check-label" htmlFor="inlineRadio2">2 Pomodoros</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                                                                <label className="form-check-label" htmlFor="inlineRadio3">3 Pomodoros</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
                                                                <label className="form-check-label" htmlFor="inlineRadio4">4 Pomodoros</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3 duration-time">
                                                        <label htmlFor="status">Status:</label>
                                                        <select name="status" id={"task-status"+task.id} defaultValue={task.status}>
                                                            <option value="false">Não concluído</option>
                                                            <option value="true">Concluído</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                            <button type="button" className="btn btn-primary" onClick={()=>{editTask(task)}}>Salvar alterações </button>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                    {/* FIM MODAL EDIÇÃO */}
                </div>
            );
        
    }));

}