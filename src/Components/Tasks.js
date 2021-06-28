import Task from "./Task.js"

const Tasks = ({tasks,deleteHandler,reminderToggle}) =>{

   
    return(
        <div className="tasks">
           {tasks.map((task) => {
               return(
                   <Task
                    key={task._id}
                    deleteHandler={deleteHandler}
                    task={task}
                    reminderToggle={reminderToggle}/>
               )
           })}
         
        </div>
    )
}

export default Tasks;