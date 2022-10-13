import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Divider } from '@mui/material'
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '50%',
  height : '80%',
  transform: 'translate(-50%, -50%)',
  width: 1024,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  overflow: 'scroll',
}

const MemberForm =styled.form`

display :flex;
flex-direction :column;

span{
  font-size: 14px;
    color: red;
}`;

const MemberFormBox = styled.div`

display: flex;


label{
display : flex;
background-color: #fff;
width: 149px;
align-items : center;
justify-content: center;
font-size : 14px;
border : 1px solid #D9D9D9;
}

input{
  width: 40%;
  border : 1px solid #D9D9D9;
  font-size: 14px;
  padding: 2px 8px;
  box-sizing: border-box;
  font-weight : normal;
  }

button{
  display : flex;
  align-items : center;
  justify-content : center;
    width: 80px;
    height: 25px;
    border : 2px solid #00AEEF;
    color : #00AEEF;
    background-color : #fff;
    font-weight : bold;
    border-radius : 5px;
    cursor : pointer;
    margin-left : 5px;
}
`;

export default function MemberDetailModal(props) {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();


      const callRegisterAPI = async(form) => {
      const requestURL = `http://localhost:8001/signup`;
      console.log("전달된 form :" , form);
  
          const result =  await fetch(requestURL, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "*/*"
              },
              body: JSON.stringify({
                  username: form.username,
                  password: form.password,
                  email: form.email,
                  name: form.name,      
              })
          })
          .then(response => response.json());
  
          console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);
    
  }


  const onSubmit = (form) => {
  callRegisterAPI(form);
  alert("회원등록에 성공하셨습니다.");
  setOpen(false);
  

  }

  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {props.children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div>
            <MemberForm onSubmit={handleSubmit(onSubmit,onError)}>

                <div><span>*필수 항목입니다</span></div>
                
                <MemberFormBox>
                    <label>아이디</label>
                    <input 
                        name="username"
                        type="text"
                        placeholder='영문, 숫자 조합으로 6 ~ 20자 이내로 작성'
                        {...register("username", {
                        })}   
                    />
                </MemberFormBox>

                <MemberFormBox>
                    <label>비밀번호</label>
                    <input 
                        name="password"
                        type="password"
                        placeholder='영문, 숫자, 특수 문자 조합으로 8자~20자 이내'
                        {...register("password", {
                        })}   
                    />
                </MemberFormBox>

                <MemberFormBox>
                    <label>이름<span>*</span></label>
                    <input 
                        name="name"
                        type="text"
                        placeholder='5자 이내로 입력'
                        {...register("name", {
                        })}   
                    />
                </MemberFormBox>

                <MemberFormBox>
                    <label>이메일<span>*</span></label>
                    <input 
                        name="email"
                        type="text"
                        placeholder='example@leisurethat.com'
                        {...register("email", {
                        })}   
                    />
                </MemberFormBox>

                <MemberFormBox>
                    <label>휴대전화번호</label>
                    <input 
                        name="phone"
                        type="text"
                        placeholder='-없이 입력'
                        {...register("phone", {
                        })}   
                    />
                </MemberFormBox>

                <MemberFormBox>
                  <label>권한<span>*</span></label>
                  <input 
                        name="role"
                        type="text"
                        placeholder='USER OR ADMIN'
                        {...register("role", {
                        })}    
                    />
                </MemberFormBox>


                <MemberFormBox style={{margin : "20px 0"}} >
                    <button type = "submit">등록</button>
                    <button 
                      type = "button" onClick={() => {
                reset({
                      username: "",
                      password: "",
                      name: "",
                      email: "",
                      phone:"",
                      role:""
                    }, {
                      keepErrors: true, 
                      keepDirty: true,
                    });
                  }}>
                취소
                </button>
                </MemberFormBox>
                
            </MemberForm>

        </div>
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
        </Box>
      </Modal>
    </div>
  )
}
