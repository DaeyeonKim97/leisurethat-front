import { Button, TextField } from '@mui/material'
import CreateContainer from '../User/CreateContainer'
import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import ImgInput from './ImgInput'
import SNSContainer from './SNSContainer'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const top100Films = [
  { label: '산업은행' },
  { label: '국민은행' },
  { label: '외환은행' },
  { label: '수협' },
  { label: '농협' },
  { label: '우리은행' },
]

const EprojectAdditional = ({
  bankId,
  accountNumber,
  accountHolder,
  accountFile,
  taxInvoiceEmail,
  businessFile,
  setBankId,
  setAccountNumber,
  setAccountHolder,
  setAccountFile,
  setTaxInvoiceEmail,
  setBusinessFile,
}) => {
  return (
    <div style={{ margin: '80px 50px' }}>
      <CreateContainer title="거래은행을 선택해 주세요">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bankId}
          onChange={(e) => {
            setBankId(e.target.value)
          }}
          style={{ width: '200px' }}
        >
          <MenuItem value={1}>국민은행</MenuItem>
          <MenuItem value={2}>신한은행</MenuItem>
          <MenuItem value={3}>우리은행</MenuItem>
          <MenuItem value={4}>산업은행</MenuItem>
          <MenuItem value={5}>하나은행</MenuItem>
          <MenuItem value={6}>제일은행</MenuItem>
          <MenuItem value={7}>시티은행</MenuItem>
          <MenuItem value={8}>카카오뱅크</MenuItem>
          <MenuItem value={9}>토스뱅크</MenuItem>
          <MenuItem value={10}>케이뱅크</MenuItem>
        </Select>
      </CreateContainer>
      <CreateContainer
        title="계좌번호를 적어주세요"
        input="계좌번호"
        value={accountNumber}
        setValue={setAccountNumber}
      ></CreateContainer>
      <CreateContainer
        title="예금주명을 적어주세요"
        input="예금주"
        value={accountHolder}
        setValue={setAccountHolder}
      ></CreateContainer>
      <CreateContainer title="통장사본 이미지를 올려주세요">
        <ImgInput lg value={accountFile} setValue={setAccountFile} />
      </CreateContainer>
      <CreateContainer
        title="전자 세금 계산서 이메일을 적어주세요"
        input="이메일"
        value={taxInvoiceEmail}
        setValue={setTaxInvoiceEmail}
      ></CreateContainer>
      <CreateContainer title="사업자등록증 사본 이미지를 올려주세요">
        <ImgInput lg value={businessFile} setValue={setBusinessFile} />
      </CreateContainer>
    </div>
  )
}

export default EprojectAdditional
