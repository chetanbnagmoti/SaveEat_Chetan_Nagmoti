import React from 'react';
import { Box, Button } from '@mui/material';

function TopSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#96D780',
          '&:hover': {
            backgroundColor: '#96D780',
          },
          marginRight: '9px',
        }}
        disableElevation
      >
        Add a New Outlet
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#96D780',
          '&:hover': {
            backgroundColor: '#96D780',
          },
        }}
        disableElevation
      >
        Edit Outlet
      </Button>
    </Box>
  );
}

export default TopSection;
