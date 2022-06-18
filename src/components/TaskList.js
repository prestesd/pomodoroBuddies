export default function TaskList(){
    var allTasks = JSON.parse(localStorage.getItem("tasksArray"));
    for (let i = 0; i < allTasks.length; i++)
    {
        return( 
                <div >
                    <h3>Tarefa: {allTasks[i].title}</h3>
                    <h3>Tempo destinado: {allTasks[i].cicles} Pomodoros</h3>
                    <h3>Status: {allTasks[i].completed}</h3>
                </div>
            );
    }

}