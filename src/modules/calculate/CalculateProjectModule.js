import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

//액션
export const GET_CALCULATE_PROJECT = "calcaulte/GET_CALCULATE_PROJECT";
export const GET_CALCULATE_REJECTREASON =
  "calcaulte/GET_CALCULATE_REJECTREASON";
export const GET_CALCULATELIST_PROJECT = "calculate/GET_CALCULATELIST_PROJECT";
export const GET_CALCULATE_PROJECT_DETAIL =
  "calcaulte/GET_CALCULATE_PROJECT_DETAIL";

const actions = createActions({
  [GET_CALCULATE_PROJECT]: () => {},
  [GET_CALCULATE_REJECTREASON]: () => {},
  [GET_CALCULATELIST_PROJECT]: () => {},
  [GET_CALCULATE_PROJECT_DETAIL]: () => {},
});

//리듀서
const calculateProjectReducer = handleActions(
  {
    [GET_CALCULATE_PROJECT]: (state, { payload }) => {
      return {
        ...state,
        calculateInfo: payload,
      };
    },
    [GET_CALCULATE_REJECTREASON]: (state, { payload }) => {
      return {
        ...state,
        rejectReason: payload,
      };
    },
    [GET_CALCULATELIST_PROJECT]: (state, { payload }) => {
      return {
        ...state,
        calculateList: payload,
      };
    },
    [GET_CALCULATE_PROJECT_DETAIL]: (state, { payload }) => {
      return {
        ...state,
        calculateDetail: payload,
      };
    },
  },
  initialState
);

export default calculateProjectReducer;
