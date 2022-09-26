import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { IconButton, Link, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import TextField from '@mui/material/TextField'
import DeliveryCard from './DeliveryCard'
import SearchIcon from '@mui/icons-material/Search'
import PostCode from './PostCode'
import PopupDom from './PopupDom'
import PopupPostCode from './PopupPostCode'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

function createData(id, name, address, phone, placeName, YN) {
  return {
    id,
    name,
    address,
    phone,
    placeName,
    YN,
  }
}

const places = [
  createData(1, '홍길동', '서울서울서울', '01012345678', '집', 'Y'),
  createData(2, '길길동', '인천인천인천', '01012345678', '직장', 'Y'),
]

const handleSubmit = (event) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  })
}

function ChildModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [isPopupOpen, setIsPopupOpen] = React.useState(false)

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true)
  }

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          mt: 1,
          ml: 1,
          width: 380,
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        배송지 추가
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 465, height: 665 }}>
          <IconButton onClick={handleClose} sx={{ ml: 47 }}>
            <ClearIcon sx={{ color: '#00aeef' }} />
          </IconButton>
          <Box
            fontSize={33}
            sx={{
              mt: 2,
              mb: 5,
              ml: 4,
              fontWeight: 'bold',
            }}
          >
            배송지 등록
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
            }}
          >
            <Typography sx={{ fontSize: 20 }}>수령인</Typography>
            <TextField
              margin="normal"
              multiline
              maxRows={2}
              id="name"
              label="이름을 입력하세요"
              name="name"
              autoComplete="name"
              autoFocus
              size="small"
              sx={{
                ml: 2,
                width: 350,
                backgroundColor: 'white',
              }}
            />
            <Typography sx={{ display: 'inline-flex', fontSize: 20 }}>
              주소
            </Typography>
            <button type="button" onClick={openPostCode}>
              우편번호 검색
            </button>
            <div id="popupDom">
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode onClose={closePostCode} />
                </PopupDom>
              )}
            </div>
            <TextField
              margin="normal"
              multiline
              maxRows={4}
              name="address"
              label="상세 주소를 입력하세요"
              type="text"
              id="address"
              autoComplete="address"
              size="small"
              sx={{
                display: 'inline-flex',
                ml: 2,
                width: 350,
                backgroundColor: 'white',
              }}
            ></TextField>
            <Typography sx={{ fontSize: 20 }}>배송지명</Typography>
            <TextField
              margin="normal"
              multiline
              maxRows={4}
              name="placeName"
              label="배송지명을 입력하세요"
              type="text"
              id="placeName"
              autoComplete="placeName"
              size="small"
              sx={{
                ml: 2,
                width: 350,
                backgroundColor: 'white',
              }}
            />
            <Typography sx={{ fontSize: 20 }}>연락처</Typography>
            <TextField
              margin="normal"
              multiline
              maxRows={4}
              name="phone"
              label="휴대폰번호를 입력하세요"
              type="number"
              id="phone"
              autoComplete="phone"
              size="small"
              sx={{
                ml: 2,
                width: 350,
                backgroundColor: 'white',
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                display: 'plex',
                mt: 6,
                mb: 2,
                width: 200,
                ml: 12,
                height: 50,
                fontSize: 23,
                backgroundColor: '#00aeef',
              }}
            >
              배송지 추가
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          height: 25,
          fontWeight: 'bold',
        }}
      >
        배송지 변경
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 465, height: 665 }}>
          <Box
            fontSize={33}
            sx={{
              mt: 5,
              ml: 4,
              fontWeight: 'bold',
            }}
          >
            배송지 관리
          </Box>
          {places.map((place) => (
            <DeliveryCard key={place.id} place={place} />
          ))}
          <ChildModal />
        </Box>
      </Modal>
    </div>
  )
}
