import { handleActions } from 'redux-actions'

const AdminPaymentInit = [{}]

export const ADMINPAYINIT = 'ADMINPAYMENT'

const adminPaymentHandler = handleActions(
  {
    [ADMINPAYINIT]: (state, { payload }) => {
      return payload
    },
  },
  AdminPaymentInit
)

export default adminPaymentHandler
