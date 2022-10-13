import styled, {css} from "styled-components";
import React, {useState,useRef} from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import SignupButton from '../components/signup/SignupButton';
import {callDuplicationAPI, callRegisterAPI} from '../apis/MemberApiCalls';
import { useNavigate } from 'react-router-dom';


const CertButton = styled.button`
display :flex;
width:92px;
height:45px;
color: #FFF;
border:none;
border-radius: 5px;
font-size:12px;
font-weight:bold;
cursor : pointer;
margin-left :10px;
align-items: center;
justify-content: center;
margin-top : 10px;

background-color: ${props => props.emailCertState ==='before' ? "#00AEEF40" : "#D9D9D9"};

&:hover{
    background-color : #00AEEF;
}
`;

const ErrorMessage = styled.div`
    margin : 10px 0;
    color : #E54545;
    font-size : 12px;
`


const SignupContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;

`


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

const SignupTitle = styled.div`
        font-size: 32px;
        font-weight: bold;
        border-top : 1px solid #D9D9D9;
        padding-top : 40px;
        margin : 40px 0;
`;

const InputBox = styled.div`

`;

const KakaoLogin = styled.div`
display: flex;
align-items : center;
justify-content : center;

width:400px;
height:43px;
font-weight :bold;
border-radius: 5px;
margin-top : 10px;
cursor : pointer;
background : url('/static/img/kakao.png');
background-repeat : no-repeat;
background-color : #FEE500;
background-position : center left 20px;
`

const NaverLogin = styled.div`
display: flex;
align-items : center;
justify-content : center;

width:400px;
height:43px;
font-weight :bold;
border-radius: 5px;
margin-top : 10px;
color:#FFF;
cursor : pointer;
background : url('/static/img/naver.png');
background-repeat : no-repeat;
background-color : #00D337;
background-position : center left 20px;
`;


function PublicSignup() {

    const [emailCertState,setEmailCertState] = useState("before");
    const [idCheckCertState,setIdCheckCertState] = useState("before");
    const [responseState,setResponseState]=useState(0);
    const navigate = useNavigate();

    const callSendEmailAPI = async(email) => {
    
        const requestURL = `http://localhost:8001/mail/match`;
        console.log("전달된 email :" , email);
    
            const result =  await fetch(requestURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify({
                    email: email,
               
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
    

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
      } = useForm();


      const watchPassword = watch("password", "");
      const watchEmail = watch("email", "");

      const onSubmit = (watchEmail) => {       
        
   
      }



      const emailCert = () => {
        callSendEmailAPI(watchEmail);
        setEmailCertState("progress");
        console.log(emailCertState);
      }


      const idCheckCert = () => {

        const username = watch("username");
        console.log(username);
        callDuplicationAPI(username);
        // setIdCheckCertState("after");
        // console.log(idCheckCertState);
        // alert("사용가능한 아이디 입니다.");
      }


    return(
 <SignupContainer>

<div>
<h1 style={{fontSize: '32px', fontWeight: 'bold', margin: '20px'}}>간편가입</h1>


<KakaoLogin>카카오로 로그인</KakaoLogin>
<NaverLogin>네이버로 로그인</NaverLogin>

<SignupTitle>이메일로 가입</SignupTitle>


<form style={{marginTop: '20px'}} className="formGroup" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">이메일</label>
        <InputBox style={{display : "flex"}}>
            <BasicInput
            cert
            name="email"
            type="text"
            {...register("email", {
                required : true,
                pattern: {
                    value: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/,
                    message: "올바른 이메일 형식을 입력해주세요"
                },
            })}
            />
            <CertButton emailCertState={emailCertState} type="button" onClick={emailCert}>{emailCertState==='progress'? '재전송' : '인증하기' }</CertButton>
        </InputBox>

       
        {emailCertState==='progress'?
        <InputBox style={{display : "flex"}}>
            <BasicInput
            cert
            name="emailCert"
            type="text"
            />
            <CertButton emailCertState type="button">확인</CertButton>
        </InputBox> 
        : null}

        <ErrorMessage>
            {errors.email?.type === "required" && "이메일을 입력해주세요"}
            {errors.email?.type === "pattern" && errors.email.message}
        </ErrorMessage>


        <label htmlFor="name">이름</label>
        <InputBox>
            <BasicInput
            name="name"
            type="text"
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

        <label htmlFor="username">아이디</label>

        <InputBox style={{display : "flex"}}>
            <BasicInput
            cert
            name="username"
            type="text"
            {...register("username", {
                required : true,
                pattern: {
                    value: /^[a-z]+[a-z0-9]{5,19}$/g,
                    message: "영문, 숫자 조합으로 입력하여 주시길 바랍니다."
                },

                minLength: {
                    value: 6,
                    message: "아이디는 6자 이상으로 입력하여 주시길 바랍니다."
                    },
                
                
                maxLength: {
                    value: 20,
                    message: "아이디는 20 이하로 입력하여 주시길 바랍니다."
                    }
            })}
            />
            <CertButton  idCheckCertState={idCheckCertState} type="button" onClick={idCheckCert}>중복확인</CertButton>
        </InputBox>

        <ErrorMessage>
          {errors.username?.type === "required" && "아이디를 입력해주세요"}
          {errors.username?.type === "maxLength" && errors.username.message}
          {errors.username?.type === "minLength" && errors.username.message}
          {errors.username?.type === "pattern" && errors.username.message}
        </ErrorMessage>


        <label htmlFor="password">비밀번호</label>
        <InputBox>
            <BasicInput
            name="password"
            type="password"
            {...register("password", {
                required : true,
            })}
            />
        </InputBox>


        <ErrorMessage>
            {errors.password?.type==="required" && "비밀번호를 입력해주세요"}
        </ErrorMessage>

        <label htmlFor="passwordCheck">비밀번호확인</label>

        <InputBox>
            <BasicInput
            name="passwordCheck"
            type="password"
            {...register("passwordCheck", {
                required : true,
                validate: (value) => 
                    value===watchPassword,
            })}
            />
        </InputBox>


        <ErrorMessage>
            {errors.passwordCheck?.type==="required" && "비밀번호를 입력해주세요"}
            {errors.passwordCheck?.type==="validate" && "비밀번호가 일치하지 않습니다."}
        </ErrorMessage>


        <SignupButton type="sumbit">완료</SignupButton>
      </form>


    <div style={{marginTop:"10px",display:"flex" ,justifyContent:"center"}}>이미 회원이신가요? <NavLink style={{color:"#00AEEF"}} to={'/user/login'}>로그인</NavLink></div>

</div>
</SignupContainer>
 
    )
}

export default PublicSignup;