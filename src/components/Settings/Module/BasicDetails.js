import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, FormControl, FormLabel, Grid, Input, InputLabel, ListItem, OutlinedInput, Paper, TextField } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Chip from '@mui/material/Chip';

function BasicDetails() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleDeleteTag = (tagToDelete) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };
  
  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };


  return (

    <div style={{ marginTop: "2rem" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            <Box
              component="form"  //  onSubmit={submitHandler} noValidate

            >
              <Grid container spacing={2}>
                <Grid item lg={12}>
                  <FormLabel component="legend" className="label-heading">
                    Location
                  </FormLabel>
                  <OutlinedInput sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete='off'
                    placeholder='Exact location as on google maps'
                    aria-describedby='outlined-weight-helper-text'>
                  </OutlinedInput>
                </Grid>
                <Grid item lg={6} sx={{ mt: 1 }}>
                  <FormLabel component="legend" className="label-heading">
                    Locality
                  </FormLabel>
                  <OutlinedInput sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete='off'
                    placeholder='Andheri West'
                    aria-describedby='outlined-weight-helper-text'>
                  </OutlinedInput>
                </Grid>
                <Grid item lg={6} sx={{ mt: 1 }}>
                  <FormLabel component="legend" className="label-heading">
                    Outlet Phone No.
                  </FormLabel>
                  <OutlinedInput sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete='off'
                    placeholder='8907623456'
                    aria-describedby='outlined-weight-helper-text'>
                  </OutlinedInput>
                </Grid>
                <Grid item lg={12}>
                  <FormLabel component="legend" className="label-heading">
                   Cuisine
                  </FormLabel>
                  <OutlinedInput
                    sx={{ marginTop: '10px', height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Type and press Enter to add a cuisine"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddTag}
                    aria-describedby="outlined-weight-helper-text"
                  >
                    <Paper
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                      }}
                      component="ul"
                    >
                      {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={handleDeleteTag(tag)}
                    style={{ margin: "4px" }}
                  />
                  ))}
                      
                      
                    </Paper>
                  </OutlinedInput>
                </Grid>
              </Grid>



            </Box>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

  )
}


export default BasicDetails;


