import React, { useState, useEffect } from "react";
import Alert from "./Alert";


const Form = ({ task, setTask, tasks, setTasks }) => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);

  useEffect(()=> {
    if(Object.keys(task).length > 0) {
      setTitle(task.title);
      setDate(task.date);
      setDescription(task.description);
    }   
  }, [task])

  const generateId = () =>  {
    return Math.random().toString().substr(2);
  }
  
  //Form's validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([title, date, description].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const tasksObj = {
      title, 
      date,
      description,
      id: generateId()
    }

if (task.id) {
  //Editing the task

  tasksObj.id = task.id;
  const updatedTasks = tasks.map((taskState)=> taskState.id === task.id ? tasksObj : taskState )
  setTasks(updatedTasks);
  setTask({});

} else {
  //New register
  tasksObj.id = generateId();
  setTasks([...tasks, tasksObj]);
}


   
    setTitle('');
    setDate('');
    setDescription('');

  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">
        Tasks's creation
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && ( <Alert> <p> Missing fields to fill out </p> </Alert> )}

        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-gray-700 uppercase font-bold"
          >
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border-2 w-full p-2 mt-2 ronded-md placeholder-gray-400"
            type="text"
            placeholder="Task title"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Date
          </label>
          <input
            id="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            className="border-2 w-full p-2 mt-2 ronded-md placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-700 uppercase font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            className="border-2 w-full p-2 mt-2 ronded-md placeholder-gray-400"
            placeholder="Task's description"
          />
        </div>
        <input
          type="submit"
          className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer"
          value="Create task"
        />
      </form>
    </div>
  );
};

export default Form;
