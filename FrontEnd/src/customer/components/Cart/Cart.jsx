import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { Grid ,Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../../state/Cart/Action';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
const {cart}= useSelector(store=>store)
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(get())
},
[cart.deletedCartItems, cart.upadatedCartItem])
console.log(cart.cart)

const navigate=useNavigate();

  return (
    <Grid container className='p-4' spacing={2}>
      <Grid item xs={12} md={7}>
     {cart.cart?.cartItems?.map((item) => <CartItem data={item}  />)
}

      </Grid>
      <Grid item xs={12} md={4} className='sticky top-0' >
        <div className='p-3 border border-current rounded-md' >
          <p className='mb-2 font-extrabold uppercase' >Price Details</p>
          <hr/>
          <div className='flex justify-between px-3 mt-3 mb-1' >
            <span className='font-semibold text-' >Total Price </span> 
              <span className='font-bold text-red-800' >{cart.cart?.totalDiscountedPrice}</span>
          </div>
          <div className='flex justify-between px-3 mb-1' >
            <span className='font-semibold text-' >Total   Discount </span> 
              <span className='font-bold text-yellow-400 ' >-{cart.cart?.totalPrice}</span>
          </div>
          <div className='flex justify-between px-3 mb-3' >
            <span className='font-semibold text-' >Delivery Charges </span> 
              <span className='font-bold text-green-400 ' >Free</span>
          </div>
          <hr />
          <div className='flex justify-between px-3 mb-1' >
            <span className='font-semibold text-' >To Pay </span> 
              <span className='font-bold text-green-600 ' >{cart.cart?.totalDiscountedPrice}</span>
          </div>
          <div className='mt-3' >
          <Button variant='contained' className='w-full' onClick={()=>{navigate('/checkout?step=2')}}>Checkout</Button>
         </div>
          
        </div>
      </Grid>
    </Grid>
  );
}

export default Cart;
  