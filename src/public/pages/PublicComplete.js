import React from 'react'
import PaymentInfo from '../components/Payment/PaymentInfo'
import { PaymentAPI } from '../apis/payments/PaymentAPI'
import qs from 'query-string'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { BaseBox } from '../components/shared'
import { useEffect } from 'react'

const PublicComplete = () => {
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
    <BaseBox>
      <PaymentInfo
        complete={true}
        content={content}
        amount={totlaPrice}
        authKey={params.authKey}
        customerKey={params.customerKey}
        reward={reward.id}
      />
    </BaseBox>
  )
}

export default PublicComplete
