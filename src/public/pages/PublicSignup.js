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
    const [hideCertCode,setHideCertCode] = useState(0);
    const navigate = useNavigate();

    const callSendEmailAPI = async(email) => {
    
        const requestURL = `http://localhost:8001/mail/match`;
        console.log("????????? email :" , email);
    
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
            .then(response => response.json())
    
            console.log('[MemberAPICalls] callMatchIdAPI RESULT : ', result);

            setHideCertCode(result);
            
    
            // if(result.httpStatus === 201){
            //     alert("??????????????? ?????????????????????.");
            //     document.location.href = '/login';          
            // } else if(result.httpStatus === 400){
            //    //???????????? ???????????????(?)
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
      const inputCertCode = watch("inputCertCode", "");

      const onSubmit = async(form) => {   
            const requestURL = `http://localhost:8001/signup`;
            console.log("????????? form :" , form);
        
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
                        name: form.name                
                    })
                })
                .then(response => response.json());
        
                console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);
                
        
                if(result.httpStatus === 201){
                    alert("??????????????? ?????????????????????.");
                    document.location.href = '/login';          
                } else if(result.httpStatus === 400){
                   //???????????? ???????????????(?)
                }
                
      }

      const sendEmail = () => {
        const receiveCertCode = callSendEmailAPI(watchEmail);
        setHideCertCode(receiveCertCode);
        setEmailCertState("progress");
      }

      const emailCert = () => {
        console.log("????????? ???????????? : ",inputCertCode);
        console.log("?????? ??????", hideCertCode);
            if(inputCertCode == hideCertCode){
                alert("?????? ??????");
                return;
            }

            alert("??????????????? ???????????? ????????????.");
      }


      const idCheckCert = () => {

        const username = watch("username");
        console.log(username);
        callDuplicationAPI(username);
        // setIdCheckCertState("after");
        // console.log(idCheckCertState);
        // alert("??????????????? ????????? ?????????.");
      }


    return(
 <SignupContainer>

<div>
<h1 style={{fontSize: '32px', fontWeight: 'bold', margin: '20px'}}>????????????</h1>


<KakaoLogin>???????????? ?????????</KakaoLogin>
<NaverLogin>???????????? ?????????</NaverLogin>

<SignupTitle>???????????? ??????</SignupTitle>
<input type="number" name="hideCertCode" value={hideCertCode}/>


<form style={{marginTop: '20px'}} className="formGroup" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">?????????</label>
        <InputBox style={{display : "flex"}}>
            <BasicInput
            cert
            name="email"
            type="text"
            {...register("email", {
                required : true,
                pattern: {
                    value: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/,
                    message: "????????? ????????? ????????? ??????????????????"
                },
            })}
            />
            <CertButton emailCertState={emailCertState} type="button" onClick={sendEmail}>{emailCertState==='progress'? '?????????' : '????????????' }</CertButton>
        </InputBox>

       
        {emailCertState==='progress'?
        <InputBox style={{display : "flex"}}>
            <BasicInput
            cert
            name="inputCertCode"
            type="text"
            {...register("inputCertCode", {
            })}
            />
            <CertButton onClick={emailCert} emailCertState type="button">??????</CertButton>
        </InputBox> 
        : null}

        <ErrorMessage>
            {errors.email?.type === "required" && "???????????? ??????????????????"}
            {errors.email?.type === "pattern" && errors.email.message}
        </ErrorMessage>


        <label htmlFor="name">??????</label>
        <InputBox>
            <BasicInput
            name="name"
            type="text"
            {...register("name", {
                required: true,
                maxLength: {
                value: 5,
                message: "????????? 5??? ????????? ???????????? ????????? ????????????."
                }
            })}
            />
        </InputBox>

        
        <ErrorMessage>
          {errors.name?.type === "required" && "????????? ??????????????????"}
          {errors.name?.type === "maxLength" && errors.name.message}
        </ErrorMessage>

        <label htmlFor="username">?????????</label>

        <InputBox style={{display : "flex"}}>
            <BasicInput
            cert
            name="username"
            type="text"
            {...register("username", {
                required : true,
                pattern: {
                    value: /^[a-z]+[a-z0-9]{5,19}$/g,
                    message: "??????, ?????? ???????????? ???????????? ????????? ????????????."
                },

                minLength: {
                    value: 6,
                    message: "???????????? 6??? ???????????? ???????????? ????????? ????????????."
                    },
                
                
                maxLength: {
                    value: 20,
                    message: "???????????? 20 ????????? ???????????? ????????? ????????????."
                    }
            })}
            />
            <CertButton  idCheckCertState={idCheckCertState} type="button" onClick={idCheckCert}>????????????</CertButton>
        </InputBox>

        <ErrorMessage>
          {errors.username?.type === "required" && "???????????? ??????????????????"}
          {errors.username?.type === "maxLength" && errors.username.message}
          {errors.username?.type === "minLength" && errors.username.message}
          {errors.username?.type === "pattern" && errors.username.message}
        </ErrorMessage>


        <label htmlFor="password">????????????</label>
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
            {errors.password?.type==="required" && "??????????????? ??????????????????"}
        </ErrorMessage>

        <label htmlFor="passwordCheck">??????????????????</label>

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
            {errors.passwordCheck?.type==="required" && "??????????????? ??????????????????"}
            {errors.passwordCheck?.type==="validate" && "??????????????? ???????????? ????????????."}
        </ErrorMessage>


        <SignupButton type="sumbit">??????</SignupButton>
      </form>


    <div style={{marginTop:"10px",display:"flex" ,justifyContent:"center"}}>?????? ??????????????????? <NavLink style={{color:"#00AEEF"}} to={'/user/login'}>?????????</NavLink></div>

</div>
</SignupContainer>
 
    )
}

export default PublicSignup;