import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { IconButton, Typography } from '@mui/material'

function DeliveryCard({ place }) {
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [phone, setPhone] = useState()
  const [placeName, setPlaceName] = useState()
  const [YN, setYN] = useState()

  return (
    <Box
      sx={{
        mt: 2,
        ml: 1,
        width: 380,
        height: 170,
        border: 1,
        borderColor: '#00aeef',
      }}
    >
      <Typography variant="body1" fontWeight={'bold'} sx={{ ml: 1, mr: 1 }}>
        수령인 : {place.name} <br />
        주소 : {place.address}
        <br />
        연락처 : {place.phone} <br />
        배송지 명 : {place.placeName} <br />
      </Typography>
      <Button variant="outlined" sx={{ ml: 27 }}>
        수정
      </Button>
      <Button variant="contained" sx={{ ml: 1, color: 'white' }}>
        선택
      </Button>
    </Box>
  )
}

export default DeliveryCard
