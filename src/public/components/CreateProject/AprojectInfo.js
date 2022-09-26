import { Button, TextField } from '@mui/material'
import CreateContainer from '../User/CreateContainer'
import ImgInput from './ImgInput'

const AprojectInfo = () => {
  return (
    <div style={{ margin: '80px 50px' }}>
      <CreateContainer fisrt title="프로젝트의 성공 조건 & 수수료 안내">
        프로젝트 종료일 기준 모금액이 목표금액의 100% 이상인 경우에만 프로젝트가
        성공하게 됩니다.
        <br />
        프로젝트가 성공한 경우, leisurethat은 모금액에서 수수료를 제한 금액을
        정산해드립니다.
      </CreateContainer>
      <CreateContainer
        title="프로젝트의 제목을 적어주세요"
        input="프로젝트 제목"
      >
        프로젝트의 핵심 내용을 담을 수 있고 간결한 제목을 정해주세요.
      </CreateContainer>
      <CreateContainer
        title="프로젝트의 진행 기간을 적어주세요"
        input="프로젝트 기간"
      >
        최소 7일부터 최대 60일까지 가능합니다.
      </CreateContainer>
      <CreateContainer title="목표 금액을 적어주세요" input="금액">
        <div style={{ display: 'flex' }}>
          최소 <div style={{ color: '#00AEEF' }}> &nbsp; 100,000원&nbsp; </div>
          이상이어야 합니다.
        </div>
      </CreateContainer>
      <CreateContainer title="프로젝트의 고유 주소를 적어주세요">
        <div>
          프로젝트와 관련된 키워드를 짧은 영어로 적어주세요. 특수문자와
          띄어쓰기는 불가능합니다.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '25px',
          }}
        >
          <div>https://www.leisurethat.com/r/</div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            style={{ width: '300px', marginLeft: '5px' }}
          />
        </div>
      </CreateContainer>
      <CreateContainer title="프로젝트 대표 이미지를 등록해주세요">
        <div>
          홈페이지와 외부 공유를 했을 때 보여집니다. 프로젝트를 한 눈에 나타낼
          수 있는 이미지를 등록해주세요.
        </div>
        <ImgInput lg />
      </CreateContainer>
      <CreateContainer
        title="프로젝트 카테고리를 적어주세요"
        input="카테고리"
      ></CreateContainer>
    </div>
  )
}

export default AprojectInfo
