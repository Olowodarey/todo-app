import { useState } from 'react'
import './App.css'
function App() {
  let [tasks, setTasks] = useState([
    { text: "Complete one Episode", checked: false },
    { text: "Read one chapter", checked: false },
    { text: "Play football", checked: false }
  ]);

  let [newTask, setNewTask] = useState("");
  let [showInput, setShowInput] = useState(false);
  
  let handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask.trim(), checked: false }]);
      setNewTask("");
      setShowInput(false);
    }
  };

  let handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  let handleAddNewTask = () => {
    setShowInput(true);
  };


  
  return (
    <div className='App'>
      <h2 className='h2'>Todo List</h2>

      {showInput && ( 
        <div>
          <input
            className='input-add' type="text" value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Add your task here'
          />
          <button onClick={handleAddTask} className='btn'>Add Task</button>
        </div>
      )}

    

      <ul className='ul'>
        {tasks.map((task, index) => (
          <li className='li' key={index}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleToggleTask(index)}
            />
            <span className={task.checked ? 'done' : ''}>{task.text}</span>
          </li>
        ))}
      </ul>

      
      {!showInput && (
        <button onClick={handleAddNewTask} className='btn'>Add Task</button>
      )}

    </div>
  );
}
export default App
