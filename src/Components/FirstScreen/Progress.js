import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWord, faFileImage, faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';

const Progress = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleFileRemove = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
  };

  const handleStart = () => {
    setIsLoading(true);
    // Perform your start operation here
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Get Complete Info about any case from AI-driven research assistance</h2>

        <div className="mb-6 p-4 border border-gray-300 rounded-2xl">
          <p className="text-gray-600 mb-2">
            Ex: Land dispute, Murder, recent judgments.
          </p>
          <p className="text-gray-500 text-right">0/80 words</p>
        </div>
        
        <div className="mb-6 p-4 border border-gray-300 rounded-lg text-center">
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={handleFileChange}
            accept=".pdf,.docx,.doc"
          />
          
          <label htmlFor="file-upload" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-flex items-center">
           
            Upload a File
          </label>
          <p className="text-gray-600 mt-2">Drag and drop here or click to upload a file</p>
          <p className="text-gray-600 mt-1">Maximum upload 1</p>
          <p className="text-gray-600 mt-1">File formats: .JPG, .PNG, .docs, .Pdf etc.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Uploaded files</h3>
          <ul className="list-none">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex justify-between bg-slate-300 gap-2 items-center px-2 border py-2 border-gray-500">
                <span>{file.name}</span>
                <button
                  onClick={() => handleFileRemove(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
        <button
          onClick={handleStart}
          // disabled={isLoading || uploadedFiles.length === 0}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mt-3 w-[30%] p-2"
        >
          {isLoading ? 'Analyzing...' : 'Start'}
        </button>
</div>
     
      </div>
    </div>
  );
};

export default Progress;
