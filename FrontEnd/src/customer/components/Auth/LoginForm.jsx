import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../../state/Auth/Action.js';

const LoginForm = () => {
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
            email: data.get('email').toLowerCase(),
            password: data.get('password'),
        };
        dispatch(login(formData));
        console.table(formData)
     
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container gap={1}>
                    <Grid item xs={12}>
                        <TextField required id="email" name="email" label="Email" fullWidth type="email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="password" name="password" label="Password" type="password" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center py-3">
                    <p>Don't have an account?</p>
                    <Button onClick={() => navigate('/register')} className="ml-5" size="small">Register</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
