const Form = ({textHandler,dayHandler,reminderHandler,submitHandler,text,day,reminder,error}) =>{

  const submitWatcher = (e) => {
    e.preventDefault()
    submitHandler();
  }

    return(
        <form className="addForm">
       {error && <p>{error}</p>}
            <div className='form-control'>
              <label>Task</label>
              <input type="text" placeholder="Add Task" value={text}  onChange={textHandler} required="true"/>
            </div>
            <div className='form-control'>
              <label>Day and time</label>
              <input type="date" placeholder="Add Day and Time" value={day}  onChange={dayHandler} required="true" />
            </div>
              <div className="reminder">
              <label>Set Reminder</label>
              <input type="Checkbox"  checked={reminder} onChange={reminderHandler} />
              </div>
            <div className="save-btn">
              <button onClick={submitWatcher} type="submit">Save Task</button>
              </div>



        </form>
    )
}

export default Form
