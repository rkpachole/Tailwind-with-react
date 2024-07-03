import React, { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const studies = [
    { name: "DEEDS", title: 'Dog Bite Complaint', status: 'Completed', time: "1 min" },
  
    { name: "CODE CORDER", title: 'The Data Breach Dilemma', status: 'falied', time: "1 day ago" },
    { name: "DEEDS", title: 'The Data Breach Dilemma', status: 'In progress', time: "2 days ago" },

  ];
  const [pdfList, setPdfList] = useState(['Case document.pdf', 'Case document.pdf', 'Case document.pdf', 'Case document.pdf'])
  return (
    <div className="w-1/3 bg-white p-2 border border-gray-300 rounded-lg overflow-auto">
      <div className="flex justify-between">
        <MdArrowBackIosNew className='mt-3' />
        <Link to="/" className="bg-[#025BD4] text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
          Back to Home
        </Link>
      </div>
      <h2 className="mb-4 border-b py-4 text-lg font-bold ml-3">Given Information</h2>
      <p className="mb-4 font-bold text-lg ml-3">Your search</p>
      <p className="mb-4 ml-3">
        {
          'Habeas corpus'
        }
      </p>
      <h2 className="font-bold mb-4 text-lg ml-3">Recents</h2>
      <div className="space-y-2">
        {studies.map((study, index) => (
          <div key={index} className="border p-2 rounded-md">
            <div className=" flex mt-2 justify-between">
              <span className='text-sm'>{study.name}</span>
              <span
                className={`ml-2 px-3 py-1 rounded-full inline-block text-sm font-medium ${study.status === 'Completed'
                  ? 'bg-green-100 text-green-800'
                  : study.status === 'In progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                  }`}
              >
                {study.status}
              </span>
            </div>
            <span className="text-green-500 font-bold text-sm" style={{ color: '#025BD4' }}>{study.title}</span>

            <div className="text-sm text-gray-600 mt-1">{study.time}
            </div>

          </div>
        ))}
      </div>
    </div>

  );
};
export default Sidebar;
