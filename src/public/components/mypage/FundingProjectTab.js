import styled from "styled-components";
import Button from "@mui/material/Button";
import Paging from "./Paging";
import Modal from "@mui/material/Modal";
import NestedModal from "./Modal";
import { Dataset } from "@mui/icons-material";
import { useSelector } from "react-redux";

function FundingProject() {
  const results = useSelector((state) => state.mypageReducer);
  const fundingList = results.fundingList;

  console.log(fundingList);
  const FundingProjectWrap = styled.div`
    display: flex;
    justify-content: center;
  `;

  const FundingProjectCont = styled.div`
    width: 60%;
  `;

  const ProjectListTitle = styled.div`
    padding: 3%;
    font-size: 1em;
  `;

  const ProjectRewardsWrap = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 10px;
    border 1px solid #6297BA;
    height:200px;
  `;

  const ProjectRewardImgDiv = styled.div`
    width: 30%;
  `;

  const ProjectRewardImg = styled.img`
    padding: 10%;
    width: 200px;
    height: 200px;
    border-radius: 10%;
  `;

  const ProjectRewardCont = styled.div`
    width: 70%;
    padding: 5% 0;
  `;

  const RewardCont = styled.div`
    display: flex;
  `;

  const LeisurethatMainColorText = styled.div`
    color: #00aeef;
    margin: 10px 15px 10px 0;
  `;

  const Leisurethat70ColorText = styled.div`
    color: #707070;
    margin: 10px 0;
  `;

  const LeisurethatblackColorText = styled.div`
    color: #000000;
    margin: 10px 0;
  `;

  return (
    <>
      {fundingList && fundingList.projectName && (
        <FundingProjectWrap>
          <FundingProjectCont>
            <ProjectListTitle>
              펀딩한 프로젝트를
              <br />
              확인해보세요
            </ProjectListTitle>
            <ProjectRewardsWrap>
              <ProjectRewardImgDiv>
                <ProjectRewardImg src={fundingList.projectImg} alt="test" />
              </ProjectRewardImgDiv>
              <ProjectRewardCont>
                <LeisurethatMainColorText>
                  {fundingList.paymentStatus}
                </LeisurethatMainColorText>
                <div>{fundingList.projectName}</div>
                <RewardCont>
                  <LeisurethatMainColorText>
                    {fundingList.achievement}
                  </LeisurethatMainColorText>
                  <LeisurethatMainColorText>
                    {fundingList.projectEndDate}
                  </LeisurethatMainColorText>
                  <LeisurethatMainColorText>
                    {fundingList.paymentStatus}
                  </LeisurethatMainColorText>
                  <Leisurethat70ColorText>
                    {fundingList.orderDate} 펀딩 참여
                  </Leisurethat70ColorText>
                </RewardCont>
              </ProjectRewardCont>
            </ProjectRewardsWrap>
            <div style={{ marginTop: "50px" }}>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  펀딩번호
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {fundingList.orderId}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  선택한 리워드
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {fundingList.rewardName}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  리워드 옵션
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {fundingList.rewardOption ? fundingList.rewardOption : "없음"}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  구매 수량
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {fundingList.rewardAmount}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  받는분/연락처
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {fundingList.receiver} / {fundingList.receiverPhone}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  배송지
                </Leisurethat70ColorText>
                <LeisurethatblackColorText
                  style={{ margin: "10px 100px", width: "300px" }}
                >
                  {fundingList.basicAddress} {" " + fundingList.detailAddress}
                </LeisurethatblackColorText>
                {fundingList.paymentStatus === "결제 대기" ? (
                  <div>
                    <NestedModal
                      buttonText={"배송지 변경"}
                      buttonType={"gray"}
                    />
                  </div>
                ) : (
                  ""
                )}
                {fundingList.paymentStatus === "배송 중" ||
                fundingList.paymentStatus === "배송 완료" ? (
                  <div>
                    <NestedModal buttonText={"배송 조회"} buttonType={"gray"} />
                  </div>
                ) : (
                  ""
                )}
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  결제수단
                </Leisurethat70ColorText>
                <LeisurethatblackColorText
                  style={{ margin: "10px 100px", width: "300px" }}
                >
                  {fundingList.paymentDivision}
                </LeisurethatblackColorText>
                {fundingList.paymentStatus === "결제 대기" ? (
                  <div>
                    <NestedModal buttonText={"펀딩 취소"} modalType={"one"} />
                  </div>
                ) : (
                  ""
                )}
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  총 결제금액
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {fundingList.paymentPrice}
                </LeisurethatblackColorText>
              </RewardCont>
            </div>
            <div style={{ padding: "20px" }}>
              <Paging />
            </div>
          </FundingProjectCont>
        </FundingProjectWrap>
      )}
    </>
  );
}

export default FundingProject;
