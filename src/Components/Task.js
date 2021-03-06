import {FaTimes} from 'react-icons/fa';


const Task = ({task,deleteHandler,reminderToggle}) => {

    return(
            <div className={`task  noselect ${task.reminder ? 'show' : ''}`} onDoubleClick={ () => reminderToggle(task._id)} >
                   <div className="task-text">
                   <h1>{task.text}</h1>
                   <p>{task.day}</p>
                   
                   </div> 
              <FaTimes className="delete-btn" onClick={() => deleteHandler(task._id)} />
            </div>
                   )
}

export default Task;