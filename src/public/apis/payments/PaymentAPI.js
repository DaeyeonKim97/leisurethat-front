import { PAYMENT } from '../../../modules/payment/PaymentState'
import { REWARD } from '../../../modules/payment/RewardState'
import { USER } from '../../../modules/payment/UserState'
import { DELIVERY } from '../../../modules/payment/DeliveryState'

//project 정보 불러오기
export function PaymentAPI(rewardId) {
  const paymentURL = 'http://localhost:8001/payments/' + rewardId
  return async function paymentAPI(dispatch, getState) {
    const result = await fetch(paymentURL, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then((res) => res.json())
      .then((date) => date.results)
      .catch((err) => console.log(err))
    dispatch({ type: PAYMENT, payload: result.project })
    dispatch({ type: REWARD, payload: result.reward })
    dispatch({ type: USER, payload: result.user })
    dispatch({ type: DELIVERY, payload: result.delivery })
  }
}
