import React from "react";
import "../../my.scss";
const Home = () => {
  return (
    <div className="px-8 pb-8">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl Text_style font-medium ">My tasks</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 place-items-center gap-8 my-8">
          {/* card */}
          <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-black">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary-color text-white"
              >
                Read more
              </button>
            </div>
          </div>
          {/* card */}
          <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-black">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary-color text-white"
              >
                Read more
              </button>
            </div>
          </div>
          {/* card */}
          <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-black">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary-color text-white"
              >
                Read more
              </button>
            </div>
          </div>
          {/* card */}
          <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-black">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary-color text-white"
              >
                Read more
              </button>
            </div>
          </div>
          {/* card */}
          <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-black">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary-color text-white"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
