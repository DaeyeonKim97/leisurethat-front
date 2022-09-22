import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DaumPostcode from 'react-daum-postcode'

const PopupPostCode = (props) => {
  const { setData } = props
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)
    setData(fullAddress)
    props.onClose()
  }

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '45%',
    left: '-1%',
    width: '474px',
    height: '400px',
    padding: '7px',
    zIndex: '2',
  }

  return (
    <Box>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
      <Button
        type="button"
        onClick={() => {
          props.onClose()
        }}
        className="postCode_btn"
        sx={{ position: 'absolute', mt: -1, ml: 45 }}
      >
        닫기
      </Button>
    </Box>
  )
}

export default PopupPostCode
