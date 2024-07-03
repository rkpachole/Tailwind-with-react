import React from 'react'

function AppLayout({ children}) {
  return (
    <main className='flex h-full w-full flex-col gap-3 bg-slate-200 px-[2%] py-3 transition-all duration-500 ease-in-out md:px-[5%] lg:px[10%] '>
        {children}</main>
  )
}

export default AppLayout