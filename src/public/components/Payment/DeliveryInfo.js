import Box from '@mui/material/Box'
import { Button } from '@mui/material'

export default function DeliveryInfo() {
  return (
    <>
      <Box component="div" sx={{ p: 2, border: '1px dashed grey' }}>
        <div>
          <div>
            <span>수령인 :</span>
            <span>이상우</span>
          </div>
          <div style={{ marginTop: '3px' }}>
            <span>주소 : </span>
            <span>경기 성남시 분당구 판교역 235</span>
          </div>
          <div style={{ marginTop: '3px' }}>
            <span>연락 : </span>
            <span>010-0000-0000</span>
          </div>
          <div style={{ marginTop: '3px' }}>
            <span>배송지 명 : </span>
            <span>네트워크반</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '2%',
            }}
          >
            <Button variant="contained">수정</Button>
            <Button variant="contained">선택</Button>
          </div>
        </div>
      </Box>
    </>
  )
}
