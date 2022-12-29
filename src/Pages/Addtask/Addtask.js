import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const Addtask = () => {
  const { user, color } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loadedimage, setLoadedimage] = useState("");
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAdd = (data) => {
    const task = {
      dbimg: loadedimage,
      details: data.details,
      iscompleted: "no",
      email: user.email,
    };
    const image = data.dbimg[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        setLoadedimage(imgData.data.url);
      });

    fetch("https://task-management-serverside.vercel.app/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("You task have been added");
        }
      })

      .catch((er) => console.error(er));
  };
  return (
    <div className="px-8 pb-8">
      <div className={`${color ? "bg-white" : "bg-slate-800"} rounded-lg p-8`}>
        <h2 className="text-2xl Text_style font-medium mb-8">Add your task</h2>
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
          <figure>
            <fieldset className="w-full space-y-1 text-gray-100">
              <label for="files" className="block text-sm font-medium">
                Attachments
              </label>
              <div className="flex justify-center">
                <input
                  {...register("dbimg")}
                  type="file"
                  id="files"
                  className="px-8 py-12 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-white"
                />
              </div>
            </fieldset>
          </figure>
          <div className="flex flex-col justify-between p-6 space-y-8">
            <fieldset className="flex justify-center mx-auto space-y-1 text-black">
              <div className="flex w-96">
                <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md text-white bg-primary-color">
                  Text
                </span>
                <textarea
                  {...register("details", { required: true })}
                  type="text"
                  className="flex flex-1 p-2 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 text-black  focus:ring-black"
                  placeholder="Write your task details"
                  // onChange={handleChange}
                />
              </div>
            </fieldset>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="submit"
                onClick={handleSubmit(handleAdd)}
                className="items-center w-1/4 mx-auto p-3 font-semibold rounded-md bg-primary-color text-white"
              >
                Add to my task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtask;
