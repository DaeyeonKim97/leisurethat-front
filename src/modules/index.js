import { combineReducers } from 'redux'
import mainProjectHandler from './main/MainState'
import paymentProjectHandler from './payment/PaymentState'
import rewardHandler from './payment/RewardState'
import userHandler from './payment/UserState'
import deliveryHandler from './payment/DeliveryState'
import adminPaymentHandler from './payment/AdminPaymentState'

const rootReducer = combineReducers({
  mainProjectHandler,
  paymentProjectHandler,
  rewardHandler,
  userHandler,
  deliveryHandler,
  adminPaymentHandler,
})

export default rootReducer
