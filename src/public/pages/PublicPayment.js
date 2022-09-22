import styled from 'styled-components'
import {
  BaseBox,
  UnderLineContent,
  UnderLineContentBox,
  UnderLineContentsBox,
} from '../components/shared'
import Comma from '../lib/Comma'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useState } from 'react'
import { Autocomplete, Button, TextField } from '@mui/material'
import PaymentInfo from '../components/Payment/PaymentInfo'

const PaymentBox = styled.div`
  width: 50%;
  margin-left: 20px;
  margin-top: 15px;
`

const FlexBox = styled.div`
  display: flex;
  padding: 10px;
`

const ImagContainer = styled.div`
  margin-top: 5px;
`

const cardList = ['농협', 'bc 카드', '토스', ' 삼성카드']
const monthList = ['1 개월', '2 개월', '3 개월', '4 개월']

const PublicPayment = () => {
  const [check, setCheck] = useState(false)

  const [value, setValue] = useState(cardList[0])
  const [inputValue, setInputValue] = useState('')

  const [monthValue, setMonthValue] = useState(cardList[0])
  const [monthInput, setMonthInput] = useState('')

  const payInfoProp = {
    reward: 69000,
    shipping: 3000,
    totalFunding: 72000,
    completeFunding: 72000,
  }

  return (
    <BaseBox
      style={{
        height: '1100px',
      }}
    >
      <div>
        <PaymentInfo complete={false} />
        <div>
          <UnderLineContentsBox>결제 정보</UnderLineContentsBox>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', paddingRight: '30px' }}>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  리워드 가격
                </UnderLineContent>
                <UnderLineContent>{Comma(payInfoProp.reward)}</UnderLineContent>
              </UnderLineContentBox>{' '}
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  배송비
                </UnderLineContent>
                <UnderLineContent>
                  {Comma(payInfoProp.shipping)}
                </UnderLineContent>
              </UnderLineContentBox>{' '}
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  총 펀딩 금액
                </UnderLineContent>
                <UnderLineContent>
                  {Comma(payInfoProp.totalFunding)}
                </UnderLineContent>
              </UnderLineContentBox>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '50%',
                height: '250px',
              }}
            >
              <div>
                <UnderLineContentBox style={{ width: '100%' }}>
                  <UnderLineContent
                    style={{
                      marginRight: '20px',
                      width: '250px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {check ? (
                      <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setCheck(!check)
                        }}
                      >
                        <CheckCircleIcon
                          sx={{ fontSize: '20px', mr: '10px' }}
                        />
                      </div>
                    ) : (
                      <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setCheck(!check)
                        }}
                      >
                        <CheckCircleOutlineIcon
                          sx={{ fontSize: '20px', mr: '10px' }}
                        />
                      </div>
                    )}
                    <span>신용/체크카드</span>
                  </UnderLineContent>
                </UnderLineContentBox>{' '}
                <div style={{ marginTop: '10px' }}>
                  <FlexBox style={{ alignItems: 'center' }}>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setCheck(!check)
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: '20px', mr: '10px' }}
                      />
                    </div>
                    <div>카드 선택</div>
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue)
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue)
                      }}
                      id="카드 선택"
                      options={cardList}
                      sx={{ width: 150, ml: '20px', scale: '70%' }}
                      renderInput={(params) => (
                        <TextField {...params} label="카드 선택" />
                      )}
                    />
                  </FlexBox>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCheck(!check)
                    }}
                  ></div>
                  <FlexBox style={{ alignItems: 'center' }}>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setCheck(!check)
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ fontSize: '20px', mr: '10px' }}
                      />
                    </div>
                    <div>할부 선택</div>
                    <Autocomplete
                      value={monthValue}
                      onChange={(event, newValue) => {
                        setMonthValue(newValue)
                      }}
                      inputValue={monthInput}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue)
                      }}
                      id="할부 선택"
                      options={monthList}
                      sx={{ width: 150, ml: '20px', scale: '70%' }}
                      renderInput={(params) => (
                        <TextField {...params} label="할부 선택" />
                      )}
                    />
                  </FlexBox>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setCheck(!check)
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <UnderLineContentBox>
                  <UnderLineContent
                    style={{ marginRight: '20px', width: '250px' }}
                  >
                    PAY
                  </UnderLineContent>
                </UnderLineContentBox>{' '}
                <div
                  style={{
                    height: '190px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ImagContainer>
                    <a href="https://www.kakao.com">
                      <img src="static/img/KakaoPay.png" />
                    </a>
                  </ImagContainer>
                  <ImagContainer>
                    <a href="https://www.naver.com">
                      <img src="static/img/NaverPay.png" />
                    </a>
                  </ImagContainer>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{ width: 300, height: 50 }}
              style={{ fontSize: '15px' }}
            >
              {Comma(payInfoProp.completeFunding)}원 펀딩하기
            </Button>
          </div>
        </div>
      </div>
    </BaseBox>
  )
}

export default PublicPayment
