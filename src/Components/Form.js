const Form = () =>{
    return(
        <form className="addForm">
            <div className='form-control'>
              <label>Task</label>
              <input type="text" placeholder="Add Task"  />
            </div>
            <div className='form-control'>
              <label>Day and time</label>
              <input type="text" placeholder="Add Day and Time"  />
            </div>
              <div className="reminder">
              <label>Set Reminder</label>
              <input type="Checkbox"  />
              </div>
            <div className="save-btn">
              <button>Save Task</button>
              </div>



        </form>
    )
}

export default Form