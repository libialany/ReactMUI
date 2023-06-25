import React from "react";
import { useFormData } from "../../../context/FormDataContext";
import { Typography, Grid } from "@mui/material";

function ReviewOrder() {
  const { dataStore } = useFormData();
  const { address, restaurantName } = dataStore;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Form
      </Typography>
      <Grid container spacing={2}>
        <Typography variant="subtitle1">{address}</Typography>
        <Typography variant="subtitle1">{restaurantName}</Typography>
      </Grid>
    </React.Fragment>
  );
}

export default ReviewOrder;
