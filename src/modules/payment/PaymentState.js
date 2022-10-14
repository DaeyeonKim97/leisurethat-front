import { handleActions } from 'redux-actions'

const PaymentList = [{}]

export const PAYMENT = 'PAYMENT'

const paymentProjectHandler = handleActions(
  {
    [PAYMENT]: (state, { payload }) => {
      return payload
    },
  },
  PaymentList
)

export default paymentProjectHandler
