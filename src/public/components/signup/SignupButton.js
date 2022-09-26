import styled, {css} from "styled-components";

 const SignupButton = styled.button`
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
    }
`

export default SignupButton;