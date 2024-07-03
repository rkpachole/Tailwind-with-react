import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  const steps = [
    { name: "Step", status: 'Completed' },
    { name: "Continue", status: 'Completed' },
    { name: "Analysis", status: 'Completed' },
    { name: "Additional Documents", status: 'In progress' },
    { name: "Relief", status: 'In progress' },
    { name: "Suggestions", status: 'In progress' },
    { name: "First Draft", status: 'In progress' },
    { name: "Q & A", status: 'In progress' },
    { name: "Final Draft", status: 'In progress' },
  ];

  return (
    <div className="w-full md:w-1/4 bg-white p-4 rounded-lg overflow-auto">
      <ol className="relative text-gray-500 border-s border-[#025BD4] ml-3">
        {steps.map((study, index) => (
          <li className="mb-10 ms-6" key={index}>
            <span className={study.status === "Completed" ? "absolute flex items-center justify-center w-5 h-5 bg-[#025BD4] rounded-full -start-3 ring-4 ring-white" : "absolute flex items-center justify-center w-5 h-5 bg-gray-500 rounded-full -start-3 ring-4 ring-white"}>
              <svg
                className="w-3.5 h-3.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
            <h3 className="font-medium leading-tight text-sm">{study.name}</h3>
          </li>
        ))}
      </ol>

      <Link to="/" className="bg-[#025BD4] text-white px-4 py-2 w-full rounded-full">
        Continue
      </Link>
    </div>
  );
};

export default Navigation;
