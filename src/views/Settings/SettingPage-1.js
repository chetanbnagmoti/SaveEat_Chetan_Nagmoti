import React from 'react'
import BrandPanelLayout from '../../components/Layouts/BrandPanelLayout'

import TopSection from '../../components/Settings/Settings_1/TopSection'
import { Box } from '@mui/material'
import BasicDetails from '../../components/Settings/Settings_1/Module/BasicDetails'
import Settings_1 from '../../components/Settings/Settings_1'


const SettingPage_1 = () => {
  return (
        <>
            <BrandPanelLayout>
              <Box>
                <TopSection />
              </Box>
              <Box>
                <Settings_1 />
              </Box>
            </BrandPanelLayout>
        </> 
  )
}

export default SettingPage_1