import { handleActions } from 'redux-actions'

const ProjectList = [{}]

export const PROJECT = 'MAINPROJECT'

const mainProjectHandler = handleActions(
  {
    [PROJECT]: (state, { payload }) => {
      return payload
    },
  },
  ProjectList
)

export default mainProjectHandler
