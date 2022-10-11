import { Divider, Paper, Typography } from '@mui/material'
import DetailRewardItem from './DetailRewardItem'

function createData(price, name, detail, desc) {
  return {
    price,
    name,
    detail,
    desc,
  }
}

const rows = [
  createData(
    '66,000',
    '슈퍼저렴세트',
    '구명튜브x2 + 바람넣기 + 어쩌구저쩌구',
    '어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키'
  ),
  createData(
    '20,000',
    '알뜰세트',
    '구명튜브 + 바람넣기',
    '어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키'
  ),
  createData(
    '20,000',
    '알뜰세트',
    '구명튜브 + 바람넣기',
    '어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키'
  ),
  createData(
    '20,000',
    '알뜰세트',
    '구명튜브 + 바람넣기',
    '어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키 어쩌구 저쩌구 숄라숄라 설명설명 오키오키 도키도키'
  ),
]

export default function DetailReward({ rewardList }) {
  return (
    <>
      <Typography variant="h5" style={{ marginTop: 20 }}>
        리워드 목록
      </Typography>
      <Divider style={{ margin: '10px 0' }} />
      {rewardList
        ? rewardList.map((item) => {
            return <DetailRewardItem item={item} />
          })
        : null}
    </>
  )
}
