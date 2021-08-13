import './App.css';
import { useState,useEffect } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js';
import Form from './Components/Form.js';
import About from './Components/About.js'
import Footer from './Components/Footer.js'



function App() {
  
const [tasks,setTasks]=useState([]);

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


useEffect(() => {
  const fetchTasks = async () =>{
  const res = await fetch("https://node-app-tasktracker.herokuapp.com/tasks");

  const data = await res.json();

setTasks(data);
 
}
fetchTasks();
    



  
}
,[])



const fetchTask = async (id) =>{
  const res = await fetch(`https://node-app-tasktracker.herokuapp.com/tasks/${id}`);
  const data = await res.json();
  return data;
}



const submitHandler = async () =>{

  const task = {text,day,reminder};
const res = await fetch('https://node-app-tasktracker.herokuapp.com/tasks',{
  method: 'POST',
  headers:{
    'Content-type':'application/json'
  },
  body:JSON.stringify(task)
});

const data = await res.json();

setTasks([...tasks,data]);

  setText('');
  setDay('');
  setReminder(false);


}





const deleteHandler= async (id) =>{
  await fetch(`https://node-app-tasktracker.herokuapp.com/tasks/${id}`,{
  method :'DELETE'
})
  setTasks(tasks.filter((el) =>
  el._id !== id)
 )};

 const reminderToggle = async (id) =>{
  const taskToToggle = await fetchTask(id);
  const updatedTask = {reminder : !taskToToggle.reminder}
  await fetch(`https://node-app-tasktracker.herokuapp.com/tasks/${id}`,{
    method: 'PATCH',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(updatedTask)
  })
  const newres = await fetch(`https://node-app-tasktracker.herokuapp.com/tasks/${id}`)
  const data = await newres.json();
    setTasks(tasks.map((el) =>
      el._id===id ? {...el, reminder: data.reminder } : el
    ))
 };

 const[addtask,setADDTask]=useState(false);

 const AddTaskHandler = () => {
   setADDTask(!addtask);
 }

  return (
    <>
<Router>
  <div className="whole-app">
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

    </div>
    </Router>
    </>
  );
}

export default App;
