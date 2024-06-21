import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Button } from '@mui/material'
import PastOrders from './PastOrders'

const OrderDetails = () => {
  return (
     <div className='px-5 lg:px-20' >
        <div className='shadow-lg'  >   
            <h1 className='py-5 text-xl font-bold' >Delivery Address</h1>
        <AddressCard/>
        </div  >
        <div className='flex items-center justify-between p-2 mt-5 shadow-md' >
        <OrderTracker activeStep={0} /> 
        <Button className='ml-2 ' variant='contained' >Cancel</Button>
        </div>
        <div>
          <PastOrders/>
          <PastOrders/>
          <PastOrders/>
        </div>
    </div>
  )
}

export default OrderDetails