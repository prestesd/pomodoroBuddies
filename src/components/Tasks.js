import './Tasks.css';

export default function Tasks(){

var tasksArray = [];

function markSelectedRadio(){
    var radios = document.getElementsByName("inlineRadioOptions");
    for (let i = 0; i<radios.length; i++)
    {
        if(radios[i].checked)
        {
            return radios[i].value;
        }
    }  
}

function whatWasTheNameOfTheTask(){
    let id = document.getElementById("input-name-task");
    if (id.value !== ""){
        return id.value;
    }
    return "";
}

function generateGuid() {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j == 8 || j == 12 || j == 16 || j == 20)
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

function createTask(){

    let pomodoroQuantity = markSelectedRadio();
    let title = whatWasTheNameOfTheTask();
    const id = generateGuid();

    if (title === "")
        title = "Tarefa " + id;
    

    if (!pomodoroQuantity)
        pomodoroQuantity = "1";

        let newTask = {
            id: id,
            title: title,
            cicles: pomodoroQuantity,
            completed: false
        }
        saveTask(newTask);
}

function saveTask(newTask){
    if (tasksArray.length > 0)
            tasksArray = getAll();
    tasksArray.push(newTask);
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    clearFields();
}

function clearFields(){
    document.getElementById("input-name-task").value="";
}

function getAll() {
    const tasksRaw = localStorage.getItem("tasksArray");
    return JSON.parse(tasksRaw);
}

    return(
        <div className="container-sm">
            <div className='card'>
                <h2 className='card-title'> Cadastro de Tarefas</h2>
                <form>
                    <div className='card-body task-register'>
                        <div className="input-group mb-3">
                            <label className="input-group-text btn-danger" id="inputGroup-sizing-default">Nome da Tarefa:</label>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="input-name-task" required/>
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
                        <div className='send-task-form'>
                            <button className="btn btn-danger" type="button" aria-expanded="false" onClick={createTask} >Cadastrar tarefa</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}