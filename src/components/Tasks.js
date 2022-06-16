import './Tasks.css';
export default function Tasks(){
    return(
        <div className="container-sm">
            <div class='card'>
                <h2 class='card-title'> Cadastro de Tarefas</h2>
                <div class='card-body task-register'>
                    <div class="input-group mb-3">
                        <span class="input-group-text btn-danger" id="inputGroup-sizing-default">Nome da Tarefa:</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-3 duration-time">
                        <div className='duration-time-text'>
                            <button class="btn btn-danger" type="button">Tempo de duração</button>
                        </div>
                        <div className='radio-options-pomodoro mt-2'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">1 Pomodoros</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">2 Pomodoros</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label class="form-check-label" for="inlineRadio3">3 Pomodoros</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4" />
                                <label class="form-check-label" for="inlineRadio3">4 Pomodoros</label>
                            </div>
                        </div>
                    </div>
                    <div class='send-task-form'>
                        <button class="btn btn-danger" type="button" aria-expanded="false" >Cadastrar tarefa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}