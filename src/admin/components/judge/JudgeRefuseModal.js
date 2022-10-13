import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 512,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
}

export default function JudgeRefuseModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const [available, setAvailable] = React.useState(true)

  const onClickRefuse = () => {
    if (available) {
      setAvailable(false)
      let accessToken = 'Bearer ' + localStorage.getItem('accessToken')
      axios
        .delete(
          'http://localhost:8001/project-detail/enroll/' + props.projectId,
          {},
          {
            headers: {
              Authorization: accessToken,
            },
          }
        )
        .then((res) => {
          console.log(res)
          props.setInit(true)
          alert('반려되었습니다')
          handleClose()
        })
        .catch((err) => {
          alert('프로젝트 정보 / 토큰 정보를 다시 확인해주세요!')
          setAvailable(true)
        })
    }
  }

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
          <div
            style={{ display: 'flex', justifyContent: 'right' }}
            onClick={handleClose}
          >
            <IconButton color="primary" aria-label="add to shopping cart">
              <CloseIcon />
            </IconButton>
          </div>
          <Box sx={{ p: '0 15px 10px 20px' }}>
            <Typography id="modal-modal-title" variant="h5">
              반려 처리하시겠습니까?
            </Typography>
            <div style={{ padding: '10px 0px 15px 0px', color: '#757575' }}>
              <p style={{ margin: '7px 0px' }}>LEISURETHAT SAMPLEPROJECT 01 </p>
              <p style={{ margin: '7px 0px' }}>2022-07-29 leisurethat01</p>
              <p style={{ margin: '7px 0px' }}>
                서류심사를 반려 처리하시겠습니까
              </p>
              <p style={{ margin: '7px 0px' }}>반려 사유를 등록해야 합니다. </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
              {available ? (
                <Button
                  variant="contained"
                  style={{ marginRight: '5px' }}
                  onClick={onClickRefuse}
                >
                  확인
                </Button>
              ) : null}
              <Button variant="outlined" onClick={handleClose}>
                취소
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
