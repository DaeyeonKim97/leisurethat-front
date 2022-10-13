import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Divider } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1024,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

export default function ParticipantsInfoModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const [info, setInfo] = useState()

  React.useEffect(() => {
    console.log(props.projectId)
    if (props.projectId) {
      axios
        .get(
          `http://localhost:8001/project-detail/${props.projectId}/participant`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            },
          }
        )
        .then((res) => {
          console.log(res.data)
          setInfo(res.data.results.paymentList)
        })
    }
  }, [])

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            참여자 정보
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          {info
            ? info.map((payment) => (
                <div>
                  [{payment.paymentId}] {payment.order.orderMember.memberName} -{' '}
                  {payment.order.orderReward.rewardTitle} {payment.paymentCount}
                  개 : {payment.paymentPrice}₩ ({payment.paymentDate})
                </div>
              ))
            : null}
        </Box>
      </Modal>
    </div>
  )
}
