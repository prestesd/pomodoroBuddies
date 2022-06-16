import './Tasks.css';
export default function Tasks(){
    return(
        <div className="container-sm">
            <div className='card'>
                <h2 className='card-title'> Cadastro de Tarefas</h2>
                <div className='card-body task-register'>
                    <div className="input-group mb-3">
                        <span className="input-group-text btn-danger" id="inputGroup-sizing-default">Nome da Tarefa:</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3 duration-time">
                        <div className='duration-time-text'>
                            <button className="btn btn-danger" type="button">Tempo de duração</button>
                        </div>
                        <div className='radio-options-pomodoro mt-2'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">1 Pomodoros</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">2 Pomodoros</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">3 Pomodoros</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4" />
                                <label className="form-check-label" htmlFor="inlineRadio3">4 Pomodoros</label>
                            </div>
                        </div>
                    </div>
                    <div className='send-task-form'>
                        <button className="btn btn-danger" type="button" aria-expanded="false" >Cadastrar tarefa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}