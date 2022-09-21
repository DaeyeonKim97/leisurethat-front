import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ModalButton from './Modal';

function MypageSetTab() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  useEffect(() => {
    setName('김진호');
    setEmail('jinhoKim@greedy.com');
  }, []);

  const inputStyle = {
    width: '100%',
    marginBottom: '20px',
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '60%' }}>
          <Box sx={{ paddingLeft: '100px' }}>
            <Box sx={{ fontWeight: 'bold' }}>기본정보 설정</Box>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ width: '90px', height: '90px' }}
            >
              <input hidden accept="image/*" type="file" />
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg"
                alt="mypageImg"
                style={{
                  width: `100%`,
                  borderRadius: '50%',
                }}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '350px' }}>
              <InputLabel shrink htmlFor="userName">
                이름
              </InputLabel>
              <TextField defaultValue={name} id="userName" sx={inputStyle} />

              <InputLabel shrink htmlFor="userEmail">
                이메일
              </InputLabel>
              <TextField defaultValue={email} id="userEmail" sx={inputStyle} />

              <InputLabel shrink htmlFor="userPostalCode">
                기본배송지
              </InputLabel>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TextField
                  defaultValue={email}
                  id="userPostalCode"
                  sx={inputStyle}
                />
                <ModalButton buttonText="배송지 관리" />
              </Stack>

              <TextField
                defaultValue={email}
                id="userBasicAddress"
                sx={inputStyle}
              />
              <TextField
                defaultValue={email}
                id="userDetailAddress"
                sx={inputStyle}
              />

              <InputLabel shrink htmlFor="userPhone">
                휴대폰
              </InputLabel>
              <TextField defaultValue={email} id="userPhone" sx={inputStyle} />

              <Button variant="contained" sx={{ width: '100%' }}>
                정보 수정
              </Button>
            </Box>
          </Box>
          <br />
          <hr />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '350px' }}>
              <Box sx={{ fontWeight: 'bold', marginTop: '30px' }}>
                비밀번호 재설정
              </Box>

              <InputLabel shrink htmlFor="currentPw">
                현재 비밀번호
              </InputLabel>
              <TextField
                defaultValue={password}
                id="currentPw"
                sx={inputStyle}
              />

              <InputLabel shrink htmlFor="newPw">
                새 비밀번호
              </InputLabel>
              <TextField
                defaultValue={newPassword}
                id="newPw"
                sx={inputStyle}
              />

              <InputLabel shrink htmlFor="newPwCheck">
                비밀번호 확인
              </InputLabel>
              <TextField
                defaultValue={checkPassword}
                id="newPwCheck"
                sx={inputStyle}
              />

              <Button variant="contained" sx={inputStyle}>
                비밀번호 변경
              </Button>
            </Box>
          </Box>
          <hr />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '350px' }}>
              <Box sx={{ fontWeight: 'bold', marginTop: '50px' }}>
                본인 인증
              </Box>

              <InputLabel shrink htmlFor="authName">
                이름
              </InputLabel>
              <TextField defaultValue={name} id="authName" sx={inputStyle} />
              <InputLabel shrink htmlFor="authRRNFront">
                주민등록 번호
              </InputLabel>
              <Stack direction="row" alignItems="center">
                <TextField
                  defaultValue={name}
                  id="authRRNFront"
                  sx={inputStyle}
                />
                <RemoveIcon sx={{ margin: '10px' }} />
                <TextField
                  defaultValue={name}
                  id="authRRNFront"
                  sx={inputStyle}
                />
              </Stack>

              <InputLabel shrink htmlFor="userName">
                통신사
              </InputLabel>
              <TextField
                selected
                defaultValue={name}
                id="userName"
                sx={inputStyle}
              >
                <option>test</option>
              </TextField>

              <InputLabel shrink htmlFor="userName">
                휴대폰번호
              </InputLabel>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <TextField
                  selected
                  defaultValue={name}
                  id="userName"
                  sx={inputStyle}
                />
                <Box sx={inputStyle}>
                  <Button
                    variant="contained"
                    sx={{ width: '100%', height: '40px', marginBottom: '20px' }}
                  >
                    인증 요청
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
          <hr />
        </Box>
      </Box>
    </>
  );
}

export default MypageSetTab;
