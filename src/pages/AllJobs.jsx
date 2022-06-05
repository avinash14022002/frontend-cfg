import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AllJobs = () => {
  const typeList = ["All", "HR", "Marketing", "Technical"];
  const domainlist = ["Environment", "Economy", "Society"];
  const [currentType, setType] = useState(typeList[0]);
  const [currentDomain, setDomain] = useState(domainlist[0]);

  return (
    <>
      <div className="flex flex-col justify-between w-full p-10">
        <div className="flex flex-row justify-between">
          <div
            onClick={() => setDomain(domainlist[0])}
            className={classNames(
              currentDomain === domainlist[0] ? "shadow-xl" : "shadow-sm",
              "h-20 w-1/4 bg-slate-100 flex flex-row place-items-center justify-center hover:cursor-pointer"
            )}
          >
            Environment
          </div>
          <div
            onClick={() => setDomain(domainlist[1])}
            className={classNames(
              currentDomain === domainlist[1] ? "shadow-xl" : "shadow-sm",
              "h-20 w-1/4 bg-slate-100 flex flex-row place-items-center justify-center hover:cursor-pointer"
            )}
          >
            Economy
          </div>
          <div
            onClick={() => setDomain(domainlist[2])}
            className={classNames(
              currentDomain === domainlist[2] ? "shadow-xl" : "shadow-sm",
              "h-20 w-1/4 bg-slate-100 flex flex-row place-items-center justify-center hover:cursor-pointer"
            )}
          >
            Society
          </div>
        </div>

        <div className="flex flex-row place-items-center h-20 w-1/4">
          <div className="pr-8 group">
            <div className="group-hover:block inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center w-24">
                <span className="mr-1">Type</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="group-hover:block absolute hidden text-gray-700 pt-1 w-32">
                {typeList.map((type, index) => (
                  <li key={index}>
                    <button
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-32"
                      onClick={() => setType(typeList[index])}
                    >
                      <div className="flex flex-row justify-between place-items-center">
                        {type}
                        {type === currentType && (
                          <CheckIcon className="h-4 fill-green-700" />
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-96 w-full bg-green-50 border place-items-center overflow-y-scroll">
          <div class="rounded-md w-2/3 my-2  bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer">
            <div class="flex flex-col justify-start">
              <div class="flex justify-between items-center w-96">
                <div class="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
                  <svg
                    class="w-7 h-7 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span>Frontend Engineer</span>
                </div>
                <span class="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div class="text-sm text-gray-500 flex space-x-1 items-center">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Banglore, India</span>
              </div>
              <div>
                <div class="mt-5">
                  <button class="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md w-2/3 my-2  bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer">
            <div class="flex flex-col justify-start">
              <div class="flex justify-between items-center w-96">
                <div class="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
                  <svg
                    class="w-7 h-7 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span>Frontend Engineer</span>
                </div>
                <span class="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div class="text-sm text-gray-500 flex space-x-1 items-center">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Banglore, India</span>
              </div>
              <div>
                <div class="mt-5">
                  <button class="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md w-2/3 my-2  bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer">
            <div class="flex flex-col justify-start">
              <div class="flex justify-between items-center w-96">
                <div class="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
                  <svg
                    class="w-7 h-7 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span>Frontend Engineer</span>
                </div>
                <span class="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div class="text-sm text-gray-500 flex space-x-1 items-center">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Banglore, India</span>
              </div>
              <div>
                <div class="mt-5">
                  <button class="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md w-2/3 my-2  bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer">
            <div class="flex flex-col justify-start">
              <div class="flex justify-between items-center w-96">
                <div class="text-lg font-semibold text-bookmark-blue flex space-x-1 items-center mb-2">
                  <svg
                    class="w-7 h-7 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  <span>Frontend Engineer</span>
                </div>
                <span class="bg-green-500 rounded-full uppercase text-white text-sm px-4 py-1 font-bold shadow-xl">
                  {" "}
                  Remote{" "}
                </span>
              </div>
              <div class="text-sm text-gray-500 flex space-x-1 items-center">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Banglore, India</span>
              </div>
              <div>
                <div class="mt-5">
                  <button class="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
