import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeItemToCart, updateItemToCart } from '../../../state/Cart/Action.js';

const CartItem = (item) => {
  console.log(item);
const dispatch= useDispatch();
  const handleUpdateCartItem = (num) => {
    const data= {data:{quantity:item?.data?.quantity+num}, cartItemId:item?.data?._id};
    console.log(data);
      dispatch(updateItemToCart(data)); 
  };
  
  const remaveCartItem = () => {
    const data={cartItemId:item?.data?._id}
    dispatch(removeItemToCart(data))
  };
  
  return (
    <div className='mb-3 border rounded-md shadow-lg ' >
        
        <div className='flex items-center pl-5' >
          <div className='w-[5rem] h-[5rem] lg:h-[9rem] lg:w-[9rem] ' >
            < img className='object-cover object-left-top w-full h-full rounded' src={item?.data?.product?.imageUrl} />
            
          </div>
         
          <div className='ml-5 space-y-1' >
            <p className='text-xl font-semibold opacity-70' >{item?.data?.product?.title} </p>
            <p className='opacity-70' > {item?.data?.product?.brand}  </p>
            <p className='opacity-70' ></p>
            <div> 
              <span className='text-xl font-semibold' >₹{item?.data?.discountedPrice} </span> 
              <span className='line-through' >₹{item?.data?.price}</span>
              <span className='text-xl text-red-400' > {item?.data?.product?.discount || 0}%  off</span>
             </div>
              
              
            
              
          
          </div>
          
        </div>
        <div className='flex pl-5' >
                <div  className='flex items-center space-x-4' >
                 <IconButton onClick={()=>{handleUpdateCartItem(-1)}} disabled={item?.data?.quantity<=1} ><RemoveCircleOutlineIcon  /></IconButton>
                 <div className='px-1 text-xl border border-current rounded-md border-r-1' >{item?.data?.quantity}</div>
                  <IconButton onClick={()=>{handleUpdateCartItem(1)}} ><AddCircleOutlineIcon/></IconButton> 
                  <Button onClick={()=>{remaveCartItem()}} >Remove</Button>
                </div>
              </div>
        
      
    </div>
  )
}

export default CartItem