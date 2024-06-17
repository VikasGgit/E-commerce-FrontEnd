import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='w-[15rem] m-3 transition-all cursor-pointer hover:scale-105'>
      <div  className='h-[20rem]  bg-red-200  rounded-lg  '>
        <img className='object-cover object-left-top w-full h-full rounded-md' src={item.img} alt="" />
      </div>
      <div className='p-3 bg-gray-200 rounded-md ' >
        <p className='font-bold opacity-60'  >{item.brand}</p>
        <p className='' >{item.title}</p>
        
      
      <p> <span className='text-xl font-semibold' >₹{item.o_price} </span> 
      <span className='line-through' >₹{item.ac_price}</span>
      <span className='text-xl text-red-400' > {item.dis}%  off</span>
      </p>
      </div>

    </div>
  )
}

export default ProductCard