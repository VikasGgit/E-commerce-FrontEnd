import { Grid ,Button, Typography} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className='py-3 mt-10 text-center text-white bg-black' container  >
            <Grid item xs={12} sm={6} md={3}>
           
                <Typography className='pb-6'  variant='h6' >Comapny</Typography>
                <div><Button variant='h6' className=''  >Blog</Button></div>
                <div><Button variant='h6' className=''  >jobs</Button></div>
                <div><Button variant='h6' className=''  >press</Button></div>
                <div><Button variant='h6' className=''  >Partners</Button></div>
                <div><Button variant='h6' className=''  >Ram Ram</Button></div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
           
                <Typography className='pb-6'  variant='h6' >Solutions</Typography>
                <div><Button variant='h6' className=''  >Marketing</Button></div>
                <div><Button variant='h6' className=''  >Analytics</Button></div>
                <div><Button variant='h6' className=''  >Commerce</Button></div>
                <div><Button variant='h6' className=''  >insights</Button></div>
                <div><Button variant='h6' className=''  >Ram Ram</Button></div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
           
                <Typography className='pb-6'  variant='h6' >Documentation</Typography>
                <div><Button variant='h6' className=''  >Api status</Button></div>
                <div><Button variant='h6' className=''  >Guides</Button></div>
                <div><Button variant='h6' className=''  >Ram Ram</Button></div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
           
                <Typography className='pb-6'  variant='h6' >Legal</Typography>
                <div><Button variant='h6' className=''  >Claim</Button></div>
                <div><Button variant='h6' className=''  >Privacy</Button></div>
                <div><Button variant='h6' className=''  >Terms</Button></div>
                <div><Button variant='h6' className=''  >Ram Ram</Button></div>
            </Grid>
            <Grid className='pt-20' item xs={12} >
                <Typography variant='body2' component='p' align='center' >
                    &copy; 2024 My Company. All rights reserved
                </Typography>
                <Typography variant='body2' component='p' align='center' >
                    Made with love by 'Vikas Gupta'
                </Typography>
                
            </Grid>
        </Grid>
    </div>
  );
}
    
  


export default Footer