import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, FormControl, FormLabel, Grid, Input, InputBase, InputLabel, ListItem, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Chip from '@mui/material/Chip';

function BasicDetails() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDeleteTag = (tagToDelete) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleAddTag = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (

    <div style={{ marginTop: "2rem" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Basic Details</Typography>
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
                  <Box
                    sx={{ marginTop: '10px', height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Type and press Enter to add a cuisine"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddTag}
                    aria-describedby=""
                  >
                  <Paper
                    sx={{
                      display: 'flex',
                      alignItems: 'left',
                      gap: '4px',
                      padding: '4px',
                    }}
                  >
                    {tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        onDelete={handleDeleteTag(tag)}
                        style={{ margin: '4px' }}
                      />
                    ))}
                    <InputBase
                      sx={{ flex: 1 }}
                      fullWidth
                      autoComplete="off"
                      placeholder="Type and press Enter to add a cuisine"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleAddTag}
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </Paper>
                
                  </Box>
                </Grid>
                <Grid item lg={12} sx={{ mt: 1 }}>
      <FormLabel component="legend" className="label-heading">
        Outlet Image
      </FormLabel>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #ccc',
          borderRadius: '4px',
          // padding: '8px',
        }}
      >
        <Typography variant="body1" color="textSecondary">
          {selectedFile ? selectedFile.name : 'No file chosen'}
        </Typography>
        <label htmlFor="file-input" style={{ display: 'inline-block', cursor: 'pointer'}}>
        <Button variant="contained" component="span" sx={{
            backgroundColor: "#85D8D9",
          }}>
            Choose File
          </Button>
          <InputBase
            id="file-input"
            type="file"
            inputProps={{ accept: 'image/*' }}
            onChange={handleFileChange}
            sx={{ display: 'none' }}
          />
        </label>
      </Box>
        
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


