import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

//액션
export const GET_MY_FUNDING_LIST = "user/GET_MY_FUNDING_LIST";
export const GET_MY_PROJECT_LIST = "user/GET_MY_PROJECT_LIST";

const actions = createActions({
  [GET_MY_FUNDING_LIST]: () => {},
  [GET_MY_PROJECT_LIST]: () => {},
});

//리듀서
const orderReducer = handleActions(
  {
    [GET_MY_FUNDING_LIST]: (state, { payload }) => {
      return {
        ...state,
        fundingList: payload,
      };
    },
    [GET_MY_PROJECT_LIST]: (state, { payload }) => {
      return {
        ...state,
        projectList: payload,
      };
    },
  },
  initialState
);

export default orderReducer;
