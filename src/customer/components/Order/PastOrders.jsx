import { Grid, Box, Typography, Button, Rating } from "@mui/material";
import React from "react";

const PastOrders = () => {
  return (
    <Box p={2} mt={3} boxShadow={3} borderRadius={2} bgcolor="white">
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item >
              <Box
                component="img"
                sx={{
                  height: '10rem',
                  width: '8rem',
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
                src="https://www.tistabene.com/cdn/shop/files/KRT-0286A.jpg?v=1702894114&width=5000"
                alt="Universal Shirt"
              />
            </Grid>
            <Grid item  display="flex" alignItems="center">
              <Typography variant="subtitle1" fontWeight="bold">
                Universal Shirt
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} display="flex"  justifyContent="flex-end">
          
          <div className="flex flex-col items-center " >
            <Button variant="contained" color="primary">
            Rate and Review
          </Button>
          
            <Rating/>
          </div>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default PastOrders;
