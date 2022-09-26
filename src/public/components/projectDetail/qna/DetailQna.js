import { Divider, Typography } from '@mui/material'
import DetailQnaSearchForm from './DetailQnaSearchForm'
import DetailQnaTable from './DetailQnaTable'

export default function DetailQna() {
  return (
    <>
      <Typography variant="h4" style={{ marginTop: 30 }}>
        문의
      </Typography>
      <Divider style={{ marginBottom: 30 }} />
      <DetailQnaSearchForm />
      <DetailQnaTable />
    </>
  )
}
