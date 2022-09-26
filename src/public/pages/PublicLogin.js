import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import MainInput from '../components/Login/MainInput'
import { Link, useLocation } from 'react-router-dom'
import MainFormError from '../components/Login/MainFormError'
import MainButton from '../components/Login/MainButton'
import MainFormBox from '../components/Main/MainFormBox'
import { BaseBox } from '../components/shared'
import MainInput from '../components/User/MainInput'
import MainFormError from '../components/User/MainFormError'
import MainButton from '../components/User/MainButton'

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const LogoContainer = styled.img`
  position: absolute;
  height: 20px;
  margin: 6px 10px;
  z-index: 10;
`

const PublicLogin = () => {
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

  return (
    <BaseBox>
      <MainFormBox>
        <div style={{ width: '300px', height: '400px' }}>
          <div style={{ fontSize: '30px', fontWeight: 'bolder' }}>로그인</div>
          <form onSubmit={handleSubmit(onSubmitValid)}>
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
                width: '100%',
                justifyContent: 'flex-end',
                fontSize: '13px',
                margin: '28px 0 20px 0',
                cursor: 'pointer',
              }}
            >
              <div><Link to={'/user/match'}>아이디/비밀번호 찾기</Link></div>
            </div>
            <MainButton
              type="submit"
              color="white"
              bgColor="#00aeef"
              value={loading ? '로그인 중입니다.' : '로그인'}
              disabled={!isValid || loading}
            />
            <ButtonContainer>
              <MainButton
                type="submit"
                color="black"
                bgColor="#FEE500"
                value={'카카오로 로그인'}
              />
              <LogoContainer src="/static/img/kakao.png" />
            </ButtonContainer>
            <ButtonContainer>
              <MainButton
                type="submit"
                color="white"
                bgColor="#00D337"
                value={'네이버로 로그인'}
              />
              <LogoContainer src="/static/img/naver.png" />
            </ButtonContainer>
            <MainFormError message={errors?.result?.message} />
          </form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
              fontSize: '12px',
            }}
          >
            회원이 아니신가요?
            <div
              style={{ marginLeft: '5px', color: '#00aeef', cursor: 'pointer' }}
            >
              <Link to={'/user/signup'}>회원가입</Link>
            </div>
          </div>
        </div>
      </MainFormBox>
    </BaseBox>
  )
}

export default PublicLogin
