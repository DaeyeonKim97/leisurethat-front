import styled from 'styled-components'
import {
  BaseBox,
  UnderLineContent,
  UnderLineContentBox,
  UnderLineContentsBox,
} from '../components/shared'
import Comma from '../lib/Comma'
import { useEffect } from 'react'
import { Button } from '@mui/material'
import PaymentInfo from '../components/Payment/PaymentInfo'
import { useNavigate } from 'react-router-dom'
import { PaymentAPI } from '../apis/payments/PaymentAPI'
import qs from 'query-string'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { TossAPI } from '../apis/payments/TossAPI'

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

const PublicPayment = () => {
  const dispatch = useDispatch()

  const searchParams = useLocation().search
  const params = qs.parse(searchParams)

  const content = useSelector((state) => state.paymentProjectHandler)
  const reward = useSelector((state) => state.rewardHandler)
  let totlaPrice = reward.price + reward.rewardFee
  useEffect(() => {
    dispatch(PaymentAPI(params.rewardId))
  }, [])
  return (
    <BaseBox
      style={{
        height: '1100px',
      }}
    >
      <div>
        <PaymentInfo complete={false} content={content} />
        <div>
          <UnderLineContentsBox>결제 정보</UnderLineContentsBox>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100%', paddingRight: '30px' }}>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '10px', width: '180px' }}
                >
                  리워드 제목
                </UnderLineContent>
                <UnderLineContent>{reward.title}</UnderLineContent>
              </UnderLineContentBox>{' '}
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  리워드 가격
                </UnderLineContent>
                <UnderLineContent>
                  {[reward.price]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </UnderLineContent>
              </UnderLineContentBox>{' '}
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  배송비
                </UnderLineContent>
                <UnderLineContent>
                  {[reward.rewardFee]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </UnderLineContent>
              </UnderLineContentBox>{' '}
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  총 펀딩 금액
                </UnderLineContent>
                <UnderLineContent>
                  {[totlaPrice]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </UnderLineContent>
              </UnderLineContentBox>
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
              onClick={() => {
                TossAPI(params.rewardId)
              }}
            >
              {/* {[totlaPrice].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 */}
              예약하기
            </Button>
          </div>
        </div>
      </div>
    </BaseBox>
  )
}

export default PublicPayment
