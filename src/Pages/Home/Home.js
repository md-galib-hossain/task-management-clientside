import React, { useContext, useEffect, useState } from "react";
import "../../my.scss";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import Task from "./Task";
const Home = () => {
  const { user, loading } = useContext(AuthContext);
  const [loadedtasks, SetLoadedtasks] = useState([]);
  //   load my products by email query
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mytasks?email=${user?.email}`)
      .then((data) => {
        const tasks = data.data;

        SetLoadedtasks(tasks);
      });
  }, [user?.email]);
  console.log(loadedtasks);
  return (
    <div className="px-8 pb-8">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl Text_style font-medium ">My tasks</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 place-items-center gap-8 my-8">
          {/* card */}
          {loadedtasks.map((loadedtask) => (
            <Task task={loadedtask}></Task>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
