import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import styled from "styled-components";

function CalculateRejectForm({ round, close }) {
  const ProjectLabel = styled.div`
    font-size: 24px;
    font-weight: bolder;
  `;

  function createData(projectName, makerID, category, files, rejectContent) {
    return {
      projectName,
      makerID,
      category,
      files,
      rejectContent,
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
    "반려사유 반려사유 반려사유 반려사유 반려사유 반려사유`~~~~"
  );

  return (
    <>
      <header style={{ color: "#00AEEF", fontSize: 36, fontWeight: "bold" }}>
        반려 사유 / 피드백
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
        <Box sx={{ fontSize: "16px" }}>반려(재심사)</Box>
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
                  sx={{ fontSize: "16", fontWeight: "bold", width: "100px" }}
                >
                  프로젝트 명
                </Box>
                <Box sx={{ fontSize: "16" }}>{data.projectName}</Box>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={3}
                sx={{ padding: "20px 2% 0 2%" }}
              >
                <Box
                  sx={{ fontSize: "16", fontWeight: "bold", width: "100px" }}
                >
                  판매자 ID
                </Box>
                <Box sx={{ fontSize: "16" }}>{data.makerID}</Box>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={3}
                sx={{ padding: "2%" }}
              >
                <Box
                  sx={{ fontSize: "16", fontWeight: "bold", width: "100px" }}
                >
                  카테고리
                </Box>
                <Box sx={{ fontSize: "16" }}>{data.category}</Box>
              </Stack>
            </Box>
          </Box>
          <br />
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
                  {data.files.map((file, id) => (
                    <>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ width: "100px" }}
                      >
                        <AttachFileIcon sx={{ color: "#00AEEF" }} />
                        <div>{file}</div>
                      </Stack>
                    </>
                  ))}
                </Box>
              </Stack>
            </Box>
          </Box>
          <br />
          <Box sx={{ margin: "10px 0" }}>
            <ProjectLabel>반려 사유 / 피드백</ProjectLabel>
            <Box
              sx={{
                height: "300px",
                borderRadius: "5px",
                boxShadow: "0px 2px 4px gray",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ padding: "20px" }}
              >
                <FormatAlignLeftIcon sx={{ color: "#707070" }} />
                <div>{data.projectName} 반려 사유 / 피드백</div>
              </Stack>
              <Box
                sx={{
                  height: "80%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgb(217,217,217, 0.1)",
                    width: "90%",
                    padding: "1%",
                  }}
                >
                  {data.rejectContent}
                </Box>
              </Box>
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
      </Box>
    </>
  );
}

export default CalculateRejectForm;
