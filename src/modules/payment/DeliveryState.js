import { handleActions } from 'redux-actions'

const deliveryInit = {}

export const DELIVERY = 'DELIVERY'

const deliveryHandler = handleActions(
  {
    [DELIVERY]: (state, { payload }) => {
      return payload
    },
  },
  deliveryInit
)

export default deliveryHandler
