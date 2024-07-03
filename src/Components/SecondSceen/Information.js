import React, { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { Link } from "react-router-dom";

const Information = () => {
    const [pdfList, setPdfList] = useState(['Case document.pdf', 'Case document.pdf', 'Case document.pdf', 'Case document.pdf'])
    return (
        <div className="w-1/3 bg-white p-4 border-r border-gray-300 rounded-lg">
            <div className="flex justify-between">
                <MdArrowBackIosNew className='' />
                <Link to="/" className="bg-[#025BD4] text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    Back to Home
                </Link>
            </div>


            <h2 className="text-md font-bold mb-4 border-b border-gray-300 py-4">Given Information</h2>
            <p className="mb-4 font-bold text-md">Text Entered</p>

            <p className="mb-4 border-b border-gray-300">
                {
                    'I am researching environmental regulations. Can you summarize the Clean Air Act and its objectives with details.'
                }
            </p>
            <h2 className="font-bold mb-4 text-sm">Uploads</h2>
            <div className="flex flex-col gap-2 bg-gray-300 rounded-lg p-4">
                <h2 className="text-md mb-4 ">Uploads file <span className='font-semibold bg-slate-100 text-[#025BD4]'>4/5</span></h2>
                {pdfList.map((doc, index) => (
                    <div key={index} className="bg-white p-2 rounded-md flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.147-5.146A1 1 0 0012.293 4H4a2 2 0 00-2 2v14a2 2 0 002 2zm5-14v4.286a1 1 0 01.293.707l5.147 5.146A1 1 0 0121 20.586V5a2 2 0 00-2-2h-10" />
                        </svg>
                        <span className="text-gray-600">{doc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Information;
