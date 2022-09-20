import React from 'react'
import BuyingInfo from '../components/Buying/BuyingInfo'

import { BaseBox } from '../components/shared'

const PublicBuyComplete = () => {
  return (
    <BaseBox>
      <BuyingInfo complete={true} />
    </BaseBox>
  )
}

export default PublicBuyComplete
