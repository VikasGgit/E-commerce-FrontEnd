import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

const CartItem = () => {
  return (
    <div className='mb-3 border rounded-md shadow-lg ' >
        
        <div className='flex items-center pl-5' >
          <div className='w-[5rem] h-[5rem] lg:h-[9rem] lg:w-[9rem] ' >
            < img className='object-cover object-left-top w-full h-full rounded' src="https://www.tistabene.com/cdn/shop/files/KRT-0286A.jpg?v=1702894114&width=5000" />
            
          </div>
         
          <div className='ml-5 space-y-1' >
            <p className='text-xl font-semibold opacity-70' > Unicef  </p>
            <p className='opacity-70' > Universal Good looking Kurta  </p>
            <p className='opacity-70' >Size: L, Yellow</p>
            <div> 
              <span className='text-xl font-semibold' >₹400 </span> 
              <span className='line-through' >₹4000</span>
              <span className='text-xl text-red-400' > 90%  off</span>
             </div>
              
              
            
              
          
          </div>
          
        </div>
        <div className='flex pl-5' >
                <div  className='flex items-center space-x-4' >
                 <IconButton><RemoveCircleOutlineIcon/></IconButton>
                 <div className='px-1 text-xl border border-current rounded-md border-r-1' >#</div>
                  <IconButton><AddCircleOutlineIcon/></IconButton> 
                  <Button>Remove</Button>
                </div>
              </div>
        
      
    </div>
  )
}

export default CartItem