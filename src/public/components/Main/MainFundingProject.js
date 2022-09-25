import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const FundingContainer = styled.div`
  width: 100%;
`

const ImgBox = styled.img``

const FundingContents = styled.div``

const TextBox = styled.div`
  color: black;
  font-weight: bold;
  font-size: 15px;
  margin-right: 20px;
`

const MainFundingProject = ({ contents, img }) => {
  const navigate = useNavigate()
  return (
    <FundingContainer key={contents}>
      <div
        onClick={() => {
          navigate('/project-detail/10')
        }}
        style={{ cursor: 'pointer' }}
      >
        <ImgBox
          style={{
            height: '240px',
            width: '100%',
          }}
          src={`${img}`}
        ></ImgBox>
        <TextBox
          style={{
            height: '80px',
            width: '100%',
            fontSize: '20px',
            lineHeight: '27px',
            marginTop: '10px',
          }}
        >
          안녕하세요 <br /> 어쩌고 저쩌고 고양이 입니다
        </TextBox>
      </div>
      <FundingContents>
        <TextBox
          style={{
            width: '100%',
          }}
        >
          캠핑 | 사업자명
        </TextBox>
        <FundingContents
          style={{
            width: '100%',
            marginTop: '10px',
            height: '6px',
            backgroundColor: '#00AEEF',
          }}
        ></FundingContents>
        <FundingContents
          style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <FundingContents
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextBox
              style={{
                color: '#00AEEF',
                fontSize: '20px',
                marginRight: '20px',
              }}
            >
              300%
            </TextBox>
            <TextBox>2,500,400원</TextBox>
          </FundingContents>
          <TextBox>2022.08.12</TextBox>
        </FundingContents>
      </FundingContents>
    </FundingContainer>
  )
}

export default MainFundingProject
