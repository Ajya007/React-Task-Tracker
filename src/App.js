import './App.css';
import { useState } from "react";
import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js';
import Form from './Components/Form.js'



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


const deleteHandler= (id) =>{
  setTasks(tasks.filter((el) =>
  el.id !== id)
 )};

 const reminderToggle = (id) =>{
    setTasks(tasks.map((el) =>
      el.id===id ? {...el, reminder: !el.reminder } : el
    ))
 };


  return (
    <>

    <div className="App">
      <div className="container">
      <Header />
      <Form />
      <Tasks 
      tasks={tasks} 
      setTasks={setTasks}
       deleteHandler={deleteHandler}
       reminderToggle={reminderToggle}
       />
       </div>
    </div>
     
    </>
  );
}

export default App;
