import React, { useContext, useEffect, useState } from "react";
import "../../my.scss";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import Task from "./Task";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [loadedtasks, setLoadedtasks] = useState([]);

  // load my products by email query
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mytasks?email=${user?.email}`)
      .then((data) => {
        const tasks = data.data;

        setLoadedtasks(tasks);
      });
  }, [user?.email]);

  // // using tanstack load task by email
  // const url = `http://localhost:5000/mytasks?email=${user?.email}`;
  // const { data: loadedtasks = [], isLoading } = useQuery({
  //   queryKey: ["task", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     const task = await res.json();
  //     console.log(task);
  //     return task;
  //   },
  // });

  if (loading) {
    return (
      <div className="mx-auto my-8 w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    );
  }
  console.log(loadedtasks);
  return (
    <div className="px-8 pb-8">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl Text_style font-medium ">My tasks</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 place-items-center gap-8 my-8">
          {/* card */}
          {loadedtasks?.map((loadedtask) => (
            <Task
              loadedtasks={loadedtasks}
              setLoadedtasks={setLoadedtasks}
              key={loadedtask?._id}
              task={loadedtask}
            ></Task>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
