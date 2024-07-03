import React from 'react';

const MainContent = () => {
  const questions = [
    "1. Was the dog on a leash or under the control of the owner at the time of the incident?",
    "2. Did the dog show any signs of aggression or previous violent behaviour before the incident?",
    "3. Were there any warning signs or notices indicating the presence of a dangerous dog on the owner's property?",
    "4. Has the dog been involved in similar incidents of biting or aggression in the past?",
    "5. Did the owner take immediate steps to assist or provide medical aid to the victim after the dog bite incident?",
   
  ]

  return (
    <div className="w-2/3 bg-white p-4 overflow-auto rounded-lg">
    <h2 className="text-xl font-bold mb-4">Questions</h2>
    <div className="flex justify-start mb-4 gap-2">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm">
        By Petitioner
      </button>
      <button className="font-bold py-2 px-4 border rounded-full text-sm">
      By Respondent
      </button>
      
    </div>
    {questions.map((question, index) => (
      <div key={index} className="border-b border-gray-300 py-4">
        <p className="font-bold mb-2 text-sm">{question}</p>
        <p className="text-gray-600">Reason - This question aims to establish...</p>
      </div>
    ))}
  </div>
  );
};

export default MainContent;
