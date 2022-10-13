import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {
  postSuccess: false,
};

export const SET_CALCULATE_JUDGE = "calculate/SET_CALCULATE_JUDGE";
export const INIT_CALCULATE_JUDGE = "calculate/INIT_CALCULATE_JUDGE";
export const SET_CALCULATE_REJECT_REASON =
  "calculate/SET_CALCULATE_REJECT_REASON";
export const SET_JUDGE_SUCCESS = "calculate/SET_JUDGE_SUCCESS";
export const INIT_JUDGE_SUCCESS = "calculate/INIT_JUDGE_SUCCESS";

const actions = createActions({
  [SET_CALCULATE_JUDGE]: () => {},
  [INIT_CALCULATE_JUDGE]: () => {},
  [SET_CALCULATE_REJECT_REASON]: () => {},
  [SET_JUDGE_SUCCESS]: () => {},
  [INIT_JUDGE_SUCCESS]: () => {},
});

// 리듀서
const calculateJudgeReducer = handleActions(
  {
    [SET_CALCULATE_JUDGE]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    [INIT_CALCULATE_JUDGE]: (state, { payload }) => {
      return initialState;
    },

    [SET_CALCULATE_REJECT_REASON]: (state, { payload }) => {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    },
    [SET_JUDGE_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        postSuccess: true,
      };
    },
    [INIT_JUDGE_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        postSuccess: "",
      };
    },
  },
  initialState
);

export default calculateJudgeReducer;
