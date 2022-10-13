import {
  GET_CALCULATE_LIST,
  GET_CALCULATE_PROJECT,
  GET_MAKERINFO,
  GET_CALCULATE_APPLICATION_LIST,
  GET_CALCULATE_DETAIL,
  GET_CALCULATE_REJECT,
} from "../../modules/calculate/CalculateModule";

import { GET_CALCULATE_REJECT_MODIFY } from "../../modules/calculate/CalculateRejectModifyModule";

import { SET_JUDGE_SUCCESS } from "../../modules/calculate/CalculateJudgeModule";

import { SET_PUT_SUCCESS } from "../../modules/calculate/CalculateRejectModifyModule";

export const callGetCalculateList = ({
  projectId,
  offset,
  projectName,
  makerId,
  calculateStatus,
}) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/list`;

  if (offset) {
    requestURL += `&offset=${offset}`;
  }

  if (projectName) {
    requestURL += `&projectName=${projectName}`;
  }

  if (makerId) {
    requestURL += `&makerId=${makerId}`;
  }

  if (calculateStatus) {
    requestURL += `&calculateStatus=${calculateStatus}`;
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

    console.log(
      "CalculateAPICalls : callGetCalculateListAPI RESULT : ",
      result
    );

    const response = result.results.calculateList;

    dispatch({
      type: GET_CALCULATE_LIST,
      payload: response,
    });
  };
};

export const callGetCalculateMakerInfo = ({ calculateId }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/${calculateId}/maker`;

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
      "CalculateAPICalls : callGetCalculateMakerInfo RESULT : ",
      result
    );

    const response = result.results.makerInfo;

    dispatch({
      type: GET_MAKERINFO,
      payload: response,
    });
  };
};

export const callGetCalculateProjectInfo = ({ calculateId }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/${calculateId}/project`;

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
      "CalculateAPICalls : callGetCalculateProjectInfo RESULT : ",
      result
    );

    const response = result.results.projectInfo;

    dispatch({
      type: GET_CALCULATE_PROJECT,
      payload: response,
    });
  };
};

export const callGetCalculateApplicationList = ({ projectId }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/project/${projectId}`;

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
      "CalculateAPICalls : callGetCalculateApplicationList RESULT : ",
      result
    );

    const response = result.results.calculateList;

    dispatch({
      type: GET_CALCULATE_APPLICATION_LIST,
      payload: response,
    });
  };
};

export const callGetCalculateDetail = ({ calculateId }) => {
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

    console.log("CalculateAPICalls : callGetCalculateDetail RESULT : ", result);

    const response = result.results.calculateDetail;

    dispatch({
      type: GET_CALCULATE_DETAIL,
      payload: response,
    });
  };
};

export const callGetCalculateRejectReason = ({ calculateId }) => {
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

    console.log("CalculateAPICalls : callGetCalculateDetail RESULT : ", result);

    const response = result.results.rejectReason;

    dispatch({
      type: GET_CALCULATE_REJECT,
      payload: response,
    });

    dispatch({
      type: GET_CALCULATE_REJECT_MODIFY,
      payload: response,
    });
  };
};

export const callCalculateJudgeRegistAPI = (formData) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/judge`;

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
      "CalculateAPICalls : callCalculateJudgeRegistAPI RESULT : ",
      result
    );

    if (result.httpStatus === 201) {
      dispatch({
        type: SET_JUDGE_SUCCESS,
      });
    } else {
      alert("조회 실패");
    }
  };
};

export const callCalculateJudgeModifyAPI = (formData) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/calculate/judge/reject`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PUT",
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
      body: formData,
    }).then((response) => response.json());

    console.log(
      "CalculateAPICalls : callCalculateJudgeModifyAPI RESULT : ",
      result
    );

    if (result.httpStatus === 200) {
      dispatch({
        type: SET_PUT_SUCCESS,
      });
    } else {
      alert("조회 실패");
    }
  };
};
