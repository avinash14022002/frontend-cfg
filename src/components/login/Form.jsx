import React from "react";

const Form = () => {
  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      <div className="flex flex-col h-screen">
        <section className="flex flex-col items-center justify-between px-6 py-4 bg-gray-800 sm:flex-row">
          <h1 className="text-xl font-inter text-white">
            The Sustainability Mafia
          </h1>
        </section>
        <div className="flex flex-grow p-4">
          <section className="flex flex-col w-4/5 mx-auto overflow-hidden items-center justify-center rounded-lg md:flex-row md:h-full">
            <div className="flex flex-col border-2 border-green-100 bg-gray-100 items-center justify-center pb-6 md:py-0 md:w-full md:h-full">
              <section className="flex justify-center bg-white h-96 w-11/12 border-2 border-green-500 rounded-lg md:p-4">
                <div className="rounded text-center justify-center w-3/4">
                  <h2 className="font-inter text-2xl">Questionnaire</h2>
                  <form className="w-full">
                    <div className="h-88 w-full overflow-y-auto">
                      <div className="flex items-center my-6 mx-1 text-left">
                        <div className="w-1/3 md:w-1/4">
                          <label
                            className="block text-black font-inter md:text-left mb-1 md:mb-0 pr-3"
                            for="email"
                          >
                            Question 1
                          </label>
                        </div>
                        <div className="w-2/3 md:w-3/4">
                          <input
                            className="bg-gray-100 appearance-none border-2 border-green-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name"
                            type="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center mb-6 mx-1 text-left">
                        <div className="w-1/3 md:w-1/4">
                          <label
                            className="block text-black font-inter md:text-left mb-1 md:mb-0 pr-3"
                            for="password"
                          >
                            Question 2
                          </label>
                        </div>
                        <div className="w-2/3 md:w-3/4">
                          <input
                            className="bg-gray-100 appearance-none border-2 border-green-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name"
                            type="text"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center my-6 mx-1 text-left">
                        <div className="w-1/3 md:w-1/4">
                          <label
                            className="block text-black font-inter md:text-left mb-1 md:mb-0 pr-3"
                            for="email"
                          >
                            Question 3
                          </label>
                        </div>
                        <div className="w-2/3 md:w-3/4">
                          <input
                            className="bg-gray-100 appearance-none border-2 border-green-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name"
                            type="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center my-6 mx-1 text-left">
                        <div className="w-1/3 md:w-1/4">
                          <label
                            className="block text-black font-inter md:text-left mb-1 md:mb-0 pr-3"
                            for="email"
                          >
                            Question 4
                          </label>
                        </div>
                        <div className="w-2/3 md:w-3/4">
                          <input
                            className="bg-gray-100 appearance-none border-2 border-green-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name"
                            type="email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="w-2/3 md:w-full bg-black text-sm font-inter text-white py-2 px-4 rounded-lg"
                      type="submit"
                    >
                      Take me in!
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </section>
        </div>
        <section className="text-center px-6 py-4 bg-gray-800 sm:flex-row">
          <p className="py-2 font-inter text-white sm:py-0">
            © 2021 by The Sustainability Mafia
          </p>
        </section>
      </div>
    </>
  );
};

export default Form;
