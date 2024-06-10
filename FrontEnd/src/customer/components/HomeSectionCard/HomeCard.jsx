import React from 'react'

const HomeCard = ({item}) => {
  return (
    <div className='flex flex-col object-cover mx-3 my-2 overflow-hidden rounded-md shadow-lg cursor-pointer itemscol-center bg-zinc-200 w-[15rem],  items-center justify-center ' >
            <div className='h-[15rem] w-[13rem] p-2' >
              <img className='object-cover object-top w-full h-full rounded-md'  src={item.image} alt="" />
            </div>
            <div className='p-4' >
              <h3 className='text-lg font-medium text-gray-900'>{item.brand}</h3>
              <p className='mt-2 text-sm text-gray-500' >{item.decrription}</p>
            </div>
    </div>
  )
} 

export default HomeCard