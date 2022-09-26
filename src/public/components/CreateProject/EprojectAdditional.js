import { Button, TextField } from '@mui/material'
import CreateContainer from '../User/CreateContainer'
import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import ImgInput from './ImgInput'
import SNSContainer from './SNSContainer'

const top100Films = [
  { label: '산업은행' },
  { label: '국민은행' },
  { label: '외환은행' },
  { label: '수협' },
  { label: '농협' },
  { label: '우리은행' },
]

const EprojectAdditional = () => {
  return (
    <div style={{ margin: '80px 50px' }}>
      <CreateContainer
        fisrt
        title="계좌 정보를 입력해 주세요 "
        input="계좌 정보"
      >
        <div>프로젝트 종료 후 입금받으실 계좌를 입력해 주세요</div>
      </CreateContainer>
      <CreateContainer title="거래은행을 선택해 주세요">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="은행 선택" />}
        />
      </CreateContainer>
      <CreateContainer
        title="계좌번호를 적어주세요"
        input="계좌번호"
      ></CreateContainer>
      <CreateContainer
        title="예금주명을 적어주세요"
        input="예금주"
      ></CreateContainer>
      <CreateContainer title="통장사본 이미지를 올려주세요">
        <ImgInput lg />
      </CreateContainer>
      <CreateContainer
        title="전자 세금 계산서 이메일을 적어주세요"
        input="이메일"
      ></CreateContainer>
      <CreateContainer title="사업자등록증 사본 이미지를 올려주세요">
        <ImgInput lg />
      </CreateContainer>
      <CreateContainer title="홈페이지와 SNS주소를 적어주세요">
        <div>
          <div style={{ color: '#00AEEF' }}>(선택사항)</div>
          <div>
            현재 운영중인 곳의 주소를 적어주세요. 진행자 정보에 노출됩니다.
          </div>
          <SNSContainer publicIcon />
          <SNSContainer facebookIcon />
          <SNSContainer instagramIcon />
          <SNSContainer linkedInIcon />
          <SNSContainer twitterIcon />
        </div>
      </CreateContainer>
    </div>
  )
}

export default EprojectAdditional
