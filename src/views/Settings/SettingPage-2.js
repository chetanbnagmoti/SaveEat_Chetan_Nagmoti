import React from 'react'
import BrandPanelLayout from '../../components/Layouts/BrandPanelLayout'

import TopSection from '../../components/Settings/Settings_1/TopSection'
import { Box } from '@mui/material'
import BasicDetails from '../../components/Settings/Settings_1/Module/BasicDetails'
import Settings_2 from '../../components/Settings/Settings_2'


const SettingPage_2 = () => {
  return (
        <>
            <BrandPanelLayout>
              <Box>
                <TopSection />
              </Box>
              <Box>
                <Settings_2 />
              </Box>
            </BrandPanelLayout>
        </> 
  )
}

export default SettingPage_2