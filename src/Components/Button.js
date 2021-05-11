const Button = ({btntext,AddTaskHandler,color}) => {
    return(
           <button onClick={AddTaskHandler} style={{backgroundColor:color}}>{btntext}</button> 
    )
}
export default Button;