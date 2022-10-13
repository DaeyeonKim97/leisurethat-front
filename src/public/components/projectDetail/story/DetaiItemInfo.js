import { Box } from '@mui/system'

export default function DetailItemInfo({ activeStep, items, productList }) {
  return (
    <Box
      flexGrow={1}
      sx={{ margin: '0px 20px', backgroundColor: '#f2f2f2' }}
      style={{ padding: 10, maxWidth: 300, whiteSpace: 'pre-wrap' }}
    >
      {productList ? `${productList[activeStep].productDetail}` : null}
    </Box>
  )
}
