import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import RemoveIcon from '@mui/icons-material/Remove'

import ModalButton from './Modal'
import { Typography } from '@mui/material'

function MypageSetTab() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [checkPassword, setCheckPassword] = useState()
  const [phone, setPhone] = useState()
  const [ssn, setSsn] = useState()
  const [user,setUser] = useState({})
  const navigate = useNavigate();

  const inputStyle = {
    width: '100%',
    marginBottom: '20px',
  }

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value)
  }
  const onChangeCheckPassword = (e) => {
    setCheckPassword(e.target.value)
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const onChangeSsn = (e) => {
    setSsn(e.target.value)
  }

  const validationName = () => {
    let check = /^(?=.*[a-zA-Z])ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/
    return !check.test(name) && name === ''
  }

  const validationPassword = () => {
    return password === '' ? true : false
  }

  const validationNewPassword = () => {
    let check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    return check.test(newPassword)
  }

  const validationCheckPassword = () => {
    return checkPassword === '' || newPassword !== checkPassword ? true : false
  }

  const validationPhone = () => {
    return phone === '' ? true : false
  }

  const validationSsn = () => {
    let check = /\s/g
    return ssn === '' || check.test(ssn) ? true : false
  }

  const logout = () =>{
    window.localStorage.clear();
    navigate("/", { replace: true });
    window.scrollTo(0,0);
    window.location.reload();
  }

  const secession = ()=>{
    const answer = window.confirm("정말 탈퇴하시겠습니까?");
    if(!answer){
      return
    }
    
    const deleteMember = async()=>{
      const username = window.localStorage.getItem('username');
      const requestURL = `http://localhost:8001/user/${username}`;
      
       await fetch(requestURL, {
        method: "DELETE",
        headers: {
            "Accept": "*/*",
        },
    })
    

     }
  
     deleteMember();
     window.localStorage.clear();
     navigate("/", { replace: true });
     window.scrollTo(0,0);
     window.location.reload();
    

  }

  const updatePassword = async(password,newPassword)=>{
    const username = window.localStorage.getItem('username');
    const requestURL = `http://localhost:8001/user/password`; 

    console.log(password);
    console.log(newPassword);

  
    let data =  await fetch(requestURL, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
      },
      body: JSON.stringify({
        username: username,
        oldPassword: password,
        newPassword: newPassword,              
    })
  })
  .then(response => response.json())

  console.log("data :" , data);
  setUser(data);
    
  }


  useEffect(() => {

    const getMember = async()=>{
      const username = window.localStorage.getItem('username');
      const requestURL = `http://localhost:8001/user/${username}`;
      
      let data =  await fetch(requestURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
        },
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data.results.member);
      setUser(data.results.member);

    })
  

    
    
     }
  
     getMember();
     
     
    }, []);

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
              <TextField defaultValue={user.name} multiline id="userName" sx={inputStyle} />

              <InputLabel shrink htmlFor="userEmail">
                이메일
              </InputLabel>
              <TextField defaultValue={user.email} id="userEmail" multiline sx={inputStyle} />

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
                type="password"
                required
                error={validationPassword()}
                onChange={onChangePassword}
                helperText={
                  validationPassword() ? '현재 비밀번호를 입력하세요' : ''
                }
              />

              <InputLabel shrink htmlFor="newPw">
                새 비밀번호
              </InputLabel>
              <TextField
                defaultValue={newPassword}
                id="newPw"
                sx={inputStyle}
                type="password"
                required
                error={validationNewPassword()}
                onChange={onChangeNewPassword}
                helperText={
                  validationNewPassword()
                    ? '8자리 이상의 영문(대/소문자), 숫자, 특수문자 중 세 종류를 혼합하여 사용하세요.'
                    : ''
                }
              />

              <InputLabel shrink htmlFor="newPwCheck">
                비밀번호 확인
              </InputLabel>
              <TextField
                defaultValue={checkPassword}
                id="newPwCheck"
                sx={inputStyle}
                type="password"
                required
                error={validationCheckPassword()}
                onChange={onChangeCheckPassword}
                helperText={
                  validationCheckPassword()
                    ? '새 비밀번호와 일치하지 않습니다.'
                    : ''
                }
              />

              <Button onClick={updatePassword} variant="contained" sx={inputStyle}>
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
              <TextField
                defaultValue={name}
                id="authName"
                sx={inputStyle}
                required
                error={validationName()}
                onChange={onChangeName}
                helperText={validationName() ? '이름을 입력해 주세요' : ''}
              />
              <InputLabel shrink htmlFor="authRRNFront">
                주민등록 번호
              </InputLabel>
              <Stack direction="row" alignItems="center">
                <TextField
                  defaultValue={name}
                  id="authRRNFront"
                  sx={inputStyle}
                  required
                  error={validationSsn()}
                  onChange={onChangeSsn}
                  helperText={
                    validationSsn() ? '주민번호 앞자리를 입력해주세요' : ''
                  }
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
                select
                defaultValue={name}
                id="userName"
                sx={inputStyle}
              >
                <MenuItem value="SKT">SKT</MenuItem>
                <MenuItem value="KT">KT</MenuItem>
                <MenuItem value="LG U+">LG U+</MenuItem>
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
                  placeholder="'-없이 휴대폰번호를 입력해주세요'"
                  required
                  error={validationPhone()}
                  onChange={onChangePhone}
                  helperText={
                    validationPhone() ? '휴대폰번호를 입력해 주세요' : ''
                  }
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
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
              <Stack direction="row" spacing={2} sx={{ padding: '40px' }}>
                <LogoutIcon color="neutral" />
                <Button onClick={logout}>logout</Button>
              </Stack>

              <Box sx={{ padding: '20px' }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    padding: '0 20px 0 20px ',
                  }}
                >
                  회원 탈퇴
                </Typography>

                <Typography
                  sx={{ fontSize: '18px', color: '#d9d9d9', padding: '20px' }}
                >
                  회원 탈퇴 시 관련 정보는 개인정보보호 관련 약관에 의거하여
                  처리됩니다.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    onClick={secession}
                    variant="contained"
                    sx={{ color: '#ffffff', backgroundColor: '#d9d9d9' }}
                  >
                    탈퇴하기
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MypageSetTab
