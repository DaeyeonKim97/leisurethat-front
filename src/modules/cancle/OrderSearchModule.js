import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {
  id: "",
  sponserName: "",
  offset: 1,
};

//액션
export const GET_SEARCH_ORDERCANCLE = "order/GET_SEARCH_ORDERCANCLE";
export const GET_OFFSET_ORDERCANCLE = "order/GET_OFFSET_ORDERCANCLE";
export const GET_OFFSET_RESET = "order/GET_OFFSET_RESET";

const actions = createActions({
  [GET_SEARCH_ORDERCANCLE]: () => {},
  [GET_OFFSET_ORDERCANCLE]: () => {},
  [GET_OFFSET_RESET]: () => {},
});

/* 리듀서 */
const orderCancleSearchReducer = handleActions(
  {
    [GET_SEARCH_ORDERCANCLE]: (state, { payload }) => {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    },
    [GET_OFFSET_ORDERCANCLE]: (state, { payload }) => {
      return {
        ...state,
        offset: payload,
      };
    },
    [GET_OFFSET_RESET]: (state, { payload }) => {
      return {
        ...state,
        offset: 1,
      };
    },
  },
  initialState
);

export default orderCancleSearchReducer;
