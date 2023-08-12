import React from 'react'
import BrandPanelLayout from '../../components/Layouts/BrandPanelLayout'
import BasicDetails from '../../components/Settings/Module/BasicDetails'
import TopSection from '../../components/Settings/TopSection'
import { Box } from '@mui/material'


const SettingPage = () => {
  return (
        <>
            <BrandPanelLayout>
            <Box height="auto">
                <TopSection />
                <BasicDetails />
            </Box>
            </BrandPanelLayout>
        </> 
  )
}

export default SettingPage