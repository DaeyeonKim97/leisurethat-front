import { Button, Modal } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MainFundingProject from '../Main/MainFundingProject'
import TextField from '@mui/material/TextField'
import {
  BaseBox,
  UnderLineBox,
  UnderLineContent,
  UnderLineContentBox,
  UnderLineContentsBox,
} from '../shared'
import ShippingAddressModal from './ShippingAddressModal'
import { useSelector } from 'react-redux'
import { calculation } from '../../apis/payments/Calculation'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'primary',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#00AEEF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #00AEEF',
    },
    '&:hover fieldset': {
      border: '2px solid #00AEEF',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #00AEEF',
    },
  },
})

const PaymentInfo = ({
  complete,
  content,
  amount,
  authKey,
  customerKey,
  reward,
}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userHandler)
  const delivery = useSelector((state) => state.deliveryHandler)
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '60px' }}>
          <UnderLineContentsBox>프로젝트</UnderLineContentsBox>
          <MainFundingProject item={content} />
        </div>
        <div style={{ width: '795px' }}>
          <div>
            <UnderLineContentsBox>구매자 정보</UnderLineContentsBox>
            <div style={{ height: '160px' }}>
              <UnderLineContentBox style={{ alignItems: 'center' }}>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  이름
                </UnderLineContent>
                <UnderLineContent>{user.name}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox style={{ alignItems: 'center' }}>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  이메일
                </UnderLineContent>
                <UnderLineContent>{user.email}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox style={{ alignItems: 'center' }}>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  휴대폰 번호
                </UnderLineContent>
                <UnderLineContent>{user.phone}</UnderLineContent>
              </UnderLineContentBox>
            </div>
          </div>
          <div>
            <UnderLineContentsBox>배송지 정보</UnderLineContentsBox>
            <div style={{ height: '230px' }}>
              <UnderLineContentBox style={{ alignItems: 'center' }}>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  수령인
                </UnderLineContent>
                <UnderLineContent>{delivery.deliveryReceiver}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox style={{ alignItems: 'center' }}>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  휴대폰 번호
                </UnderLineContent>
                <UnderLineContent>{delivery.contact}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox style={{ alignItems: 'center' }}>
                <UnderLineContent
                  style={{ marginRight: '45px', width: '140px' }}
                >
                  배송지 주소
                </UnderLineContent>
                <UnderLineContent>
                  {delivery.deliveryBasicAddress +
                    delivery.deliveryDetailAddress}
                </UnderLineContent>
                {complete ? (
                  ''
                ) : (
                  <ShippingAddressModal>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Button variant="contained" style={{ width: '100px' }}>
                        배송 변경
                      </Button>
                    </div>
                  </ShippingAddressModal>
                )}
              </UnderLineContentBox>
            </div>
          </div>
        </div>
      </div>
      {complete ? (
        <Button
          variant="contained"
          sx={{ width: '230px', height: '50px', marginTop: '30px' }}
          onClick={() => {
            dispatch(
              calculation(
                content.id,
                user.username,
                delivery.id,
                authKey,
                customerKey,
                reward
              )
            )
            alert('결제가 완료되었습니다.')
            navigate('/')
          }}
        >
          {[amount].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          결제하기
        </Button>
      ) : null}
    </div>
  )
}

export default PaymentInfo
