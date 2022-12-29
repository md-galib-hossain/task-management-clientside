import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Comcard = ({ task }) => {
  // handle status
  const handleStatus = (user) => {
    fetch(
      `https://task-management-serverside.vercel.app/notcompletedtasks/${task?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Task marked as not completed");
        }
      });
  };

  //   delete
  // task delete
  const handleDelete = (task) => {
    const agree = window.confirm(`are you confirm to delete: ${task?._id}`);
    if (agree) {
      // sending data to server
      fetch(
        `https://task-management-serverside.vercel.app/delete/${task?._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Task deleted");
            // const remainingtasks = loadedtasks.filter(
            //   (bk) => bk._id != task._id
            // );
            // setLoadedtasks(remainingtasks);
          }
        });
    }
  };

  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <img src={task?.dbimg} alt="Shoes" />
      </figure>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <p className="text-black">{task?.details}</p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <button
            onClick={() => handleDelete(task)}
            type="button"
            className="items-center p-3 font-semibold rounded-md bg-primary-color text-white"
          >
            Delete
          </button>
        </div>
        <button
          onClick={handleStatus}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border-primary-color text-white"
        >
          Not Completed!
        </button>
      </div>
    </div>
  );
};

export default Comcard;
