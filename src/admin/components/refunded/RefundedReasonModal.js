import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button, Divider, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
}

export default function RefundedReasonModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {props.children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ display: 'flex', justifyContent: 'right' }}
            onClick={handleClose}
          >
            <IconButton color="primary" aria-label="add to shopping cart">
              <CloseIcon />
            </IconButton>
          </div>
          <Box sx={{ p: '0 15px 10px 20px' }}>
            <Typography id="modal-modal-title" variant="h5" color="primary">
              등록 심사 반려 사유
            </Typography>
            <Divider style={{ margin: '10px 0px' }} />
            <Paper
              elevation={0}
              variant="outlined"
              sx={{ height: 300, width: '100%', overflowY: 'scroll', p: 3 }}
            >
              <Box sx={{}}>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
                <p style={{ margin: '7px 0px' }}>
                  LEISURETHAT SAMPLEPROJECT 01
                </p>
              </Box>
            </Paper>
            <div style={{ padding: '10px 0px 15px 0px', color: '#757575' }}>
              <p style={{ margin: '7px 0px' }}>LEISURETHAT SAMPLEPROJECT 01 </p>
              <p style={{ margin: '7px 0px' }}>2022-07-29 leisurethat01</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
              <Button
                variant="contained"
                style={{ marginRight: '5px' }}
                onClick={handleClose}
              >
                확인
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
