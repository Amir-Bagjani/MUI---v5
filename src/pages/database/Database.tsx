import React from 'react'
import { Grid, Box } from '@mui/material';
import { BasicCard, GridContainer, ProgressStepper } from '../../components';

const steps = ["Step 1", "Step 2", "Step 3"];
const stepDescription = ["Description 1", "Description 2", "Description 3"];


export const Database = () => {
   return (
      <GridContainer>
         <Box
            mx="auto"
            sx={{ width: "80%" }}
         >
            <BasicCard
               cardContent={
                  <ProgressStepper
                     steps={steps}
                     stepDescription={stepDescription}
                  />
               }
            />
         </Box>
      </GridContainer>
   )
}
