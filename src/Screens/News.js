import React from 'react'
import Information from "../Components/SecondSceen/Information";
import MainContent from "../Components/SecondSceen/MainContent";
import AppLayout from "../Components/AppLayout"
export const News = () => {
  return (
    <div className=''>
        <AppLayout>
    <div className="flex h-screen font-inter gap-2">
     <Information />
     <MainContent />
     
    </div>




      </AppLayout>
    </div>
  )
}
export default News;