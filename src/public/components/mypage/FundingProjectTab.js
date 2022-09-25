import styled from "styled-components";
import Button from "@mui/material/Button";
import Paging from "./Paging";
import Modal from "@mui/material/Modal";
import NestedModal from "./Modal";
import { Dataset } from "@mui/icons-material";

function FundingProject() {
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

  function createData(
    paymentState,
    projectName,
    achievements,
    paymentAt,
    orderAt,
    fundingId,
    rewardName,
    option,
    number,
    recipient,
    phone,
    address,
    paymentMethod,
    totalAmount
  ) {
    return {
      paymentState,
      projectName,
      achievements,
      paymentAt,
      orderAt,
      fundingId,
      rewardName,
      option,
      number,
      recipient,
      phone,
      address,
      paymentMethod,
      totalAmount,
    };
  }

  const datas = [
    createData(
      "결제 대기",
      "단 1초 만에 구명튜브로 변신! 수상 레저의 수호신, 에스튜브!",
      "456%",
      "2022.08.26",
      "2022.08.02",
      "108963",
      "에스튜브 1세트",
      "없음",
      "1개",
      "leisurethat",
      "010-1234-5678",
      "경기도 성남시 수정구 대왕판교로 815",
      "네이버페이 / 일시불",
      "33,000 원 (펀딩금액 33,000 원 + 추가펀딩 0원)"
    ),
    createData(
      "배송 중",
      "단 1초 만에 구명튜브로 변신! 수상 레저의 수호신, 에스튜브!",
      "456%",
      "2022.08.26",
      "2022.08.02",
      "108963",
      "에스튜브 1세트",
      "없음",
      "1개",
      "leisurethat",
      "010-1234-5678",
      "경기도 성남시 수정구 대왕판교로 815",
      "네이버페이 / 일시불",
      "33,000 원 (펀딩금액 33,000 원 + 추가펀딩 0원)"
    ),
    createData(
      "배송 완료",
      "단 1초 만에 구명튜브로 변신! 수상 레저의 수호신, 에스튜브!",
      "456%",
      "2022.08.26",
      "2022.08.02",
      "108963",
      "에스튜브 1세트",
      "없음",
      "1개",
      "leisurethat",
      "010-1234-5678",
      "경기도 성남시 수정구 대왕판교로 815",
      "네이버페이 / 일시불",
      "33,000 원 (펀딩금액 33,000 원 + 추가펀딩 0원)"
    ),
    createData(
      "후원 취소",
      "단 1초 만에 구명튜브로 변신! 수상 레저의 수호신, 에스튜브!",
      "456%",
      "2022.08.26",
      "2022.08.02",
      "108963",
      "에스튜브 1세트",
      "없음",
      "1개",
      "leisurethat",
      "010-1234-5678",
      "경기도 성남시 수정구 대왕판교로 815",
      "네이버페이 / 일시불",
      "33,000 원 (펀딩금액 33,000 원 + 추가펀딩 0원)"
    ),
  ];

  return (
    <>
      {datas.map((data, id) => (
        <FundingProjectWrap>
          <FundingProjectCont>
            <ProjectListTitle>
              펀딩한 프로젝트를
              <br />
              확인해보세요
            </ProjectListTitle>
            <ProjectRewardsWrap>
              <ProjectRewardImgDiv>
                <ProjectRewardImg
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg"
                  alt="test"
                />
              </ProjectRewardImgDiv>
              <ProjectRewardCont>
                <LeisurethatMainColorText>
                  {data.paymentState}
                </LeisurethatMainColorText>
                <div>{data.projectName}</div>
                <RewardCont>
                  <LeisurethatMainColorText>
                    {data.achievements}
                  </LeisurethatMainColorText>
                  <LeisurethatMainColorText>
                    {data.paymentAt}
                  </LeisurethatMainColorText>
                  <LeisurethatMainColorText>
                    {data.paymentState}
                  </LeisurethatMainColorText>
                  <Leisurethat70ColorText>
                    {data.orderAt} 펀딩 참여
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
                  {data.fundingId}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  선택한 리워드
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {data.rewardName}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  리워드 옵션
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {data.option}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  구매 수량
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {data.number}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  받는분/연락처
                </Leisurethat70ColorText>
                <LeisurethatblackColorText style={{ margin: "10px 100px" }}>
                  {data.recipient} / {data.phone}
                </LeisurethatblackColorText>
              </RewardCont>
              <RewardCont>
                <Leisurethat70ColorText style={{ width: "120px" }}>
                  배송지
                </Leisurethat70ColorText>
                <LeisurethatblackColorText
                  style={{ margin: "10px 100px", width: "300px" }}
                >
                  {data.address}
                </LeisurethatblackColorText>
                {data.paymentState === "결제 대기" ? (
                  <div>
                    <NestedModal
                      buttonText={"배송지 변경"}
                      buttonType={"gray"}
                    />
                  </div>
                ) : (
                  ""
                )}
                {data.paymentState === "배송 중" ||
                data.paymentState === "배송 완료" ? (
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
                  {data.paymentMethod}
                </LeisurethatblackColorText>
                {data.paymentState === "결제 대기" ? (
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
                  {data.totalAmount}
                </LeisurethatblackColorText>
              </RewardCont>
            </div>
            <div style={{ padding: "20px" }}>
              <Paging />
            </div>
          </FundingProjectCont>
        </FundingProjectWrap>
      ))}
    </>
  );
}

export default FundingProject;
