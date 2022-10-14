/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { border } from '@mui/system'
import DeliveryInfo from './DeliveryInfo'

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

export default function ShippingAddressModal(props) {
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
            배송지 선택
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} marginBottom={1}>
              {/* {fundingMap.map((content) => (
                <DeliveryInfo key={content} img={getImg} text={getText} />
              ))} */}
              <DeliveryInfo />
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
