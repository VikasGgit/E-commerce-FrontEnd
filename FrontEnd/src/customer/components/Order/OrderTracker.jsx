import { Step, StepLabel, Stepper, useMediaQuery, useTheme, Box } from '@mui/material';
import React from 'react';

const steps = [
  "placed", "order confirmed", "shipped", "out for delivery", "delivered"
];

const OrderTracker = ({ activeStep }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box p={2}>
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel={!isSmallScreen} 
        orientation={isSmallScreen ? 'vertical' : 'horizontal'}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default OrderTracker;
