
import Header  from './components/Header';
import TaskList from './components/TaskList';
import Form from './components/Form';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    const getTasksFromLocalStorage = () => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) ?? [];
        setTasks(tasksFromLocalStorage);
    }
    
    getTasksFromLocalStorage();
  }, []);
  

  useEffect(() => {
    if(tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);
  

  const deleteTask = (id) => {
    const newTasksList = tasks.filter( task => task.id !== id);
    setTasks(newTasksList);
    localStorage.setItem('tasks', JSON.stringify(newTasksList));
  }

  return (
    <div className="container mx-auto bg-[#add8e6]">
      <h1 className="mt-6"></h1>
      <Header />
      <div className='mt-12 md:flex'>
      <Form task={task} setTask={setTask} tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={ tasks } setTask={ setTask } deleteTask={deleteTask} />    
      </div>
    </div>
  )
}

export default App
