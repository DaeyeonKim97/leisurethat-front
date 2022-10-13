import {
  GET_ORDER_CANCLE_LIST,
  GET_ORDER_SPONSER,
  GET_ORDER_CANCLE_PAGE,
  GET_ORDER_CANCLE_COUNT,
} from "../../modules/cancle/OrderModule";

export const callGetOrderCancleList = ({
  projectId,
  sponserName,
  id,
  offset,
}) => {
  let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/order/cancled?projectId=${projectId}`;

  if (sponserName !== undefined && sponserName) {
    requestURL += `&sponserName=${sponserName}`;
  }

  if (id && id !== undefined) {
    requestURL += `&id=${id}`;
  }

  if (offset && offset !== undefined) {
    requestURL += `&offset=${offset}`;
  }

  console.log(requestURL);
  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log("OrderAPICalls : callGetOrderCancleList RESULT : ", result);

    const response = result.results.cancleList;
    const page = { page: result.results.pageCount };
    const count = { count: result.results.count };
    dispatch({
      type: GET_ORDER_CANCLE_LIST,
      payload: response,
    });

    dispatch({
      type: GET_ORDER_CANCLE_PAGE,
      payload: page,
    });

    dispatch({
      type: GET_ORDER_CANCLE_COUNT,
      payload: count,
    });
  };
};

export const callGetSponserInfo = ({ orderId }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/order/${orderId}/user`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log("OrderAPICalls : callGetSponserInfo RESULT : ", result);

    if (result.httpStatus === 200) {
      const response = result.results.userInfo;

      dispatch({
        type: GET_ORDER_SPONSER,
        payload: response,
      });
    } else {
      alert("조회 실패");
    }
  };
};
