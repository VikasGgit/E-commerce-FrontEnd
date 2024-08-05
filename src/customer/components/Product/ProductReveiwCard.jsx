import { Avatar, Grid , Box, Rating} from '@mui/material'
import React from 'react'

const ProductReveiwCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3} >
            <Grid item xs={1} >
            <Box>
                <Avatar className='text-white' sx={{width:"56" , height:"56", bgcolor:"rgba(2,93,53,5)"}} >V</Avatar>
            </Box>
            </Grid> 
            <Grid item xs={9} >
                <div className='space-y-2' >
                    <div>
                        <p  className='text-lg font-semibold'>Vikas</p>
                        <p className='opacity-70' >june 18, 2024</p>
                    </div>
                </div>
                <Rating value={3.5}  precision={.5} readOnly name='half-rating' />
                <p>Good product, i love the creator</p>
            </Grid>

        </Grid>
    </div>
  )
}

export default ProductReveiwCard