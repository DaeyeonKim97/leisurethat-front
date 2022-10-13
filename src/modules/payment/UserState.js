import { handleActions } from 'redux-actions'

const userInit = {}

export const USER = 'USER'

const userHandler = handleActions(
  {
    [USER]: (state, { payload }) => {
      return payload
    },
  },
  userInit
)

export default userHandler
