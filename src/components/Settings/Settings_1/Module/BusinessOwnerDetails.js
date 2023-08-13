import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputBase,
  InputLabel,
  ListItem,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";

function BusinessOwnerDetails() {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Business Owner Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Box
                component="form" //  onSubmit={submitHandler} noValidate
              >
                <Grid container spacing={2}>
                  <Grid item lg={12}>
                    <FormLabel component="legend" className="label-heading">
                      Name
                    </FormLabel>
                    <OutlinedInput
                      sx={{ marginTop: "10px", height: 48 }}
                      fullWidth
                      autoComplete="off"
                      placeholder="Enter Business Owner Name"
                      aria-describedby="outlined-weight-helper-text"
                    ></OutlinedInput>
                  </Grid>
                  <Grid item lg={12}>
                    <FormLabel component="legend" className="label-heading">
                      Email
                    </FormLabel>
                    <OutlinedInput
                      sx={{ marginTop: "10px", height: 48 }}
                      fullWidth
                      autoComplete="off"
                      placeholder="Enter Business Owner Email"
                      aria-describedby="outlined-weight-helper-text"
                    ></OutlinedInput>
                  </Grid>
                  <Grid item lg={12}>
                    <FormLabel component="legend" className="label-heading">
                    Phone No.
                    </FormLabel>
                    <OutlinedInput
                      sx={{ marginTop: "10px", height: 48 }}
                      fullWidth
                      autoComplete="off"
                      placeholder="Enter Business Owner Phone No."
                      aria-describedby="outlined-weight-helper-text"
                    ></OutlinedInput>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default BusinessOwnerDetails;
