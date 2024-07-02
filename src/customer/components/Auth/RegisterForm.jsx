import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../../../state/Auth/Action.js';



const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);
    const jwt=localStorage.getItem('jwt');
    
    
    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt));
        }   
    }, [jwt, auth.jwt]);
    
 

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email').toLowerCase(),
            password: data.get('password'),
        };
            console.table(formData);
            dispatch(register(formData));
            console.log(auth)

            navigate('/')
  
       
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container gap={1}>
                    <Grid item xs={12}>
                        <TextField required id="firstName" name="firstName" label="First Name" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="lastName" name="lastName" label="Last Name" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="email" name="email" label="Email" fullWidth type="email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="password" name="password" label="Password" type="password" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center py-3">
                    <p>Already have an account?</p>
                    <Button onClick={() => navigate('/login')} className="ml-5" size="small">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
