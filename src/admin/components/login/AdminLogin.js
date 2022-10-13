import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MainInput from '../login/MainInput'
import MainFormError from '../login/MainFormError'
import MainButton from '../login/MainButton'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

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

  const location = useLocation()
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userName: location?.state?.userName || '',
      password: location?.state?.password || '',
    },
  })

  const loading = false

  const onSubmitValid = (data) => {
    if (loading) {
      return
    }

    
    const { userName, password } = getValues()
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const data = new FormData(event.currentTarget)
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   })
  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmitValid)}>
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
            <MainInput
              {...register('userName', {
                required: '아이디를 입력해 주세요.',
                onChange() {
                  clearErrors('result')
                },
                minLength: { value: 5, message: '5글자 이상 입력해주세요.' },
              })}
              type="text"
              placeholder="아이디"
              hasError={Boolean(errors?.userName?.message)}
            />
            <MainFormError message={errors?.userName?.message} />
            <MainInput
              {...register('password', {
                required: '비밀번호를 입력해 주세요.',
                onChange() {
                  clearErrors('result')
                },
              })}
              type="password"
              placeholder="비밀번호"
              hasError={Boolean(errors?.password?.message)}
            />
            <MainFormError message={errors?.password?.message} />
            <div
              style={{
                display: 'flex',
                width: '40%',
                justifyContent: 'flex-end',
                fontSize: '16px',
                color: '#00aeef',
                margin: '28px 0 20px 160px',
                cursor: 'pointer',
              }}
            >
              <div>아이디/비멀번호 찾기</div>
            </div>
            <MainButton
              type="submit"
              color="white"
              bgColor="#00aeef"
              value={loading ? '로그인 중입니다.' : '로그인'}
              disabled={!isValid || loading}
            />
          </Box>
        </form>
      </Container>
    </ThemeProvider>
  )
}
