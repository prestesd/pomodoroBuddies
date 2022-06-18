export default function TaskList(){
    var allTasks = JSON.parse(localStorage.getItem("tasksArray"));
    allTasks.forEach(task => {
        return( 
            <h1>Tarefa: {task.title}</h1>
        );
    });
}