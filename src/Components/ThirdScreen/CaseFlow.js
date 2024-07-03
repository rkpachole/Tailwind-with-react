import React from 'react';
const CaseFlow = () => {
  const steps = [
    {
      title: "Pre-litigation",
      documents: [
        {
          name: "Legal Notice",
          description: "Notifies the opposing party of the dispute and demands resolution.",
        },
        {
          name: "Reply to Legal Notice",
          description: "A response to a notice received from the opposing party.",
        },
      ],
    },
    {
      title: "Litigation",
      documents: [
        {
          name: "Plaintiff/Complaint",
          description: "Initiates the lawsuit, detailing the plaintiff's claims.",
        },
        {
          name: "Vakalatnama",
          description: "Authorizes a lawyer to represent the client in court.",
        },
        {
          name: "Written Statement/Answer",
          description: "The defendant's formal response to the point.",
        },
        {
          name: "Reply to Written Statement",
          description: "Addresses points raised in the defendant's written statement.",
        },
      ],
    },
    {
      title: "Interlocutory Applications",
      documents: [
        {
          name: "Application for Temporary Injunction",
          description: "Seeks immediate court intervention to preserve status quo.",
        },
        {
          name: "Counter-Affidavit to Opposition's Application",
          description: "Responds to interlocutory applications from the opposing party.",
        },
      ],
    },
  ];

  return (
    <div className="w-full md:w-2/4 bg-white p-4 rounded-lg overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Case flow</h2>
      <div className="mb-4">
        <h3 className="text-lg text-[#025BD4]">Select the document for drafting</h3>
        
          <div className="mb-2">
            {steps.map((step, index) => (
              <ol key={index} className="relative text-gray-500 ml-2 border-s border-[#025BD4]">
                <span className="absolute flex items-center justify-center w-5 h-5 bg-[#025BD4] rounded-full -start-3 ring-3">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    {/* SVG content here */}
                  </svg>
                </span>
                <h3 className="font-medium leading-tight ml-8">{step.title}</h3>
                {step.documents.map((document, index) => (
                  <li key={index} className="mb-2 ms-6">
                    <div className="border p-2 rounded-lg mt-2">
                      <div className="flex justify-start gap-2 font-bold text-sm">
                        <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.147-5.146A1 1 0 0012.293 4H4a2 2 0 00-2 2v14a2 2 0 002 2zm5-14v4.286a1 1 0 01.293.707l5.147 5.146A1 1 0 0121 20.586V5a2 2 0 00-2-2h-10" />
                        </svg>
                        <p>{document.name}</p>
                      </div>
                      <span className="ml-5 text-sm">{document.description}</span>
                    </div>
                  </li>
                ))}
              </ol>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default CaseFlow;
