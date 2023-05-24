export const Task = (props) => {
    return (
        <div style={{backgroundColor:props.isCompleted ? "green" : "white"}}>
        <h2>{props.taskName}</h2>
        <button onClick={() => {props.completeTask(props.id)}}>Complete</button>
        <button onClick={() => {props.deleteTask(props.id)}}>Del</button>
        </div>
        );
}