import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

//액션
export const GET_ORDER_CANCLE_LIST = "order/GET_ORDER_CANCLE_LIST";
export const GET_ORDER_SPONSER = "order/GET_ORDER_SPONSER";
export const GET_ORDER_CANCLE_PAGE = "order/GET_ORDER_CANCLE_PAGE";
export const GET_ORDER_CANCLE_COUNT = "order/GET_ORDER_CANCLE_COUNT";

const actions = createActions({
  [GET_ORDER_CANCLE_LIST]: () => {},
  [GET_ORDER_SPONSER]: () => {},
  [GET_ORDER_CANCLE_PAGE]: () => {},
  [GET_ORDER_CANCLE_COUNT]: () => {},
});

//리듀서
const orderReducer = handleActions(
  {
    [GET_ORDER_CANCLE_LIST]: (state, { payload }) => {
      return {
        ...state,
        orderCancleList: payload,
      };
    },
    [GET_ORDER_SPONSER]: (state, { payload }) => {
      return {
        ...state,
        sponserInfo: payload,
      };
    },
    [GET_ORDER_CANCLE_PAGE]: (state, { payload }) => {
      return {
        ...state,
        canclePage: payload,
      };
    },
    [GET_ORDER_CANCLE_COUNT]: (state, { payload }) => {
      return {
        ...state,
        cancleCount: payload,
      };
    },
  },
  initialState
);

export default orderReducer;
