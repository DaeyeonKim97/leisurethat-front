import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled, {css} from 'styled-components';
import { useForm } from "react-hook-form";

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();


  const InputBox = styled.div`

`;

  const BasicInput = styled.input`
    width:400px;
    height:43px;
    padding : 10px;
    border:1px solid #D9D9D9;
    border-radius: 5px;
    margin-top : 10px;
    box-sizing : border-box;



    ${props =>
        props.cert &&
        css`
          width: 300px;
        `}


        &:focus {
            outline : 1px solid #00AEEF;
        }
 
`;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div >아이디 찾기</div >
        <form >
        <InputBox>
            <BasicInput
            id="email"
            type="email"
            />
        </InputBox>

        <InputBox>
            <BasicInput
            id="email"
            type="email"
            />
        </InputBox>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div >비밀번호 찾기</div >
      </TabPanel>
    </Box>
  );
}
