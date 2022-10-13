
import { Button, Modal, Stack, Box } from "@mui/material";
import React from "react";

import MainFundingProject from "../../../public/components/Main/MainFundingProject";

import {
  UnderLineContent,
  UnderLineContentBox,
  UnderLineContentsBox,
} from "../../../public/components/shared";

const ProjectInfo = ({ close }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fundingImgUrl = "static/img/PublicMainFunding.png";

  const user = { name: "test", email: "user@mail.com", phone: "010-000-000" };
  const reward = {
    projectName: "프로젝트 명",
    startDate: "2020-05-05",
    endDate: "2020-05-05",
    totalAmount: "1,000,000원",
    totalPersonnel: "10명",
  };
  const fundingInfo = {
    payAmount: "5,000,000원",
    payCase: "10건",
    cardAmount: "5,000,000원",
    cardCase: "10건",
    totalCal: "1,000,000원",
  };

  const calInfo = {
    cal1st: "6,000,000",
    cal2st: "3,000,000",
    cal1Date: "2020-05-20",
    cal2Date: "-",
    totalCal: "1,000,000원",
  };

  return (
    <Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "60vh",
          overflowX: "hidden",
          overflowY: "scroll",
          width: "100%",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "60px" }}>
            <UnderLineContentsBox>프로젝트</UnderLineContentsBox>
            <MainFundingProject
              contents={"데이터 들어올 공간"}
              img={fundingImgUrl}
            />
          </div>
          <div style={{ width: "500px" }}>
            <div>
              <UnderLineContentsBox> 메이커 정보</UnderLineContentsBox>
              <div style={{ height: "160px" }}>
                <UnderLineContentBox>
                  <UnderLineContent
                    style={{ marginRight: "20px", width: "180px" }}

                  >
                    이름
                  </UnderLineContent>
                  <UnderLineContent>{user.name}</UnderLineContent>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <UnderLineContent
                    style={{ marginRight: "20px", width: "180px" }}

                  >
                    이메일
                  </UnderLineContent>
                  <UnderLineContent>{user.email}</UnderLineContent>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <UnderLineContent
                    style={{ marginRight: "20px", width: "180px" }}

                  >
                    휴대폰 번호
                  </UnderLineContent>
                  <UnderLineContent>{user.phone}</UnderLineContent>
                </UnderLineContentBox>
              </div>
            </div>
            <div>
              <UnderLineContentsBox>리워드 정보</UnderLineContentsBox>
              <div style={{ height: "230px" }}>
                <UnderLineContentBox>
                  <UnderLineContent
                    style={{ marginRight: "20px", width: "50%" }}

                  >
                    프로젝트 명
                  </UnderLineContent>
                  <UnderLineContent>{reward.projectName}</UnderLineContent>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <UnderLineContent
                    style={{ marginRight: "20px", width: "50%" }}

                  >
                    시작일
                  </UnderLineContent>
                  <UnderLineContent>{reward.startDate}</UnderLineContent>
                  <UnderLineContent
                    style={{ marginRight: "20px", width: "50%" }}

                  >
                    종료일
                  </UnderLineContent>
                  <UnderLineContent>{reward.endDate}</UnderLineContent>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <UnderLineContent style={{ width: "50%" }}>
                    모집 금액
                  </UnderLineContent>
                  <UnderLineContent style={{ width: "50%" }}>
                    {reward.totalAmount}
                  </UnderLineContent>
                  <UnderLineContent
                    style={{ marginRight: "20px", width: "50%" }}
                  >
                    참여 인원
                  </UnderLineContent>
                  <UnderLineContent style={{ width: "50%" }}>

                    {reward.totalPersonnel}
                  </UnderLineContent>
                </UnderLineContentBox>
              </div>
            </div>
          </div>
        </div>

        <Stack direction="row" spacing={1} sx={{ fontSize: "15px" }}>
          <div style={{ width: "400px" }}>
            <UnderLineContentsBox>펀딩 투자 내역</UnderLineContentsBox>
            <div style={{ height: "230px" }}>
              <UnderLineContentBox>
                <UnderLineContent style={{ marginRight: "20px", width: "50%" }}>
                  Pay 결제
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>
                  {fundingInfo.payAmount}
                </UnderLineContent>
                <UnderLineContent style={{ marginRight: "20px", width: "50%" }}>

                  {fundingInfo.payCase}
                </UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent sx={{ width: "50%" }}>
                  카드 결제
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>
                  {fundingInfo.cardAmount}
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>

                  {fundingInfo.cardCase}
                </UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent style={{ marginRight: "20px", width: "50%" }}>
                  총 펀딩 금액
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>

                  {fundingInfo.totalCal}
                </UnderLineContent>
              </UnderLineContentBox>
            </div>
          </div>
          <div style={{ width: "400px" }}>
            <UnderLineContentsBox>정산 내역</UnderLineContentsBox>
            <div style={{ height: "230px" }}>
              <UnderLineContentBox>
                <UnderLineContent sx={{ width: "50%" }}>
                  1차 정산
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>
                  {calInfo.cal1st}
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>
                  정산일
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%", fontSize: "12px" }}>

                  {calInfo.cal1Date}
                </UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent sx={{ width: "50%" }}>
                  2차 정산
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>
                  {calInfo.cal2st}
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>
                  정산일
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>

                  {calInfo.cal2Date}
                </UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent style={{ marginRight: "20px", width: "50%" }}>
                  총 정산 금액
                </UnderLineContent>
                <UnderLineContent sx={{ width: "50%" }}>

                  {calInfo.totalCal}
                </UnderLineContent>
              </UnderLineContentBox>
            </div>
          </div>
        </Stack>
      </div>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ width: "230px", height: "50px", marginTop: "30px" }}

          onClick={close}
        >
          확인 완료
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectInfo;

