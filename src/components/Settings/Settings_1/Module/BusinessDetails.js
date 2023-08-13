import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, FormControl, FormLabel, Grid, Input, InputBase, InputLabel, ListItem, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Chip from '@mui/material/Chip';

function BusinessDetails() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Business Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box
              component="form" //  onSubmit={submitHandler} noValidate
            >
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <FormLabel component="legend" className="label-heading">
                  Registered Name
                  </FormLabel>
                  <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Enter Your Registered Name"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>
                </Grid>
                <Grid item lg={6}>
                    <FormLabel component="legend" className="label-heading" >
                    Brand Name
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Andheri West"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={6}>
                    <FormLabel component="legend" className="label-heading" >
                    Ownership Type
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Ownership Type"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={6}>
                    <FormLabel component="legend" className="label-heading" >
                    Signing Authority Email ID
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Signing Authority Email ID"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={6}>
                    <FormLabel component="legend" className="label-heading" >
                    Email ID
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Email ID"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={3}>
                    <FormLabel component="legend" className="label-heading" >
                    Type of Business
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Cloud Kitchen"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={3}>
                    <FormLabel component="legend" className="label-heading" >
                    GSTIN Number
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="GSTIN Number"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={3}>
                    <FormLabel component="legend" className="label-heading" >
                    FSSAI Licence No.
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="FSSAI Licence No."
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={3}>
                    <FormLabel component="legend" className="label-heading" >
                    Reference No.
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Reference No."
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>

                </Grid>
                <Grid item lg={12}>
                    <FormLabel component="legend" className="label-heading" >
                    Billing Address
                    </FormLabel>
                    <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Street Address"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>
                   <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Address Line 2"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>
                  <Grid container spacing={2}>
                  <Grid item lg={4}>
                  <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="City"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>
                  </Grid>
                  <Grid item lg={4}>
                  <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="State"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>
                  </Grid>
                  <Grid item lg={4}>
                  <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder=""
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>
                  </Grid>




                  </Grid>
                  

                </Grid>
                
                
                
                
              </Grid>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default BusinessDetails;
