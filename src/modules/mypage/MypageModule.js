import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {
  fundingOffset: 1,
  projectOffset: 1,
};

//액션
export const GET_MY_FUNDING_LIST = "user/GET_MY_FUNDING_LIST";
export const GET_MY_PROJECT_LIST = "user/GET_MY_PROJECT_LIST";
export const GET_MY_FUNDING_COUNT = "user/GET_MY_FUNDING_COUNT";
export const GET_MY_PROJECT_COUNT = "user/GET_MY_PROJECT_COUNT";
export const GET_FUNDING_OFFSET = "user/FUNDING_OFFSET";
export const INIT_OFFSET = "user/INIT_OFFSET";
export const GET_PROJECT_OFFSET = "user/PROJECT_OFFSET";

const actions = createActions({
  [GET_MY_FUNDING_LIST]: () => {},
  [GET_MY_PROJECT_LIST]: () => {},
  [GET_MY_FUNDING_COUNT]: () => {},
  [GET_MY_PROJECT_COUNT]: () => {},
  [GET_FUNDING_OFFSET]: () => {},
  [GET_PROJECT_OFFSET]: () => {},
  [INIT_OFFSET]: () => {},
});

//리듀서
const mypageReducer = handleActions(
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
    [GET_MY_FUNDING_COUNT]: (state, { payload }) => {
      return {
        ...state,
        fundingCount: payload,
      };
    },
    [GET_MY_PROJECT_COUNT]: (state, { payload }) => {
      return {
        ...state,
        projectCount: payload,
      };
    },
    [GET_FUNDING_OFFSET]: (state, { payload }) => {
      return {
        ...state,
        fundingOffset: payload,
      };
    },
    [GET_PROJECT_OFFSET]: (state, { payload }) => {
      return {
        ...state,
        projectOffset: payload,
      };
    },
    [INIT_OFFSET]: (state, { payload }) => {
      return {
        ...state,
        projectOffset: 1,
        fundingOffset: 1,
      };
    },
  },
  initialState
);

export default mypageReducer;
