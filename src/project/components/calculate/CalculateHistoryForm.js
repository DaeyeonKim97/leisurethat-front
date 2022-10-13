import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import styled from "styled-components";

import { callGetCalculateDetailByProject } from "../../apis/CalculateAPICalls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function CalculateHistoryForm({ round, currentState, close, calculateId }) {
  const ProjectLabel = styled.div`
    font-size: 24px;
    font-weight: bolder;
  `;

  const dispatch = useDispatch();
  const results = useSelector((state) => state.calculateProjectReducer);
  const calculateDetail = results.calculateDetail;

  useEffect(() => {
    dispatch(callGetCalculateDetailByProject({ calculateId }));
  }, []);

  function createData(
    projectName,
    makerID,
    category,
    files,
    rejectContent,
    calculateAmount,
    completionDel,
    shipping,
    waitingDel,
    totalDel
  ) {
    return {
      projectName,
      makerID,
      category,
      files,
      rejectContent,
      calculateAmount,
      completionDel,
      shipping,
      waitingDel,
      totalDel,
    };
  }

  const data = createData(
    "LEISURETHAT SAMPLE PROJECT 01",
    "leisurethat2022",
    "leisurethat sample category",
    [
      "LEISURETHAT_SAMPLE_PROJECT_01_video01.mp4",
      "LEISURETHAT_SAMPLE_PROJECT_01_image01.png",
      "LEISURETHAT_SAMPLE_PROJECT_01_image02.png",
    ],
    "반려사유 반려사유 반려사유 반려사유 반려사유 반려사유`~~~~",
    "10,000,000",
    100,
    0,
    0,
    100
  );

  return (
    <>
      <header style={{ color: "#00AEEF", fontSize: 36, fontWeight: "bold" }}>
        {round} 정산 신청 내역
      </header>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "2%" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ width: "100px" }}
        >
          <FormatAlignLeftIcon sx={{ color: "#757575" }} />
          <Box
            sx={{ color: "#757575", fontSize: "16px", fontWeight: "bolder" }}
          >
            심사 구분
          </Box>
        </Stack>
        <Box sx={{ fontSize: "16px" }}>{round} 정산 심사</Box>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "2%" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ width: "100px" }}
        >
          <CheckCircleOutlineIcon sx={{ color: "#757575" }} />
          <Box
            sx={{ color: "#757575", fontSize: "16px", fontWeight: "bolder" }}
          >
            상태
          </Box>
        </Stack>
        <Box sx={{ fontSize: "16px" }}>{currentState}</Box>
      </Stack>
      <Divider
        style={{
          boxShadow: "0px 2px 4px gray",
          margin: "15px 0px 25px 0px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "350px",
          overflowY: "scroll",
        }}
      >
        {calculateDetail ? (
          <>
            <Box sx={{ width: "90%" }}>
              <Box sx={{ margin: "10px 0" }}>
                <ProjectLabel>프로젝트 정보</ProjectLabel>
                <Box
                  sx={{
                    backgroundColor: "rgb(217,217,217, 0.3)", //#d9d9d9
                    boxShadow: "0px 2px 4px gray",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    sx={{ padding: "20px 2% 0 2%" }}
                  >
                    <Box
                      sx={{
                        fontSize: "16",
                        fontWeight: "bold",
                        width: "100px",
                      }}
                    >
                      프로젝트 명
                    </Box>
                    <Box sx={{ fontSize: "16" }}>
                      {calculateDetail.projectName}
                    </Box>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    sx={{ padding: "20px 2% 0 2%" }}
                  >
                    <Box
                      sx={{
                        fontSize: "16",
                        fontWeight: "bold",
                        width: "100px",
                      }}
                    >
                      판매자 ID
                    </Box>
                    <Box sx={{ fontSize: "16" }}>
                      {calculateDetail.makerUserName}
                    </Box>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    sx={{ padding: "2%" }}
                  >
                    <Box
                      sx={{
                        fontSize: "16",
                        fontWeight: "bold",
                        width: "100px",
                      }}
                    >
                      카테고리
                    </Box>
                    <Box sx={{ fontSize: "16" }}>
                      {calculateDetail.category}
                    </Box>
                  </Stack>
                </Box>
              </Box>
              <br />
              {round === "1차" ? (
                <Box sx={{ margin: "10px 0" }}>
                  <ProjectLabel>제출 서류</ProjectLabel>
                  <Box>
                    <Stack
                      direction="row"
                      // alignItems="center"
                      spacing={3}
                      sx={{ margin: "10px 0" }}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ width: "100px" }}
                      >
                        <FolderOpenIcon sx={{ color: "#757575" }} />
                        <Box
                          sx={{
                            color: "#757575",
                            fontSize: "16px",
                            fontWeight: "bolder",
                          }}
                        >
                          첨부파일
                        </Box>
                      </Stack>

                      <Box sx={{ fontSize: "16" }}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{ width: "100px" }}
                        >
                          <AttachFileIcon sx={{ color: "#00AEEF" }} />
                          <div>{calculateDetail.atcDownload}</div>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ margin: "10px 0" }}>
                  <ProjectLabel>배송 현황</ProjectLabel>
                  <Box>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold", width: "50%" }}
                          >
                            배송 완료
                          </TableCell>
                          <TableCell align="center">
                            {calculateDetail.deliveryCompleteCount}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold", width: "50%" }}
                          >
                            배송 중
                          </TableCell>
                          <TableCell align="center">
                            {calculateDetail.deliveryOngoingCount}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold", width: "50%" }}
                          >
                            배송 대기
                          </TableCell>
                          <TableCell align="center">
                            {calculateDetail.deliveryOnCallCount}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{
                              fontWeight: "bold",
                              fontSize: "16px",
                              width: "50%",
                              color: "#00AEEF",
                            }}
                          >
                            총 배송 건수
                          </TableCell>
                          <TableCell align="center">
                            {calculateDetail.totalDeliveryCount}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Box>
              )}

              <br />

              <Box sx={{ margin: "10px 0" }}>
                <ProjectLabel>정산 신청 금액</ProjectLabel>
                <Box
                  sx={{
                    backgroundColor: "rgb(217,217,217, 0.3)", //#d9d9d9
                    boxShadow: "0px 2px 4px gray",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={4}
                    sx={{ padding: "20px" }}
                  >
                    <div style={{ fontWeight: "bold" }}> 정산 신청 금액</div>
                    <div>
                      {new Intl.NumberFormat("ko-KR").format(
                        calculateDetail.calculateAmount
                      )}
                    </div>
                  </Stack>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                  onClick={close}
                >
                  확인
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}

export default CalculateHistoryForm;
