import MakeProjectItem from "./MakeProjectItem";
import Grid from "@mui/material/Unstable_Grid2";
import { useSelector } from "react-redux";

function MakeProjectItemGrid() {
  const results = useSelector((state) => state.mypageReducer);
  const makeProjectList = results.projectList;
  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
      {makeProjectList &&
        makeProjectList.map((data, id) => (
          <Grid xs={5} key="">
            <MakeProjectItem data={data} />
          </Grid>
        ))}
    </Grid>
  );
}
export default MakeProjectItemGrid;
