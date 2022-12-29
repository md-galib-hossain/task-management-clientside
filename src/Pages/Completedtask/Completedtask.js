import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Comcard from "./Comcard";

const Completedtask = () => {
  const { color, user, loading } = useContext(AuthContext);

  // using tanstack load task by email
  const url = `https://task-management-serverside.vercel.app/completedtasks?email=${user?.email}`;
  const { data: loadedcompletedtasks = [], isLoading } = useQuery({
    queryKey: ["completedtasks", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const completedtasks = await res.json();
      // console.log(completedtasks);
      return completedtasks;
    },
  });

  if (loading || isLoading) {
    return (
      <div className="mx-auto my-8 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    );
  }
  console.log(loadedcompletedtasks);
  return (
    <div className="px-8 pb-8">
      <div className={`${color ? "bg-white" : "bg-slate-800"} rounded-lg p-8`}>
        <h2 className="text-2xl Text_style font-medium mb-8">
          Completed tasks
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 place-items-center gap-8 my-8">
          {loadedcompletedtasks.map((task) => (
            <Comcard task={task}></Comcard>
          ))}
          {/*  */}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Completedtask;
