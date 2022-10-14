import { useDispatch } from "react-redux";
import { useEffect } from "react";

import styled from "styled-components";

import MypageTab from "../components/mypage/MypageTab";
import {
  callGetMyFundingList,
  callGetMyProjectList,
} from "../apis/MyPageAPICalls";

import { INIT_OFFSET } from "../../modules/mypage/MypageModule";

function Mypage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callGetMyFundingList());
    dispatch(callGetMyProjectList());
    dispatch({ type: INIT_OFFSET });
  }, []);
  const Title = styled.div`
    text-align: center;
    padding: 2%;
    border-bottom: 1px solid #d9d9d9; ;
  `;

  return (
    <>
      <Title>
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }} align="center">
          마이페이지
        </h1>
      </Title>
      <MypageTab />
    </>
  );
}

export default Mypage;
