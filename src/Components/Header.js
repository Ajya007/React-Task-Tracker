import {useLocation} from "react-router-dom"
import Button from './Button.js';

const Header = ({AddTaskHandler,addtask}) =>{

    const location=useLocation();

return(
    <div className="header">
    <h1>Task Tracker</h1>

    {
     location.pathname === '/' && <Button  color={addtask ? "red" : "green" } btntext={addtask ? "Close" : "Add"} AddTaskHandler={AddTaskHandler} />   
    }
    
    </div>)
}

export default Header;