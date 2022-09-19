import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button, Divider } from '@mui/material'
import { width } from '@mui/system'

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

export default function MemberInfoModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
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
        <Box height={500} sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: 'bold', fontSize: 25 }}
          >
            후원자 정보
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <Typography display={'inline-block'} sx={{ fontSize: 18 }}>
            후원자
          </Typography>
          <Typography
            display={'inline-block'}
            multiline
            sx={{
              mt: 2,
              ml: 3,
              width: 350,
              height: 35,
              border: 1,
              borderBlockColor: 'grey',
              fontSize: 17,
            }}
          >
            홍길동
          </Typography>
          <Typography display={'inline-block'} sx={{ fontSize: 18 }}>
            후원자 ID
          </Typography>
          <Typography
            display={'inline-block'}
            multiline
            sx={{
              mt: 2,
              ml: 3,
              width: 328,
              height: 35,
              border: 1,
              borderBlockColor: 'grey',
              fontSize: 17,
            }}
          >
            member1212
          </Typography>
          <Typography display={'inline-block'} sx={{ fontSize: 18 }}>
            주문 번호
          </Typography>
          <Typography
            display={'inline-block'}
            multiline
            sx={{
              mt: 2,
              ml: 3,
              width: 328,
              height: 35,
              border: 1,
              borderBlockColor: 'grey',
              fontSize: 17,
            }}
          >
            1111
          </Typography>
          <Typography display={'inline-block'} sx={{ fontSize: 18 }}>
            배송지
          </Typography>
          <Typography
            display={'inline-block'}
            multiline
            sx={{
              mt: 2,
              ml: 3,
              width: 350,
              height: 35,
              border: 1,
              borderBlockColor: 'grey',
              fontSize: 17,
            }}
          >
            주소
          </Typography>
          <Typography
            display={'inline-block'}
            multiline
            sx={{
              mt: 2,
              ml: 10,
              width: 348,
              height: 35,
              border: 1,
              borderBlockColor: 'grey',
              fontSize: 17,
            }}
          >
            상세주소
          </Typography>
          <Typography display={'inline-block'} sx={{ fontSize: 18 }}>
            연락처
          </Typography>
          <Typography
            display={'inline-block'}
            multiline
            sx={{
              mt: 2,
              ml: 3,
              width: 350,
              height: 35,
              border: 1,
              borderBlockColor: 'grey',
              fontSize: 17,
            }}
          >
            01012345678
          </Typography>
          <Button
            onClick={handleClose}
            variant={'contained'}
            sx={{ position: 'absolute', top: '86%', left: '40%', width: 100 }}
          >
            확인
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
