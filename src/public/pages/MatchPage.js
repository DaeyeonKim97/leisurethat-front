import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled, {css} from 'styled-components';
import { useForm } from "react-hook-form";
import MatchModal from '../components/match/MatchModal';
import Button from '@mui/material/Button';
import MatchPassword from '../components/match/MatchPassword';
import MatchId from '../components/match/MatchId';



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  const onsubmit = (data) => { console.log(data); }


  return (
    <div style={{ height: "628px", display: "flex", flexDirection : "column" ,alignItems : "center" ,justifyContent : "center" }}>
          <Box  sx={{ width: "431px" }}>
      <Box sx={{borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} >
          <Tab style={{width: "220px"}}  label="아이디 찾기" {...a11yProps(0)} />
          <Tab style={{width: "220px"}}  label="비밀번호 찾기" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MatchId/>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <MatchPassword/>
      </TabPanel>
    </Box>

    </div>

  );
}
