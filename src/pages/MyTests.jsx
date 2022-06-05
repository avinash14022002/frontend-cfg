import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyTests = () => {
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

        <div className="h-96 w-full bg-green-50 border place-items-center overflow-y-scroll">
          <div className="flex flex-row justify-center">
            <div className="h-40 w-5/6 bg-slate-50 mb-5 border"></div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="h-40 w-5/6 bg-slate-50 mb-5 border"></div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="h-40 w-5/6 bg-slate-50 mb-5 border"></div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="h-40 w-5/6 bg-slate-50 mb-5 border"></div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="h-40 w-5/6 bg-slate-50 mb-5 border"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTests;
