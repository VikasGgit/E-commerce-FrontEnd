import React from 'react';
import CartItem from './CartItem';
import { Grid ,Button } from '@mui/material';

const Cart = () => {
  return (
    <Grid container className='p-4' spacing={2}>
      <Grid item xs={12} md={7}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </Grid>
      <Grid item xs={12} md={4} className='sticky top-0' >
        <div className='p-3 border border-current rounded-md' >
          <p className='mb-2 font-extrabold uppercase' >Price Details</p>
          <hr/>
          <div className='flex justify-between px-3 mt-3 mb-1' >
            <span className='font-semibold text-' >Total Price </span> 
              <span className='font-bold text-red-800' >₹40000</span>
          </div>
          <div className='flex justify-between px-3 mb-1' >
            <span className='font-semibold text-' >Total   Discount </span> 
              <span className='font-bold text-yellow-400 ' >-₹3909</span>
          </div>
          <div className='flex justify-between px-3 mb-3' >
            <span className='font-semibold text-' >Delivery Charges </span> 
              <span className='font-bold text-green-400 ' >Free</span>
          </div>
          <hr />
          <div className='flex justify-between px-3 mb-1' >
            <span className='font-semibold text-' >To Pay </span> 
              <span className='font-bold text-green-600 ' >₹36001</span>
          </div>
          <div className='mt-3' >
          <Button variant='contained' className='w-full' >Checkout</Button>
         </div>
          
        </div>
      </Grid>
    </Grid>
  );
}

export default Cart;
  