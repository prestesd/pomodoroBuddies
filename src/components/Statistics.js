import './Statistics.css';
import './Tasks';
import TaskList from './TaskList';

export default function Statistics(){

    
    return(
        <div className="container-sm divTaskList">
            <div className='card'>
                <h2 className='card-title'> Suas Tarefas</h2>
            </div>
            <div className='card-body' id='card-body'>
                <TaskList />
            </div>
        </div>
    );
}

