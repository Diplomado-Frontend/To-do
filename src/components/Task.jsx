import React from "react";

const Task = ({ task, setTask, deleteTask }) => {

  const onHandleDelete = () => {
    const response = confirm("Do yo want to delete this task?");

    if (response) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="bg-white shadow.md px-5 py-10 rounded-lg mt-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Title:
        <span className="font-normal normal-case">{task.title}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date:
        <span className="font-normal normal-case">{task.date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Description:
        <span className="font-normal normal-case">{task.description}</span>
      </p>

      <div>
        <button
          className="mr-4 bg-green-600 hover:bg-green-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="button"
          onClick={(x) => {
            setTask(task);
          }}
        >
          Update
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 mt-4 py-2 px-10 rounded-md text-white font-bold"
          type="button"
          onClick={(x) => {
            onHandleDelete(x);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
