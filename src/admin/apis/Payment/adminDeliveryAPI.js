import { DELIVERY } from '../../../modules/payment/DeliveryState'

export function deliveryAPI(id) {
  const url = 'http://localhost:8001/main/' + id

  return async function (dispatch, getState) {
    const result = await fetch(url)
      .then((result) => result.json())
      .then((date) => date.results)
    dispatch({ type: DELIVERY, payload: result.orderDelivery })
  }
}
