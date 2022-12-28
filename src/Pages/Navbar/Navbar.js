import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-8">
      <div className="navbar bg-white rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="text-primary text-primary font-medium">
                  Add Task
                </Link>
              </li>

              <li>
                <Link className="text-primary font-medium" to="/">
                  My task
                </Link>
              </li>
              <li>
                <Link className="text-primary font-medium" to="/completedtask">
                  Completed task
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-primary font-medium btn btn-ghost normal-case text-xl"
          >
            Task Manager
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-primary font-medium">Add task</Link>
            </li>

            <li>
              <Link className="text-primary font-medium" to="/">
                My task
              </Link>
            </li>
            <li>
              <Link className="text-primary font-medium" to="/completedtask">
                Completed task
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
