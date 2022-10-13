import { ADMINPAYINIT } from '../../../modules/payment/AdminPaymentState'

export function adminPayments() {
  const url = 'http://localhost:8001/payments'
  return async function (dispatch, getState) {
    const result = await fetch(url, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    })
      .then((res) => res.json())
      .then((date) => date.results)
    dispatch({ type: ADMINPAYINIT, payload: result.payments })
  }
}
