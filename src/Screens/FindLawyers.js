import React from 'react';
import Sidebar from '../Components/ThirdScreen/Sidebar';
import CaseFlow from '../Components/ThirdScreen/CaseFlow';
import Navigation from '../Components/ThirdScreen/Navigation';
import AppLayout from '../Components/AppLayout';

const FindLawyers = () => {
  return (
    <div className=''>
      <AppLayout>
        <div className="flex flex-col md:flex-row h-screen font-inter gap-2">
          <Sidebar />
          <CaseFlow />
          <Navigation />
        </div>
      </AppLayout>
    </div>
  );
};

export default FindLawyers;
