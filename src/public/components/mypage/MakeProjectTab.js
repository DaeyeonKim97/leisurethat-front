import MakeProjectItemGrid from './MakeProjectItemGrid';
import Box from '@mui/material/Box';
function MakeProjectTab() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '60%' }}>
          <Box sx={{ padding: '3%', fontSize: '1em' }}>
            제작한 프로젝트를
            <br /> 확인해보세요
          </Box>
          <Box sx={{ padding: '3% 10%' }}>
            <MakeProjectItemGrid />
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default MakeProjectTab;
