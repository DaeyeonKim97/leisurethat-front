import MakeProjectItem from "./MakeProjectItem";
import Grid from "@mui/material/Unstable_Grid2";

function MakeProjectItemGrid() {
  function createData(
    projectId,
    projectName,
    category,
    projectState,
    businessName,
    achievements,
    targetAmount
  ) {
    return {
      projectId,
      projectName,
      category,
      projectState,
      businessName,
      achievements,
      targetAmount,
    };
  }

  const datas = [
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "심사요청",
      "사업자명",
      0,
      "30,000,000원"
    ),
    createData("1", "에스튜브", "캠핑", "반려", "사업자명", 0, "30,000,000원"),
    createData("1", "에스튜브", "캠핑", "취소", "사업자명", 0, "30,000,000원"),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "펀딩포기",
      "사업자명",
      0,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "강제종료",
      "사업자명",
      20,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "오픈예정",
      "사업자명",
      0,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "펀딩 진행중",
      "사업자명",
      40,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "미달성종료",
      "사업자명",
      70,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "진행여부결정",
      "사업자명",
      90,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "환불진행",
      "사업자명",
      120,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "결제 후 종료",
      "사업자명",
      120,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "정산 대기",
      "사업자명",
      100,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "1차 정산 요청",
      "사업자명",
      100,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "1차 정산 완료",
      "사업자명",
      100,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "2차 정산 요청",
      "사업자명",
      100,
      "30,000,000원"
    ),
    createData(
      "1",
      "에스튜브",
      "캠핑",
      "완료",
      "사업자명",
      100,
      "30,000,000원"
    ),
  ];
  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
      {datas.map((data, id) => (
        <Grid xs={5} key="">
          <MakeProjectItem data={data} />
        </Grid>
      ))}
    </Grid>
  );
}
export default MakeProjectItemGrid;
