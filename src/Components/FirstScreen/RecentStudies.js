import React from 'react';

const RecentStudies = () => {
  const studies = [
    { title: 'Dog Bite Complaint', status: 'Completed' },
    { title: 'The Cyberbullying Conspiracy', status: 'Completed' },
    { title: 'The Data Breach Dilemma', status: 'Completed' },
    { title: 'The Data Breach Dilemma', status: 'In progress' },
    { title: 'The Data Breach Dilemma', status: 'Failed' },
    
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-bold mb-4">Recent Studies</h2>
      <div className="space-y-4">
        {studies.map((study, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <span className="text-green-500 font-bold" style={{ color: '#025BD4' }}>{study.title}</span>
            <div className="mt-2">
              <div className="text-sm text-gray-600 mt-1 justify-between flex">2 days ago
              <span
                className={`ml-2 px-3 py-1 rounded-full inline-block font-medium ${
                  study.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : study.status === 'In progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                  {study.status}
              </span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentStudies;
