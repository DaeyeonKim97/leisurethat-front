import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

//액션
export const GET_CALCULATE_LIST = "calcaulte/GET_CALCULATE_LIST";
export const GET_MAKERINFO = "calculate/GET_MAKERINFO";
export const GET_CALCULATE_PROJECT = "calculate/GET_CALCULATE_PROJECT";
export const GET_CALCULATE_APPLICATION_LIST =
  "calculate/GET_CALCULATE_APPLICATION_LIST";
export const GET_CALCULATE_DETAIL = "calculate/GET_CALCULATE_DETAIL";
export const GET_CALCULATE_REJECT = "calculate/GET_CALCULATE_REJECT";
export const INIT_CALCULATE_REJECT = "calculate/INIT_CALCULATE_REJECT";

const actions = createActions({
  [GET_CALCULATE_LIST]: () => {},
  [GET_MAKERINFO]: () => {},
  [GET_CALCULATE_PROJECT]: () => {},
  [GET_CALCULATE_APPLICATION_LIST]: () => {},
  [GET_CALCULATE_DETAIL]: () => {},
  [GET_CALCULATE_REJECT]: () => {},
  [INIT_CALCULATE_REJECT]: () => {},
});

//리듀서
const calculateReducer = handleActions(
  {
    [GET_CALCULATE_LIST]: (state, { payload }) => {
      return {
        ...state,
        calculateList: payload,
      };
    },
    [GET_MAKERINFO]: (state, { payload }) => {
      return {
        ...state,
        makerInfo: payload,
      };
    },
    [GET_CALCULATE_PROJECT]: (state, { payload }) => {
      return {
        ...state,
        projectInfo: payload,
      };
    },
    [GET_CALCULATE_APPLICATION_LIST]: (state, { payload }) => {
      return {
        ...state,
        calculateApplicationList: payload,
      };
    },
    [GET_CALCULATE_DETAIL]: (state, { payload }) => {
      return {
        ...state,
        calculateDetail: payload,
      };
    },
    [GET_CALCULATE_REJECT]: (state, { payload }) => {
      return {
        ...state,
        rejectReason: payload,
      };
    },
    [INIT_CALCULATE_REJECT]: (state, { payload }) => {
      return initialState;
    },
  },
  initialState
);

export default calculateReducer;
