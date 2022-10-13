import { Divider, Paper, Typography, Avatar } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'

export default function DetailMaker({ data, paymentData }) {
  return (
    <>
      <Paper
        variant="outlined"
        style={{ padding: 15, border: '1px solid #00AAEF' }}
      >
        <Typography variant="h5">
          <span style={{ color: '#00AAEF' }}>
            {' '}
            {data && paymentData
              ? Math.ceil(
                  (new Date(`${data.project.projectEndDate}`) - new Date()) /
                    (1000 * 60 * 60 * 24)
                )
              : null}{' '}
          </span>
          일 남음
        </Typography>
        <Divider style={{ margin: '10px 0' }} />
        <div>
          <Typography variant="h4" style={{ margin: '5px 0' }}>
            <span style={{ color: '#00AAEF' }}>
              {paymentData && data
                ? paymentData.amount / data.project.targetAmount
                : null}
              %
            </span>{' '}
            <span style={{ fontSize: '24px' }}>달성</span>
          </Typography>
          <Typography variant="h4" style={{ margin: '5px 0' }}>
            <span style={{ color: '#00AAEF' }}>
              {' '}
              {`${paymentData ? paymentData.amount : null}`.replace(
                /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                ','
              )}{' '}
            </span>
            <span style={{ fontSize: '24px' }}>원 펀딩</span>
          </Typography>
          <Typography variant="h4" style={{ margin: '5px 0' }}>
            <span style={{ color: '#00AAEF' }}>
              {paymentData ? paymentData.totalParticipant : null}{' '}
            </span>
            <span style={{ fontSize: '24px' }}>명의 서포터</span>
          </Typography>
        </div>
        <Divider style={{ margin: '10px 0' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={
              data
                ? data.member.memberAttachment
                  ? data.member.memberAttachment.downloadAddress
                  : null
                : null
            }
            sx={{ width: 48, height: 48 }}
          />
          <Typography variant="h5" style={{ marginLeft: '15px' }}>
            <b style={{ fontWeight: 'bolder' }}>
              {data ? data.member.memberName : null}
            </b>
          </Typography>
        </div>
        <div
          style={{
            marginTop: 10,
            marginLeft: 10,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CheckCircleOutlineOutlinedIcon style={{ marginRight: 10 }} />
          완료된 프로젝트 : 6개
        </div>
        <div
          style={{
            marginTop: 10,
            marginLeft: 10,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <PaidOutlinedIcon style={{ marginRight: 10 }} />총 누적금액 : 2000만원
          ++
        </div>
      </Paper>
    </>
  )
}
