import "./TaskListItem.css"

const TaskListItem = ({task, index, deleteTask}) => {
    return (
            <div className="TLIR">
                <button className="TLIRButton" onClick={ () => deleteTask(index)}>Delete</button>
                <p>{task}</p>
            </div>
    )
}

export default TaskListItem
