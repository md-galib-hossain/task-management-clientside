import React from "react";
import "../../my.scss";

const Task = ({ task }) => {
  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <img src={task.dbimg} alt="Shoes" />
      </figure>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <p className="text-black">{task.details}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="items-center p-3 font-semibold rounded-md bg-primary-color text-white"
          >
            Update
          </button>

          <button
            type="button"
            className="items-center p-3 font-semibold rounded-md bg-primary-color text-white"
          >
            Delete
          </button>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border-primary-color text-white"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Task;
