import React, { useRef, useState } from "react";
import { PersonalFormRef } from "./PersonalForm";
import PersonalForm from "./PersonalForm";
import ReviewOrder from "./ReviewOrder";
import CheckoutSuccess from "./CheckoutSuccess";
//import validationSchema from "./validationSchema";
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import { AddressFormRef } from "./AddressForm";
import AddressForm from "./AddressForm";
const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Form() {
  const refPersonalForm = useRef<PersonalFormRef>();
  const refAddressForm = useRef<AddressFormRef>();
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  //const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const nextForm = () => {
    if (isLastStep) {
      console.log("FIN");
    } else {
      delay(1000);
      setActiveStep(activeStep + 1);
    }
  };
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const arrForms = [
    {
      component: <PersonalForm ref={refPersonalForm} nextForm={nextForm} />,
      action: () => refPersonalForm?.current?.validate(),
    },
    {
      component: <AddressForm ref={refAddressForm} nextForm={nextForm} />,
      action: () => refAddressForm?.current?.validate(),
    },
    { component: <ReviewOrder />, action: () => console.log("Review Order") },
  ];
  const renderStepContent = (step: number) => {
    return arrForms[step].component;
  };
  //   async function _submitForm(values, actions) {
  //     await delay(1000);
  //     alert(JSON.stringify(values, null, 2));
  //     actions.setSubmitting(false);
  //     setActiveStep(activeStep + 1);
  //   }
  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Grid
            container
            sx={{ display: "flex", flexDirection: "column" }}
            rowSpacing={2}
          >
            <Grid item>{renderStepContent(activeStep)}</Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {activeStep !== 0 && (
                <Button sx={{ m: 2 }} onClick={handleBack}>
                  Back
                </Button>
              )}
              <div>
                <Button
                  sx={{ m: 2 }}
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={arrForms[activeStep].action}
                >
                  {isLastStep ? "Search" : "Next"}
                </Button>
                {isSubmitting && <CircularProgress size={24} />}
              </div>
            </Grid>
          </Grid>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
