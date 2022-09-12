import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Typography, Stack, Divider, Box } from '@mui/material';
import { CommonButton } from '../commonButton';


interface IProps {
   steps: string[];
   stepDescription: string[];
}

export const ProgressStepper: React.FC<IProps> = ({ steps, stepDescription }) => {
   const [activeStep, setactiveStep] = useState(0);
   const [completeSteps, setCompleteSteps] = useState<any>({});

   const stepsLength = steps.length;
   const completeLength = Object.keys(completeSteps).length;
   const isAllSetpsComplete = completeLength === stepsLength;

   const handleNext = () => {
      const newComplete = completeSteps;
      newComplete[activeStep] = true;
      setCompleteSteps(newComplete)

      setactiveStep(p => p + 1)
   }
   const handleBack = () => {
      setactiveStep(p => p - 1)
   }
   const handleReset = () => {
      setactiveStep(0)
      setCompleteSteps({})
   }


   return (
      <>
         <Stepper activeStep={activeStep} sx={{ bgcolor: "whitesmoke" }}>
            {steps.map((step, index) => (
               <Step key={step} completed={completeSteps[index]}>
                  <StepLabel>{step}</StepLabel>
               </Step>
            ))}
         </Stepper>
         <Divider sx={{ my: "1rem" }} />

         <Stack
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="10rem"
         >
            {!isAllSetpsComplete && <Typography>{stepDescription[activeStep]}</Typography>}
            {isAllSetpsComplete && <Typography>All steps complete.</Typography>}
         </Stack>
         {isAllSetpsComplete && <CommonButton
            onClick={handleReset}
            variant="contained"
         >
            Reset
         </CommonButton>}

         {!isAllSetpsComplete &&
            <Box>
               <CommonButton
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                  sx={{mr: "1rem"}}
               >
                  Back
               </CommonButton>

               <CommonButton
                  onClick={handleNext}
                  variant="contained"
               >
                  {activeStep !== (stepsLength - 1) ? "Next" : "Finish"}
               </CommonButton>
            </Box>
         }

      </>
   )
}
