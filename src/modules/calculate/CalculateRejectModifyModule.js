import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {
  putSuccess: false,
};

//액션
export const GET_CALCULATE_REJECT_MODIFY =
  "calcaulte/GET_CALCULATE_REJECT_MODIFY";
export const SET_CALCULATE_REJECT_REASON_MODIFY =
  "calcaulte/SET_CALCULATE_REJECT_REASON_MODIFY";
export const INIT_CALCULATE_REJECT_REASON_MODIFY =
  "calculate/INIT_CALCULATE_REJECT_REASON_MODIFY";
export const SET_PUT_SUCCESS = "calcaulte/SET_PUT_SUCCESS";
export const INIT_PUT_SUCCESS = "calcaulte/INIT_PUT_SUCCESS";

const actions = createActions({
  [GET_CALCULATE_REJECT_MODIFY]: () => {},
  [SET_CALCULATE_REJECT_REASON_MODIFY]: () => {},
  [INIT_CALCULATE_REJECT_REASON_MODIFY]: () => {},
  [SET_PUT_SUCCESS]: () => {},
  [INIT_PUT_SUCCESS]: () => {},
});

//리듀서
const calculateRejectModifyReducer = handleActions(
  {
    [GET_CALCULATE_REJECT_MODIFY]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    [SET_CALCULATE_REJECT_REASON_MODIFY]: (state, { payload }) => {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    },
    [INIT_CALCULATE_REJECT_REASON_MODIFY]: (state, { payload }) => {
      return initialState;
    },
    [SET_PUT_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        putSuccess: true,
      };
    },
    [INIT_PUT_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        putSuccess: "",
      };
    },
  },
  initialState
);

export default calculateRejectModifyReducer;
