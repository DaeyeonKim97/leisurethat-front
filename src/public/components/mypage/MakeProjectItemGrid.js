import MakeProjectItem from './MakeProjectItem';
import Grid from '@mui/material/Unstable_Grid2';

function MakeProjectItemGrid() {
  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
      <Grid xs={5}>
        <MakeProjectItem />
      </Grid>
      <Grid xs={5}>
        <MakeProjectItem />
      </Grid>
      <Grid xs={5}>
        <MakeProjectItem />
      </Grid>
      <Grid xs={5}>
        <MakeProjectItem />
      </Grid>
    </Grid>
  );
}
export default MakeProjectItemGrid;
