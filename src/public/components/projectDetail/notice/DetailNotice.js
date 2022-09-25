import { Divider, Typography } from '@mui/material'
import DetailNoticeSearchForm from './DetailNoticeSearchForm'
import DetailNoticeTable from './DetailNoticeTable'

export default function DetailNotice() {
  return (
    <>
      <Typography variant="h4" style={{ marginTop: 30 }}>
        공지사항
      </Typography>
      <Divider style={{ marginBottom: 30 }} />
      <DetailNoticeSearchForm />
      <DetailNoticeTable />
    </>
  )
}
