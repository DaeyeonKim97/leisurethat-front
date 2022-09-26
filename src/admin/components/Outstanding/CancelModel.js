/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { Button, TextField } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 512,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

export default function CancelModel(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginBottom={2}
          >
            결제 취소
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4} textAlign="center" marginBottom={1}>
              <Typography variant="label" fontSize={16}>
                후원자 명
              </Typography>
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <Item>데이터 삽입 홍길동</Item>
            </Grid>
            <Grid item xs={4} textAlign="center" marginBottom={1}>
              <Typography variant="label" fontSize={16}>
                프로젝트 명
              </Typography>
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <Item>프로젝트 명</Item>
            </Grid>

            <Grid item xs={4} textAlign="center" marginBottom={1}>
              <Typography variant="label" fontSize={16}>
                환불 금액
              </Typography>
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <Item> 25000원</Item>
            </Grid>
            <Grid item xs={4} textAlign="center" marginBottom={1}>
              <Typography variant="label" fontSize={16}>
                환불 신청일
              </Typography>
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <Item>환불 신청일</Item>
            </Grid>
            <Grid item xs={4} textAlign="center" marginBottom={1}>
              <Typography variant="label" fontSize={16}>
                환불 사유
              </Typography>
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <Item>환불 사유</Item>
            </Grid>
            <Grid item xs={3} textAlign="center">
              <Button variant="contained" onClick={handleClose}>
                확인
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
