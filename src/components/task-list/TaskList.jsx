import "./TaskList.css"
import TaskListItem from "../task-list-item/TaskListItem"
import { useState } from "react"
const TaskList = () => {
    /*lo de abajo es un estado. no te webees   */
    const [tasks, setTasks] = useState([])
    const [addTaskIsOpen, setAddTaskIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const openAddTask = () => {
        setAddTaskIsOpen(true)
    }
    const addTask = (task) => {
        if (task.length === 0) return
        /* los 3 puntos sirven para copiar el dato */
        let newArray = [...tasks]
        newArray.push(task)    
        setTasks(newArray)
        setAddTaskIsOpen(false)
        setInputValue("")
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const deleteTask = (index) => {
        let deletedArray = [...tasks]
        deletedArray.splice(index, 1)
        setTasks(deletedArray)  
    }
    return (
        <div className="TaskList">
            {tasks.length === 0 ? (
                <h1>Add tasks!</h1>
            ) : (
                < div className="TaskListItems">
                    {tasks.map((task, index) => (
                        <TaskListItem key={index} task={task} index={index} deleteTask={deleteTask}/>
                    ))}                 
                </div>
            )}
            {addTaskIsOpen && (
                <div className="AddTask">
                    <input className="InputTask" id="task" type="text" placeholder="Add task" value={inputValue} onChange={handleInputChange}/>
                    <button onClick={() => addTask(inputValue)}>Add</button>
                </div>
            )}
            <div >
                <button className="AddTaskButtons" onClick={openAddTask}>Add task</button>
                {addTaskIsOpen && (
                    <button onClick={() => setAddTaskIsOpen(false)}>Cancel</button>
                )}
            </div>
        </div>
    );
    
}

export default TaskList