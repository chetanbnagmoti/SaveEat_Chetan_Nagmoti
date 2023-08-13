import { Box } from "@mui/material";
import React from "react";
import BasicDetails from "./Settings_1/Module/BasicDetails";
import BusinessDetails from "./Settings_1/Module/BusinessDetails";
import OutletDetails from "./Settings_1/Module/OutletDetails";
import BusinessOwnerDetails from "./Settings_1/Module/BusinessOwnerDetails";

function Settings_1() {
  return (
    <>
    <Box>
      <BasicDetails />
    </Box>
    <Box sx={{marginTop: "10px"}}>
    <BusinessDetails />
    </Box>
    <Box sx={{marginTop: "10px"}}>
        <OutletDetails/>
    </Box>
    <Box sx={{marginTop: "10px"}}>
        <BusinessOwnerDetails/>
    </Box>


    </>
  );
}

export default Settings_1;
