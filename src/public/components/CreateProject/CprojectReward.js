import CreateContainer from '../User/CreateContainer'
import { TextField } from '@mui/material'
import TextInputVertical from './TextInputVertical'

const CprojectReward = () => {
  return (
    <div style={{ margin: '80px 50px' }}>
      <CreateContainer
        fisrt
        title="프로젝트의 성공 조건 & 수수료 프로젝트 리워드를 구성해주세요
"
      >
        프로젝트 시작을 위해서는 최소 1개 이상의 리워드가 있어야 합니다. 배송이
        필요한 리워드는 배송비가 포함된 가격을 적어주세요.
      </CreateContainer>
      <div style={{ marginTop: '50px' }}>
        <TextInputVertical title="리워드 금액" />
        <TextInputVertical title="리워드 제공 가능 수" />
        <TextInputVertical title="리워드 제목" />
        <TextInputVertical title="리워드 내용" lg />
        <TextInputVertical title="예상 배송일" cal />
        <TextInputVertical title="최대 주문 가능 수" />
        <TextInputVertical title="배송비" />
        <TextInputVertical title="도서 산간 추가배송비" />
      </div>
    </div>
  )
}

export default CprojectReward
