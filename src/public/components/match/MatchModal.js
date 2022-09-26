import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height : 239,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  color : '#757575', 
  
};

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
;

const ConfirmSmallButton = styled(Button)`
    background-color : #00AEEF;
    color : #fff;

    &:hover{
        background-color : #00AEEF;
    }`;

export default function BasicModal({certState,children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (certState) => setOpen(certState);
  const handleClose = () => setOpen(!certState);

  return (
    <div>
      <Modal
        open={certState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ fontSize : '14px', mt: 8}}>
                {children}
            <ConfirmSmallButton sx={{ ml : 45, mt : 3}}onClick={handleClose}>확인</ConfirmSmallButton>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}