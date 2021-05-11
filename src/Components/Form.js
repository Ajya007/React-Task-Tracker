const Form = ({textHandler,dayHandler,reminderHandler,submitHandler,text,day,reminder}) =>{

    return(
        <form className="addForm">
            <div className='form-control'>
              <label>Task</label>
              <input type="text" placeholder="Add Task" value={text}  onChange={textHandler}/>
            </div>
            <div className='form-control'>
              <label>Day and time</label>
              <input type="text" placeholder="Add Day and Time" value={day}  onChange={dayHandler} />
            </div>
              <div className="reminder">
              <label>Set Reminder</label>
              <input type="Checkbox"  checked={reminder} onChange={reminderHandler} />
              </div>
            <div className="save-btn">
              <button onClick={submitHandler}type="submit">Save Task</button>
              </div>



        </form>
    )
}

export default Form