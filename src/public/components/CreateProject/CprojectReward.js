import CreateContainer from '../User/CreateContainer'
import { TextField } from '@mui/material'
import TextInputVertical from './TextInputVertical'
import ImgInput from './ImgInput'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const CprojectReward = ({
  productName,
  productFile,
  productDetail,
  rewardPrice,
  rewardMaxCount,
  rewardTitle,
  rewardContent,
  rewardDate,
  rewardServeCount,
  rewardFee,
  rewardFeeFar,
  setProductName,
  setProductFile,
  setProductDetail,
  setRewardPrice,
  setRewardMaxCount,
  setRewardTitle,
  setRewardContent,
  setRewardDate,
  setRewardServeCount,
  setRewardFee,
  setRewardFeeFar,
}) => {
  return (
    <div style={{ margin: '80px 50px' }}>
      <CreateContainer
        fisrt
        title="프로젝트 리워드에 구성되는 상품 정보를 입력해주세요
"
      >
        리워드에 포함될 상품 정보를 입력해주세요
      </CreateContainer>
      <CreateContainer title="상품 이미지를 등록해주세요">
        <div style={{ display: 'flex' }}>
          <ImgInput lg value={productFile} setValue={setProductFile} />
        </div>
      </CreateContainer>
      <div style={{ marginTop: '50px' }}>
        <TextInputVertical
          title="상품명"
          value={productName}
          setValue={setProductName}
        />
        <TextInputVertical
          title="상품 정보 고시"
          lg
          value={productDetail}
          setValue={setProductDetail}
        />
      </div>
      <CreateContainer
        fisrt
        title="프로젝트의 성공 조건 & 수수료 프로젝트 리워드를 구성해주세요
"
      >
        프로젝트 시작을 위해서는 최소 1개 이상의 리워드가 있어야 합니다. 배송이
        필요한 리워드는 배송비가 포함된 가격을 적어주세요.
      </CreateContainer>
      <div style={{ marginTop: '50px' }}>
        <TextInputVertical
          title="리워드 금액"
          value={rewardPrice}
          setValue={setRewardPrice}
        />
        <TextInputVertical
          title="리워드 제공 가능 수"
          value={rewardMaxCount}
          setValue={setRewardMaxCount}
        />
        <TextInputVertical
          title="리워드 제목"
          value={rewardTitle}
          setValue={setRewardTitle}
        />
        <TextInputVertical
          title="리워드 내용"
          lg
          value={rewardContent}
          setValue={setRewardContent}
        />
        <TextInputVertical
          title="예상 배송일"
          cal
          value={rewardDate}
          setValue={setRewardDate}
        />
        <TextInputVertical
          title="최대 주문 가능 수"
          value={rewardServeCount}
          setValue={setRewardServeCount}
        />
        <TextInputVertical
          title="배송비"
          value={rewardFee}
          setValue={setRewardFee}
        />
        <TextInputVertical
          title="도서 산간 추가배송비"
          value={rewardFeeFar}
          setValue={setRewardFeeFar}
        />
      </div>
    </div>
  )
}

export default CprojectReward
