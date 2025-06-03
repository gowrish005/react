import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState("");

  const addTask=()=>{
    if(newTask.trim()){
      setTasks([
        ...tasks,{
          id:Date.now(),text:newTask,completed:false
        }
      ]);
      setNewTask('');
    }
  };

  const deleteTask=(taskId)=>{
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const toggleCompl=(taskId)=>{
    setTasks(tasks.map(task => task.id===taskId ? {...task,completed:!task.completed}:task
    ));
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} >
            <span
              onClick={() => toggleCompl(task.id)}
              style={{marginRight: '10px' }}
            >
              {task.text}
            </span>
              {task.completed ? 'Completed' : 'Incomplete'}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
