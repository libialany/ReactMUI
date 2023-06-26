import React from "react";
import { useFormData } from "../../../context/FormDataContext";
import { Typography, Grid, Paper } from "@mui/material";

function ReviewOrder() {
  const { dataStore } = useFormData();
  const { address, restaurantName } = dataStore;
  return (
    <React.Fragment>
      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 300px",
          borderBottom: '4px  solid #264BA3'
        }}
      >
        <Typography variant="h3" gutterBottom>
          Review Form
        </Typography>
        <Grid container spacing={2}>
          <Typography variant="subtitle1">
            Restaurant: {restaurantName}
          </Typography>
        </Grid>{" "}
        <Grid container spacing={2}>
          <Typography variant="subtitle1">Address: {address}</Typography>
        </Grid>{" "}
      </Paper>
    </React.Fragment>
  );
}

export default ReviewOrder;
