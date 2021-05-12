import './App.css';
import { useState } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js';
import Form from './Components/Form.js';
import About from './Components/About.js'
import Footer from './Components/Footer.js'



function App() {
  
const [tasks,setTasks]=useState([
  {
    id:1,
    text:'Dentist Appointment',
    day:'Jan 10th at 9:00 am',
    reminder:false

  },
  {
    id:2,
    text:'Taking Out trash',
    day:'Feb 10th at 9:00 am',
    reminder:false

  },
  {
    id:3,
    text:'Meeting With Boss',
    day:'March 10th at 9:00 am',
    reminder:false

  }
]);

const [text,setText]=useState('');
const [day,setDay]=useState('');
const [reminder,setReminder]=useState(false);

 const textHandler = (e) =>{
  setText(e.target.value);

}
 const dayHandler= (e) =>{
  setDay(e.target.value);

}
const reminderHandler = (e) =>{
  setReminder(e.currentTarget.checked);
}

const submitHandler = (e) =>{
  e.preventDefault();
  setTasks([   ...tasks,{ text:text,day:day,reminder:reminder, id:Math.random()*10000}]);
  setText('');
  setDay('');
  setReminder(false);
}
const deleteHandler= (id) =>{
  setTasks(tasks.filter((el) =>
  el.id !== id)
 )};

 const reminderToggle = (id) =>{
    setTasks(tasks.map((el) =>
      el.id===id ? {...el, reminder: !el.reminder } : el
    ))
 };

 const[addtask,setADDTask]=useState(false);

 const AddTaskHandler = () => {
   setADDTask(!addtask);
 }

  return (
    <>
<Router>
    <div className="App">
      <div className="container">
      <Header
      AddTaskHandler={AddTaskHandler}
      addtask={addtask}
       />

       <Route path="/" exact render={(props) =>(
         <>
 {addtask &&  <Form 
       textHandler={textHandler}
        dayHandler={dayHandler} 
        reminderHandler={reminderHandler}
        submitHandler={submitHandler}
        text={text}
        day={day}
        reminder={reminder}
        />}
     
      <Tasks 
      tasks={tasks} 
      setTasks={setTasks}
       deleteHandler={deleteHandler}
       reminderToggle={reminderToggle}
       />

         </>
       ) } />
     

       <Route path="/about" component={About} />
        <Footer />
       </div>
    </div>
    </Router>
    </>
  );
}

export default App;
