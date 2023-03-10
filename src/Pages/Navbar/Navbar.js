import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "../../my.scss";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, setBackground, color } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const handleColor = () => {
    setBackground();
  };
  console.log(user);
  return (
    <div className="p-8">
      {/* <div className="navbar bg-white rounded-lg">
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
      </div> */}
      <div
        className={`px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ${
          color ? "bg-white" : "bg-slate-800"
        } rounded-lg`}
      >
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-primary-color uppercase">
              Task-Manager
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/addtask"
                className="font-medium tracking-wide text-primary-color transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Add task
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="font-medium tracking-wide text-primary-color transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                My tasks
              </Link>
            </li>
            <li>
              <Link
                to="/completedtask"
                className="font-medium tracking-wide text-primary-color transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Completed tasks
              </Link>
            </li>
          </ul>
          {/* dark mode */}
          <div className="hidden lg:block md:block sm:block">
            <label
              for="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
            >
              <span className="text-primary-color font-medium">Light</span>
              <span className="relative">
                <input
                  id="Toggle1"
                  onChange={handleColor}
                  type="checkbox"
                  className="hidden peer"
                  defaultValue="true"
                />
                <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-primary-color"></div>
              </span>
              <span className="text-black font-medium">Dark</span>
            </label>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              {user?.email ? (
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary-color transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Log out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary-color transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              {user?.photoURL ? (
                <img
                  alt=""
                  className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                  src={user?.photoURL}
                />
              ) : (
                <FaUser className="h-10 w-10 text-primary-color" />
              )}
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Task-Manager
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/addtask"
                          className="font-medium tracking-wide text-primary-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add task
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-primary-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          My tasks
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/completedtask"
                          className="font-medium tracking-wide text-primary-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Completed tasks
                        </Link>
                      </li>

                      <li>
                        {user?.email ? (
                          <button
                            onClick={handleLogout}
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary-color transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          >
                            Log out
                          </button>
                        ) : (
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary-color transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          >
                            Login
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
