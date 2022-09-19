import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

export default function SignIn() {
  // const navigate = useNavigate();

  //   // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
  //   const dispatch = useDispatch();
  //   const loginMember = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보

  // useEffect(() => {

  //   if(loginMember.status === 200){
  //       console.log("[Login] Login SUCCESS {}", loginMember);
  //       navigate("/", { replace: true });
  //   }
  // }
  // ,[loginMember]);

  // // 로그인 상태일 시 로그인페이지로 접근 방지
  // if(loginMember.length > 0) {
  //     console.log("[Login] Login is already authenticated by the server");
  //     return <Navigate to="/"/>
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ECFBFF',
            height: 450,
            width: 430,
          }}
        >
          <Box
            component="img"
            className="logoImage"
            alt="logoImage"
            src="/static/img/Logo_High.png"
            sx={{
              height: 100,
              mt: 3,
              ml: 3,
            }}
          />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
            }}
          >
            <TextField
              margin="normal"
              required
              id="email"
              label="이메일를 입력하세요"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                mt: 2,
                ml: 5,
                width: 350,
                backgroundColor: 'white',
              }}
            />
            <TextField
              margin="normal"
              required
              name="password"
              label="패스워드를 입력하세요"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                ml: 5,
                width: 350,
                backgroundColor: 'white',
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                display: 'plex',
                mt: 6,
                mb: 2,
                width: 200,
                ml: 14,
                height: 50,
                fontSize: 23,
                backgroundColor: '#00aeef',
              }}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
