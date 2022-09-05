import React, { useEffect } from "react";
import Task from "./Task";

const TaskList = ({ tasks, setTask, deleteTask }) => {

  useEffect(() => {
    if(tasks.length > 0){
      console.log('INICIANDO XD')
    }
 
  }, [])
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scrol">
      {tasks && tasks.length ? (
        <>
          <h2 className="font-black text-3xl text-center mb-10">Task's list</h2>

          {tasks &&
            tasks.map((task) => {
              return <Task key={task.id} task={task} setTask={setTask} deleteTask={deleteTask}/>;
            })}
        </>
      ) : (
        <h2 className="font-black text-3xl text-center mb-10">No pending tasks</h2>   
      )}
    </div>
  );
};

export default TaskList;
