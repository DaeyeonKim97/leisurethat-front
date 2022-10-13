import {
  GET_CALCULATE_PROJECT,
  GET_CALCULATE_REJECTREASON,
  GET_CALCULATELIST_PROJECT,
  GET_CALCULATE_PROJECT_DETAIL,
} from "../../modules/calculate/CalculateProjectModule";

import { SET_POST_SUCCESS } from "../../modules/calculate/CalculateApplicationModule";

export const callGetCalculateByProjectList = ({ projectId }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate?projectId=${projectId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log(
      "CalculateAPICalls : callGetCalculateByProjectList RESULT : ",
      result
    );

    if (result.httpStatus === 200) {
      const response = {
        actualAmount: result.results.actualAmount,
        postAmount: result.results.postAmount,
        preAmount: result.results.preAmount,
        totalAmount: result.results.totalAmount,
        deliveryCompleteCount: result.results.deliveryCompleteCount,
        deliveryOnCallCount: result.results.deliveryOnCallCount,
        deliveryOngoingCount: result.results.deliveryOngoingCount,
        totalDeliveryCount: result.results.totalDeliveryCount,
        makerName: result.results.makerName,
        projectName: result.results.projectName,
      };

      dispatch({
        type: GET_CALCULATE_PROJECT,
        payload: response,
      });

      dispatch({
        type: GET_CALCULATELIST_PROJECT,
        payload: result.results.calculateList,
      });
    } else {
      alert("조회 실패");
    }
  };
};

export const callGetCalculateRejectReasonByProject = ({ calculateId }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/${calculateId}/reject`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log(
      "CalculateAPICalls : callGetCalculateRejectReasonByProject RESULT : ",
      result
    );

    if (result.httpStatus === 200) {
      const response = result.results.rejectReason;

      dispatch({
        type: GET_CALCULATE_REJECTREASON,
        payload: response,
      });
    } else {
      alert("조회 실패");
    }
  };
};

export const callGetCalculateDetailByProject = ({ calculateId }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/${calculateId}/detail`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log(
      "CalculateAPICalls : callGetCalculateDetailByProject RESULT : ",
      result
    );

    if (result.httpStatus === 200) {
      const response = result.results.calculateDetail;

      dispatch({
        type: GET_CALCULATE_PROJECT_DETAIL,
        payload: response,
      });
    } else {
      alert("조회 실패");
    }
  };
};

export const callCalculateApplicationRegistAPI = (formData) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/application`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
      body: formData,
    }).then((response) => response.json());

    console.log(
      "CalculateAPICalls : callCalculateApplicationRegistAPI RESULT : ",
      result
    );

    if (result.httpStatus === 201) {
      const response = result.results.calculateDetail;

      dispatch({
        type: SET_POST_SUCCESS,
      });
    } else {
      alert("조회 실패");
    }
  };
};
