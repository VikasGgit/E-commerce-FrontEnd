import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useSelector } from 'react-redux'
import CartItem from '../Cart/CartItem'
import { Grid ,Button } from '@mui/material';

const OrderSummary = () => {
const {order} =useSelector(state=>state)
console.log('OrderSummary', order.order)  

  return (
    <div>
        <div className='p-5 shadow-md' >
            <div className='px-3 shadow-md' >

        <div>
        <div className='p-1 font-semibold' >
            <p>{order.order?.shippingAddress?.firstName} {order.order?.shippingAddress?.lastName}</p>
            <p>{order.order?.shippingAddress?.streetAddress} {order.order?.shippingAddress?.landmark}</p>
            <p>{order.order?.shippingAddress?.zipCode}, {order.order?.shippingAddress?.city}</p>
            <p>{order.order?.shippingAddress?.state}, INDIA</p>
            <p>{order.order?.shippingAddress?.phoneNumber}</p>
        </div>
    </div>            

            
            </div>
            
            <Grid container className='p-4' spacing={2}>
      <Grid item xs={12} md={7}>
     {order.order?.orderItems ?.map((item) => <CartItem data={item}  />)
}

      </Grid>
      <Grid item xs={12} md={4} className='sticky top-0' >
        <div className='p-3 border border-current rounded-md' >
          <p className='mb-2 font-extrabold uppercase' >Price Details</p>
          <hr/>
          <div className='flex justify-between px-3 mt-3 mb-1' >
            <span className='font-semibold text-' >Total Price </span> 
              <span className='font-bold text-red-800' >{order.order?.totalPrice}</span>
          </div>
          <div className='flex justify-between px-3 mb-1' >
            <span className='font-semibold text-' >Total   Discount </span> 
              <span className='font-bold text-yellow-400 ' >-{order.order?.discount}</span>
          </div>
          <div className='flex justify-between px-3 mb-3' >
            <span className='font-semibold text-' >Delivery Charges </span> 
              <span className='font-bold text-green-400 ' >Free</span>
          </div>
          <hr />
          <div className='flex justify-between px-3 mb-1' >
            <span className='font-semibold text-' >To Pay </span> 
              <span className='font-bold text-green-600 ' >{order.order?.totalDiscountedPrice
}</span>
          </div>
          <div className='mt-3' >
          <Button variant='contained' className='w-full' onClick={()=>{navigate('/checkout?step=4')}}>Proceed to pay</Button>
         </div>
          
        </div>
      </Grid>
    </Grid>

        </div>
    </div>
  )
}

export default OrderSummary