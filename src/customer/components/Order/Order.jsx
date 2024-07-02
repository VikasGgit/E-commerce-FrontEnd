import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus=[
    {label:"on the way", value:"on the way"},
    {label:"delivered", value:"delivered"},
    {label:"concelled", value:"cancelled"},
    {label:"returned", value:"returned"},
]

const Order = () => {
  return (
    <div>
        <Grid container  className='justify-between p-4 m-4'  >
            <Grid item xs={2.5}  >
                    <div className='sticky h-auto p-3 bg-white shadow-lg top-5' >
                        <h1 className='text-lg font-bold' >Filters</h1>
                        <div className='mt-10 space-y-4' >
                                <h1 className='font-semibold' >ORDER STATUS</h1>
                                {orderStatus.map((option)=>
                                    <div className='flex items-center'>
                                    <input type="checkbox" defaultValue={option.value} className='w-4 h-4 mr-3 text-indigo-400 border-gray-600 focus:ring-indigo-500' />
                                    <label  className='text-gray-500 text-md' htmlFor={option.value}>{option.label}</label>
        
                                </div>
                                )}
                                
                        </div>
                        
                    </div>
            </Grid>
            <Grid item xs={9} className='space-y-3' >
                {/* <Grid container >
                    <div className='flex flex-row items-center justify-between w-full gap-20 p-10 shadow-lg ' >
                        <div className='h-[10rem] w-[20rem] flex gap-3 items-center
                        ' >
                        <img  className='object-cover object-left-top h-full w-[8rem]' src="https://www.tistabene.com/cdn/shop/files/KRT-0286A.jpg?v=1702894114&width=5000" alt='' />
                       <div> <p>Akash</p>
                        <p>Slim fit kurta</p>
                        <p>size: M</p>
                        </div>
                        </div>
                        <div className='font -bold' >
                           400 
                        </div>
                        <div>
                            Status Delivered
                        </div>
                    </div>
                </Grid> */}
                {[1,3,4,5,5].map((item)=><OrderCard/>)}
                
            </Grid>
        </Grid>
    </div>
  )
}

export default Order