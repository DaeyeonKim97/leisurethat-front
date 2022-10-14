import { handleActions } from 'redux-actions'

const REWARDSTATE = [{}]

export const REWARD = 'REWARD'

const rewardHandler = handleActions(
  {
    [REWARD]: (state, { payload }) => {
      return payload
    },
  },
  REWARDSTATE
)

export default rewardHandler
