import { Divider, Paper, Typography, Avatar } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'

export default function DetailMaker(props) {
  return (
    <>
      <Paper
        variant="outlined"
        style={{ padding: 15, border: '1px solid #00AAEF' }}
      >
        <Typography variant="h5">
          <span style={{ color: '#00AAEF' }}>13 </span>일 남음
        </Typography>
        <Divider style={{ margin: '10px 0' }} />
        <div>
          <Typography variant="h4" style={{ margin: '5px 0' }}>
            <span style={{ color: '#00AAEF' }}>90%</span>{' '}
            <span style={{ fontSize: '24px' }}>달성</span>
          </Typography>
          <Typography variant="h4" style={{ margin: '5px 0' }}>
            <span style={{ color: '#00AAEF' }}>25,000,000 </span>
            <span style={{ fontSize: '24px' }}>원 펀딩</span>
          </Typography>
          <Typography variant="h4" style={{ margin: '5px 0' }}>
            <span style={{ color: '#00AAEF' }}>250 </span>
            <span style={{ fontSize: '24px' }}>명의 서포터</span>
          </Typography>
        </div>
        <Divider style={{ margin: '10px 0' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSicG_UfuAYyxZmcvJS4ypRQd-DApq8bS235yIGPT7tGJURV5-_vBIwHA9UL7-jcvu7"
            sx={{ width: 48, height: 48 }}
          />
          <Typography variant="h5" style={{ marginLeft: '15px' }}>
            <b style={{ fontWeight: 'bolder' }}>이정은</b>
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
