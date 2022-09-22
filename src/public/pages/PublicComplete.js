import React from 'react'
import PaymentInfo from '../components/Payment/PaymentInfo'

import { BaseBox } from '../components/shared'

const PublicComplete = () => {
  return (
    <BaseBox>
      <PaymentInfo complete={true} />
    </BaseBox>
  )
}

export default PublicComplete
