import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import "../../my.scss";

const Updatetask = () => {
  const task = useLoaderData();
  const [updatetask, setUpdatetask] = useState("");

  const [mytask, setMytask] = useState(task);

  const handleChange = (event) => {
    setUpdatetask(event.target.value);
    const field = event.target.name;
    const value = event.target.value;
    const newtask = { ...mytask };
    newtask[field] = value;
    setMytask(newtask);
  };
  const handleSubmit = () => {
    fetch(
      `https://task-management-serverside.vercel.app/updatetask/${task?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(mytask),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast("Task updated sucessfully");
        console.log(data);
      });
  };
  // console.log(task);
  return (
    <div className="px-8 pb-8">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl Text_style font-medium mb-8">
          Update your task
        </h2>
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
          <figure className="flex justify-center">
            <img src={task?.dbimg} alt="Shoes" />
          </figure>
          <div className="flex flex-col justify-between p-6 space-y-8">
            {/* <div className="space-y-2">
              <textarea
                name="details"
                className="text-black w-96"
                defaultValue={task?.details}
                onChange={handleChange}
              />
              </div> */}
            <fieldset className="flex justify-center mx-auto space-y-1 text-black">
              <div className="flex w-96">
                <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md text-white bg-primary-color">
                  Edit
                </span>
                <textarea
                  type="text"
                  name="details"
                  className="flex flex-1 p-2 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 text-black  focus:ring-black"
                  defaultValue={task?.details}
                  onChange={handleChange}
                />
              </div>
            </fieldset>

            <div className="grid grid-cols-1 w-1/2 mx-auto gap-2">
              <button
                onClick={handleSubmit}
                type="submit"
                className="items-center p-3 font-semibold rounded-md bg-primary-color text-white"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatetask;
