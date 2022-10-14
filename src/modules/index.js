import { combineReducers } from 'redux'
import calculateReducer from './calculate/CalculateModule'
import calculateProjectReducer from './calculate/CalculateProjectModule'
import orderReducer from './cancle/OrderModule'
import orderCancleSearchReducer from './cancle/OrderSearchModule'
import calculateApplicationReducer from './calculate/CalculateApplicationModule'
import calculateJudgeReducer from './calculate/CalculateJudgeModule'
import calculateRejectModifyReducer from './calculate/CalculateRejectModifyModule'
import mypageReducer from './mypage/MypageModule'
import adminPaymentHandler from './payment/AdminPaymentState'
import deliveryHandler from './payment/DeliveryState'
import rewardHandler from './payment/RewardState'
import paymentProjectHandler from './payment/PaymentState'
import userHandler from './payment/UserState'
const rootReducer = combineReducers({
  calculateReducer,
  orderReducer,
  calculateProjectReducer,
  orderCancleSearchReducer,
  calculateApplicationReducer,
  calculateJudgeReducer,
  calculateRejectModifyReducer,
  mypageReducer,
  adminPaymentHandler,
  deliveryHandler,
  rewardHandler,
  paymentProjectHandler,
  userHandler,
})

export default rootReducer
