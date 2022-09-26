import { Box } from '@mui/system'

export default function DetailItemInfo({ activeStep, items }) {
  return (
    <Box
      flexGrow={1}
      sx={{ margin: '0px 20px', backgroundColor: '#f2f2f2' }}
      style={{ padding: 10, maxWidth: 300 }}
    >
      {items[activeStep].info.map((step, index) => (
        <div key={index} style={{ margin: 15 }}>
          <h3 style={{ color: 'gray', fontWeight: 'bold' }}>{step.name}</h3>
          <p>{step.value}</p>
        </div>
      ))}
    </Box>
  )
}
