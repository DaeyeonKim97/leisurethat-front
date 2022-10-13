import CreateContainer from '../User/CreateContainer'
import ImgInput from './ImgInput'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import TextArea from './TextArea'

const BprojectStory = ({
  storyTitle,
  setStoryTitle,
  storyFile,
  setStoryFile,
  storyContent,
  setStoryContent,
}) => {
  return (
    <div style={{ margin: '80px 50px' }}>
      <CreateContainer
        title="스토리 제목을 적어주세요"
        input="스토리 제목"
        value={storyTitle}
        setValue={setStoryTitle}
      ></CreateContainer>
      <CreateContainer title="스토리 이미지를 등록해주세요">
        <div style={{ display: 'flex' }}>
          <ImgInput sm value={storyFile} setValue={setStoryFile} />
          <div
            style={{
              height: '125px',
              width: '192px',
              marginTop: '30px',
              border: '1px solid rgba(0,0,0, 0.2)',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(1,1,1,0.3)',
            }}
          >
            <AddCircleOutlineIcon style={{ width: '23px', height: '23px' }} />
          </div>
        </div>
      </CreateContainer>
      <CreateContainer title="프로젝트 스토리 적어주세요">
        <div style={{ marginBottom: '30px' }}>
          프로젝트를 시작하기 위해 필요한 내용이 없다면 승인이 되지 않습니다.
        </div>
        <TextArea value={storyContent} setValue={setStoryContent} />
      </CreateContainer>
    </div>
  )
}

export default BprojectStory
