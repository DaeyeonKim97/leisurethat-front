import * as React from 'react'
import { Divider, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function DetailRewardItem({ item }) {
  const [isMouseOver, setIsMouseOver] = React.useState(false)
  const navigate = useNavigate()

  return (
    <Paper
      elevation={3}
      style={{
        margin: '20px 0',
        padding: '15px',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
      onClick={() => navigate('/payment')}
    >
      {isMouseOver ? (
        <div
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%',
            backgroundColor: '#00AEEFAA',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography color="white" variant="h5" fontWeight={'border'}>
            <p style={{ textShadow: '1px 1px 4px black' }}>리워드 구매하기</p>
          </Typography>
        </div>
      ) : null}
      <Typography style={{ color: 'gray' }}>
        <span style={{ color: '#00AAEF' }}>{item.price}</span> ₩
      </Typography>
      <Typography variant="h5" style={{ margin: '10px 0' }}>
        {item.name}
      </Typography>
      <Typography style={{ color: 'gray' }}>{item.detail}</Typography>
      <Divider style={{ margin: '10px 0' }} />
      <Typography>{item.desc}</Typography>
    </Paper>
  )
}
