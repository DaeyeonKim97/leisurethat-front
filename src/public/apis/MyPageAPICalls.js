import {
  GET_MY_FUNDING_LIST,
  GET_MY_PROJECT_LIST,
} from "../../modules/mypage/MypageModule";

export const callGetMyFundingList = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/user/funding`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log("CalculateAPICalls : callGetMyFundingList RESULT : ", result);

    if (result.httpStatus === 200) {
      const response = result.results.fundingList;

      console.log(response);
      dispatch({
        type: GET_MY_FUNDING_LIST,
        payload: response,
      });
    } else {
      alert("조회 실패");
    }
  };
};

export const callGetMyProjectList = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/user/project`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log("CalculateAPICalls : callGetMyProjectList RESULT : ", result);

    if (result.httpStatus === 200) {
      const response = result.results.makeProjectList;

      dispatch({
        type: GET_MY_PROJECT_LIST,
        payload: response,
      });
    } else {
      alert("조회 실패");
    }
  };
};
