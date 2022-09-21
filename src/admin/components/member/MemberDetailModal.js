import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Divider } from '@mui/material'
import styled from "styled-components";
import MemberLogTable from './MeberLogTable';
import MemberFundingLogTable from './MemberFundingLogTable';

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

const MemberForm =styled.div`

display :flex;
flex-direction :column;

span{
  font-size: 14px;
    color: red;
}



`;

const MemberLogTableBox =styled.div`
width: 90%;

`;
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
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

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
            <MemberForm>

                <div><span>*필수 항목입니다</span></div>

                <MemberFormBox>
                    <label>회원Id<span>*</span></label>
                    <input type="text"></input>
                </MemberFormBox>


                <MemberFormBox>
                    <label>닉네임</label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox>
                    <label>이름<span>*</span></label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox>
                    <label>이메일<span>*</span></label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox>
                    <label>휴대전화번호</label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox>
                    <label>기본배송지</label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox>
                    <label>가입일자</label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox>
                    <label>가입플랫폼</label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox>
                    <label>탈퇴여부<span>*</span></label>
                    <input type="text"></input>
                </MemberFormBox>

                
                <MemberFormBox>
                    <label>탈퇴일자</label>
                    <input type="text"></input>
                </MemberFormBox>

                <MemberFormBox >
                    <button type = "button">수정</button>
                    <button type = "button">취소</button>
                </MemberFormBox>
                
            </MemberForm>


            <MemberLogTableBox>
                <h3>로그인 이력</h3>
                <MemberLogTable/>

                <h3>아이디 변경 이력</h3>
                <MemberLogTable/>

                <h3>휴대폰번호 변경 이력</h3>
                <MemberLogTable/>

                <h3>펀딩 내역</h3>
                <MemberFundingLogTable/>

            </MemberLogTableBox>
        </div>
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
        </Box>
      </Modal>
    </div>
  )
}
