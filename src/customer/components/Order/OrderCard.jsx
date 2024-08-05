import { Grid } from '@mui/material'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HouseIcon from '@mui/icons-material/House';
const OrderCard = () => {
  return (
    <div>
        <Grid container spacing={2} className='items-center shadow-lg ' >
            <Grid item xs={6} >
                <div className='flex items-center cursor-pointer' >
                <img  className='object-cover object-left-top h-full w-[8rem]' src="https://www.tistabene.com/cdn/shop/files/KRT-0286A.jpg?v=1702894114&width=5000" alt='' />
                <div className='items-center ml-5 space-y-2' >
                    <p className='font-semibold opacity-60' >
                        Men Slim Kurta
                    </p>
                    <p  className='font-semibold opacity-60'>
                        Size: M
                    </p>
                    < p className='font-semibold opacity-60' >
                        Color : Red
                    </p>
                </div>
                </div>
            </Grid>
            <Grid item xs={2} >
                <p className='font-bold' >₹4939</p>
            </Grid>
            <Grid xs={4} >
                {true && <p className='font-semibold text-green-500 ' >
                  <LocalShippingIcon/>  Expected Delivey Date 3July 2024
                </p>}
                {false && <p className='font-semibold text-yellow-500 ' >
               <HouseIcon/> Deliverd on 4 june 2024
            </p>
        }
            </Grid>
        </Grid>

    </div>
  )
}

export default OrderCard