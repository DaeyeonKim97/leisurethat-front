/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Search from '@mui/icons-material/Search'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deliveryAPI } from '../../apis/Payment/adminDeliveryAPI'
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

export default function ProjectInfoModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const { date } = props
  const { orderDelivery, payment } = date

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))
  return (
    <div>
      {orderDelivery == null ? (
        '데이터가 없습니다.'
      ) : (
        <>
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
                배송 정보 확인
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4} textAlign="center" marginBottom={1}>
                  <Typography variant="label" fontSize={16}>
                    수령인
                  </Typography>
                </Grid>
                <Grid item xs={6} marginBottom={1}>
                  <Item>{orderDelivery.delivery.deliveryReceiver}</Item>
                </Grid>
                <Grid item xs={4} textAlign="center" marginBottom={1}>
                  <Typography variant="label" fontSize={16}>
                    주소
                  </Typography>
                </Grid>
                <Grid item xs={6} marginBottom={1}>
                  <Item>{orderDelivery.delivery.deliveryBasicAddress}</Item>
                </Grid>
                <Grid item xs={4} marginBottom={1}></Grid>
                <Grid item xs={6} marginBottom={1}>
                  <Item>{orderDelivery.delivery.deliveryDetailAddress}</Item>
                </Grid>
                <Grid item xs={4} textAlign="center" marginBottom={1}>
                  <Typography variant="label" fontSize={16}>
                    운송장 번호
                  </Typography>
                </Grid>
                <Grid item xs={6} marginBottom={1}>
                  <Item>
                    {orderDelivery.waybillId}
                    <IconButton aria-label="search" dis>
                      <Search />
                    </IconButton>
                  </Item>
                </Grid>
                <Grid item xs={4} textAlign="center" marginBottom={1}>
                  <Typography variant="label" fontSize={16}>
                    배송 상태
                  </Typography>
                </Grid>
                <Grid item xs={6} marginBottom={4}>
                  <Item>{orderDelivery.delivertStatus}</Item>
                </Grid>
                <Grid item xs={3} textAlign="center">
                  <Button variant="contained" onClick={handleClose}>
                    확인
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </>
      )}
    </div>
  )
}
