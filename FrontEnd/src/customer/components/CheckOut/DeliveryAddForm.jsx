import { Button, Grid, TextField, Box } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data= new FormData(e.currentTarget);
        const address={
            firstName:data.get('firstName'),
            lastName:data.get('lastName'),
            city:data.get('city'),
            state:data.get('state'),
            phoneNumber:data.get('phonenumber'),
            address:data.get('address'),
            zipCode:data.get('zip'),
        }
        console.log(address);
    }
  return (
    <div>
        <Grid container spacing={4}>
            <Grid xs={12} md={5} className='overflow-y-scroll border shadow-md rounded-e-md h-[30.5rem]'>
                <div className='p-5 border-b cursor-pointer py-7' >
                    <AddressCard/>
                    <Button variant='contained' size='large' >
                        Deliver Here
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} lg={7}>
                <Box className="p-4 shadow-md rounded-s-md" >
                    <form action="" onSubmit={handleSubmit} >
                        <Grid container spacing={4} >
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    fullWidth
                                    autoComplete='given-name'
                                    />
                                </Grid>
                                
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth
                                    autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12}  >
                                    <TextField 
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    autoComplete='shipping-address'
                                    multiline
                                    rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                    required
                                    id="state"
                                    name="state"
                                    label="State"
                                    fullWidth
                                    autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                    required
                                    id="zip"
                                    name="zip"
                                    label="zip/pin code"
                                    fullWidth
                                    autoComplete='shipping postal code'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                    required
                                    id="phonenumber"
                                    name="phonenumber"
                                    label="Phone Number"
                                    fullWidth
                                    autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12}  >
                                <Button fullWidth variant='contained' size='large' type='submit' >
                        Deliver Here
                    </Button>
                                </Grid>
                              
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAddForm