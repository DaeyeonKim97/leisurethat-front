import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { useForm } from "react-hook-form";
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

const callMatchIdAPI = async(form) => {
    
    const requestURL = `http://localhost:8001/user/match/id`;
    console.log("전달된 form :" , form);

        const result =  await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
           
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callMatchIdAPI RESULT : ', result);
        

        // if(result.httpStatus === 201){
        //     alert("회원가입에 성공하셨습니다.");
        //     document.location.href = '/login';          
        // } else if(result.httpStatus === 400){
        //    //회원가입 실패페이지(?)
        // }
        // }

}

  const onSubmit = (form) => {
    console.log(form);
    callMatchIdAPI(form);
    alert("입력하신 이메일로 아이디 정보를 발송하였습니다. 메일이 오지 않는 경우 입력한 이름과 이메일을 확인해 주세요.");
    // setCertState(true);
}



export default function MatchId() {

    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm();
    
//   const [certState,setCertState] = useState(false);

    return(
        <>
            <MatchIdTitle>아이디 찾기</MatchIdTitle >
            <form style={{marginTop: '20px'}} className="formGroup" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                <BasicInput
                name="name"
                type="text"
                placeholder='이름을 입력해주세요'
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
                name="email"
                type="text"
                placeholder='이메일을 입력해주세요'
                {...register("email", {
                required : true,
                pattern: {
                    value: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/,
                    message: "올바른 이메일 형식을 입력해주세요"
                },
            })}
                />
            </InputBox>

            <ErrorMessage>
                {errors.email?.type === "required" && "이메일을 입력해주세요"}
                {errors.email?.type === "pattern" && errors.email.message}
            </ErrorMessage>

            <ConfirmButton type='submit'>확인</ConfirmButton>
            </form>

    {/* 
            <MatchModal certState={certState}>
            입력하신 이메일로 아이디 정보를 발송하였습니다.
            메일이 오지 않는 경우 입력한 이름과 이메일을 확인해 주세요.
            </MatchModal> */}
        </>
    )
}