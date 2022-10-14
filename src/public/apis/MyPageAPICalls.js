import {
  GET_MY_FUNDING_COUNT,
  GET_MY_FUNDING_LIST,
  GET_MY_PROJECT_LIST,
  GET_MY_PROJECT_COUNT,
} from "../../modules/mypage/MypageModule";

export const callGetMyFundingList = ({ offset = 0 } = {}) => {
  let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/user/funding`;
  if (offset && offset !== undefined) {
    requestURL += `?offset=${offset}`;
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

    console.log("CalculateAPICalls : callGetMyFundingList RESULT : ", result);

    if (result.httpStatus === 200) {
      const response = result.results.fundingList;
      const fundingCount = result.results.fundingCount;

      dispatch({
        type: GET_MY_FUNDING_LIST,
        payload: response,
      });

      dispatch({
        type: GET_MY_FUNDING_COUNT,
        payload: fundingCount,
      });
    } else {
      alert("조회 실패");
    }
  };
};

export const callGetMyProjectList = ({ offset = 0 } = {}) => {
  let requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/user/project`;

  if (offset && offset !== undefined) {
    requestURL += `?offset=${offset}`;
  }
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
      const projectCount = result.results.projectCount;
      dispatch({
        type: GET_MY_PROJECT_LIST,
        payload: response,
      });

      dispatch({ type: GET_MY_PROJECT_COUNT, payload: projectCount });
    } else {
      alert("조회 실패");
    }
  };
};
