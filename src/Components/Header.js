
import Button from './Button.js';

const Header = ({AddTaskHandler,addtask}) =>{
return(
    <div className="header">
    <h1>Task Tracker</h1>
    <Button  color={addtask ? "red" : "green" } btntext={addtask ? "Close" : "Add"} AddTaskHandler={AddTaskHandler} />
    </div>)
}

export default Header;