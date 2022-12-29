import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "../../my.scss";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { SignIn, providerLogin, color } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    setLoginError("");
    SignIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  //   Get user information by google signin
  const handleGoogleSignIn = () => {
    setLoginError("");
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className={`${color ? "bg-primary-color" : "bg-slate-800"} p-8`}>
      <div className="w-full max-w-md p-4 rounded-md mx-auto shadow sm:p-8 bg-white text-black">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-400">
          Dont have account?
          <Link
            to="/signup"
            className="focus:underline hover:underline text-primary-color"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-primary-color"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(handleLogin)}
        >
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
            Sign in
          </button>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
