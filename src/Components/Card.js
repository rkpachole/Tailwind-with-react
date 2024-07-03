import React from 'react'

function Card({title,intro,amount,color}) {
const isCurrency = title ==="Sales" ||title ==="Profit";

  return (
    <div className={`${color} flex w-[100%] text-center justify-between rounded-lg p-8 lg:w-[48%]`}>
      <div className='flex flex-col gap-3'><h1 className='text-xl font-semibold'>{title}</h1>
      <span className='text-m font-semibold text-gray-400'>{intro}</span>
      </div><h1 className='3xl font-bold'>
        {`${isCurrency ? "$":""}`}{amount}</h1></div>
  



  )
}

export default Card;