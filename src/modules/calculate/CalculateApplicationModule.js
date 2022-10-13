import { createActions, handleActions } from 'redux-actions'

/* 초기값 */
const initialState = {
  projectId: 0,
  calculateDivision: '',
  calculateStatus: '',
  totalCalAmount: 0,
  preCalAmount: 0,
  title: ' ',
  content: ' ',
  preCalApplicationFile: null,
  postSuccess: false,
}

//액션
export const SET_CALCULATE_APPLICATION = 'calcaulte/SET_CALCULATE_APPLICATION'
export const INIT_CALCULATE_APPLICATION = 'calcaulte/INIT_CALCULATE_APPLICATION'
export const SET_FILE = 'calcaulte/SET_FILE'
export const INIT_FILE = 'calcaulte/INIT_FILE'
export const SET_POST_SUCCESS = 'calcaulte/SET_POST_SUCCESS'
export const INIT_POST_SUCCESS = 'calcaulte/INIT_POST_SUCCESS'

const actions = createActions({
  [SET_CALCULATE_APPLICATION]: () => {},
  [INIT_CALCULATE_APPLICATION]: () => {},
  [SET_FILE]: () => {},
  [INIT_FILE]: () => {},
  [SET_POST_SUCCESS]: () => {},
  [INIT_POST_SUCCESS]: () => {},
})

//리듀서
const calculateApplicationReducer = handleActions(
  {
    [SET_CALCULATE_APPLICATION]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [INIT_CALCULATE_APPLICATION]: (state, { payload }) => {
      return initialState
    },
    [SET_FILE]: (state, { payload }) => {
      return {
        ...state,
        preCalApplicationFile: payload,
      }
    },
    [INIT_FILE]: (state, { payload }) => {
      return {
        ...state,
        preCalApplicationFile: null,
      }
    },
    [SET_POST_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        postSuccess: true,
      }
    },
    [INIT_POST_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        postSuccess: '',
      }
    },
  },
  initialState
)

export default calculateApplicationReducer
