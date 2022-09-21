import styled, {css} from "styled-components";
import React, {useState} from 'react';
import { useForm } from "react-hook-form";


const CertButton = styled.button`
display  :flex-inline;
width:92px;
height:45px;
color: #FFF;
border:none;
border-radius: 5px;
font-size:16px;
font-weight:bold;
cursor : pointer;
margin-left :10px;
align-items: center;
justify-content: center;

background-color: ${props => props.certState ==='before' ? "#00AEEF40" : "#D9D9D9"};

&:hover{
    background-color : #00AEEF;
}
`;

const ErrorMessage = styled.div`
    margin : 10px 0;
    color : #ff0000;
    font-size : 14px;
`


const SignupContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;

`

const SignupButton = styled.button`
    display : flex;
    align-items : center;
justify-content:center;
    width:400px;
    height:50px;
    background-color : #00AEEF40;
    color: #FFF;
    border:none;
    border-radius: 5px;
    font-size:16px;
    font-weight:bold;
    cursor  :pointer;
    

    &:hover{
        background-color : #00AEEF;
    }
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

const InputBox = styled.div`

`;

const KakaoLogin = styled.div`
display: flex;
align-items : center;
justify-content : center;

width:400px;
height:43px;
font-weight :bold;
border:1px solid #D9D9D9;
border-radius: 5px;
margin-top : 10px;
cursor : pointer;
background : url('static/img/kakao.png');
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
border:1px solid #D9D9D9;
border-radius: 5px;
margin-top : 10px;
color:#FFF;
cursor : pointer;
background : url('static/img/naver.png');
background-repeat : no-repeat;
background-color : #00D337;
background-position : center left 20px;
`;


function PublicSignup() {

    const [certState,setCertState] = useState("before");


    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm();

      const onSubmit = (data) => console.log(data, errors);
      const emailCert = () => {
        setCertState("progress");
        console.log(certState);
      }


    return(
 <SignupContainer>

<div>
<h1 style={{fontSize: '32px', fontWeight: 'bold', margin: '20px'}}>간편가입</h1>


<KakaoLogin>카카오로 로그인</KakaoLogin>
<NaverLogin>네이버로 로그인</NaverLogin>

<h1 style={{fontSize: '32px',fontWeight: 'bold', borderTop : "1px solid #D9D9D9" ,paddingTop:"20px"}}>이메일로 가입</h1>


<form style={{marginTop: '20px'}} className="formGroup" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">이메일</label>
        <InputBox>
            <BasicInput
            cert
            id="email"
            type="email"
            {...register("email", {
                required: true,
                maxLength: {
                value: 5,
                message: "이름은 5자 이하로 입력해주세요."
                }
            })}
            />
            <CertButton certState={certState} type="button" onClick={emailCert}>{certState==='progress'? '재전송' : '인증하기' }</CertButton>
        </InputBox>


        {certState==='progress'?
        <InputBox>
            <BasicInput
            cert
            id="emailCert"
            type="text"
            />
            <CertButton certState type="button">확인</CertButton>
        </InputBox> 
        : null}

        <ErrorMessage>
            {errors.name?.type === "required" && "이메일을 입력해주세요"}
            {errors.name?.type === "maxLength" && errors.name.message}
        </ErrorMessage>


        <label htmlFor="name">이름</label>
        <InputBox>
            <BasicInput
            id="name"
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

        <label htmlFor="nickname">아이디</label>

        <InputBox>
            <BasicInput
            id="nickname"
            type="text"
            {...register("nickname", {
                required : true,
                pattern: {
                value: /^[A-Za-z]+$/i,
                message: "문자열을 입력하여 주시길 바랍니다."
                }
            })}
            />
        </InputBox>

        <ErrorMessage>
          {errors.nickname?.type === "required" && "아이디를 입력해주세요"}
          {errors.nickname?.type === "maxLength" && errors.name.message}
        </ErrorMessage>


        <label htmlFor="password">비밀번호</label>
        <InputBox>
            <BasicInput
            id="password"
            type="password"
            {...register("password", {
                required : true,
            })}
            />
        </InputBox>


        <ErrorMessage>
            {errors.password?.type==="required" && "비밀번호를 입력해주세요"}
        </ErrorMessage>

        <label htmlFor="password">비밀번호확인</label>

        <InputBox>
            <BasicInput
            id="passwordCheck"
            type="password"
            {...register("passwordCheck", {
                required : true,
            })}
            />
        </InputBox>


        <ErrorMessage>
            {errors.passwordCheck?.type==="required" && "비밀번호를 입력해주세요"}
        </ErrorMessage>


        <SignupButton type="sumbit">완료</SignupButton>
      </form>


    <div style={{marginTop:"10px",display:"flex" ,justifyContent:"center"}}>이미 회원이신가요? <a href="#" style={{color:"#00AEEF"}}>로그인</a></div>

</div>
</SignupContainer>
 
    )
}

export default PublicSignup;