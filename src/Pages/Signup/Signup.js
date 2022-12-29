import React, { useContext } from "react";
import "../../my.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, color } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignup = (data) => {
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        toast("User created sucessfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setSignupError(error.message);
      });
  };
  return (
    <div className={`${color ? "bg-primary-color" : "bg-slate-800"} p-8`}>
      <div className="w-full max-w-md p-4 rounded-md mx-auto shadow sm:p-8 bg-white text-black">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Signup to create your account
        </h2>
        <p className="text-sm text-center text-gray-400">
          Have an account?
          <Link
            to="/login"
            className="focus:underline hover:underline text-primary-color"
          >
            Login here
          </Link>
        </p>

        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(handleSignup)}
        >
          {/* email */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: "Email adress is required" })}
                placeholder="yourmail@mail.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700  text-black focus:border-violet-400"
              />
              {errors.email && (
                <p role="alert" className="text-red-700">
                  {errors.email?.message}
                </p>
              )}
            </div>
            {/* name */}
            <div className="space-y-2">
              <label className="block text-sm">Full Name</label>
              <input
                type="name"
                name="name"
                id="name"
                {...register("name")}
                placeholder="your name"
                className="w-full px-3 py-2 border rounded-md border-gray-700  text-black focus:border-violet-400"
              />
            </div>
            {/* password */}
            <div className="space-y-2">
              <div className="justify-between">
                <label className="text-sm text-center">Password</label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700  text-black focus:border-violet-400"
              />
              {errors.password && (
                <p role="alert" className="text-red-700">
                  {errors.password?.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-primary-color text-white"
          >
            Sign up
          </button>
          <div>
            {signupError && <p className="text-red-600">{signupError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
