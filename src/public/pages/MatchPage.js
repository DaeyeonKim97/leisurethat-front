import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled, {css} from 'styled-components';
import { useForm } from "react-hook-form";
import MatchModal from '../components/match/MatchModal';
import Button from '@mui/material/Button';






const InputBox = styled.div`

`;

const InputForm = styled.form`

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

const MatchIdTitle = styled.div`
      font-weight: bold;
      font-size: 32px;
      margin : 40px 0;
`

const ErrorMessage = styled.div`
  margin : 10px 0;
  color : #ff0000;
  font-size : 14px;
`

const ConfirmButton = styled(Button)`
display : flex;
align-items : center;
justify-content:center;
width:400px;
height:50px;
margin-top : 10px;
background-color : #00AEEF40;
color: #FFF;
border:none;
border-radius: 5px;
font-size:16px;
font-weight:bold;
cursor  :pointer;

&:hover{
  background-color : #00AEEF;
}`


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
  const [certState,setCertState] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  
  
  const onSubmit = (data) => {
    console.log(data);
    setCertState(true);
    alert("입력하신 이메일로 아이디 정보를 발송하였습니다. 메일이 오지 않는 경우 입력한 이름과 이메일을 확인해 주세요.");

  
  }


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
        <MatchIdTitle>아이디 찾기</MatchIdTitle >
        <form style={{marginTop: '20px'}} className="formGroup" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

            <BasicInput
            id="name"
            type="text"
            placeholder='이름 입력'
            {...register("name", {
                required: true,
                maxLength: {
                value: 5,
                message: "이름은 5자 이하로 입력하여 주시길 바랍니다."
                }
            })}
            />
        

        <ErrorMessage>
          {errors.name?.type === "required" && "이름을 입력해주세요"}
          {errors.name?.type === "maxLength" && errors.name.message}
        </ErrorMessage>



        <InputBox>
            <BasicInput
            id="username"
            type="text"
            placeholder='아이디를 입력'
            {...register("username", {
                required : true,
                pattern: {
                value: /^[A-Za-z]+$/i,
                message: "문자열을 입력하여 주시길 바랍니다."
                }
            })}
            />
        </InputBox>

        <ErrorMessage>
          {errors.username?.type === "required" && "아이디를 입력해주세요"}
          {errors.username?.type === "maxLength" && errors.username.message}
        </ErrorMessage>

        <ConfirmButton type='submit'>확인</ConfirmButton>
        </form>

{/* 
        <MatchModal certState={certState}>
          입력하신 이메일로 아이디 정보를 발송하였습니다.
          메일이 오지 않는 경우 입력한 이름과 이메일을 확인해 주세요.
        </MatchModal> */}
        
      </TabPanel>


      <TabPanel value={value} index={1}>
        <MatchIdTitle >비밀번호 찾기</MatchIdTitle >
        <form style={{marginTop: '20px'}} className="formGroup" autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
        <InputBox>

        <BasicInput
              id="name"
              type="text"
              placeholder='이름 입력'
              {...register("name", {
                  required: true,
                  maxLength: {
                  value: 5,
                  message: "이름은 5자 이하로 입력하여 주시길 바랍니다."
                  }
              })}
              />
          </InputBox>

        

        <ErrorMessage>
          {errors.name?.type === "required" && "이름을 입력해주세요"}
          {errors.name?.type === "maxLength" && errors.name.message}
        </ErrorMessage>



        <InputBox>
            <BasicInput
            id="username"
            type="text"
            placeholder='아이디를 입력'
            {...register("username", {
                required : true,
                pattern: {
                value: /^[A-Za-z]+$/i,
                message: "문자열을 입력하여 주시길 바랍니다."
                }
            })}
            />
        </InputBox>

        <ErrorMessage>
          {errors.username?.type === "required" && "아이디를 입력해주세요"}
          {errors.username?.type === "maxLength" && errors.username.message}
        </ErrorMessage>

        <InputBox>
            <BasicInput
            id="email"
            type="email"
            placeholder='이메일을 입력'
            {...register("email", {
                required : true,
            })}
            />
        </InputBox>

        <ErrorMessage>
            {errors.email?.type === "required" && "이메일을 입력해주세요"}
        </ErrorMessage>

          
          
          <ConfirmButton type='submit'>확인</ConfirmButton>
          
          <MatchModal certState={certState}>
              입력하신 정보와 일치하는 비밀번호가 없습니다.
              {/* 입력하신 이메일로 임시비밀번호를 발급해드렸습니다. */}
          </MatchModal>
        </form>

      </TabPanel>
    </Box>

    </div>

  );
}
