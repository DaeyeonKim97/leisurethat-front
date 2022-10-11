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

const MainFundingProject = ({ item }) => {
  const navigate = useNavigate()
  return (
    <FundingContainer>
      <div
        onClick={() => {
          navigate(`/project-detail/${item.projectId}`)
        }}
        style={{ cursor: 'pointer' }}
      >
        <ImgBox
          style={{
            height: '240px',
            width: '100%',
          }}
          src={`${item.projectAttachment.downloadAddress}`}
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
          {' '}
          {item.projectName}{' '}
        </TextBox>
      </div>
      <FundingContents>
        <TextBox
          style={{
            width: '100%',
          }}
        >
          {item.projectCategory} | {item.memberName}
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
              {item.totalAmount / item.targetAmount}%
            </TextBox>
            <TextBox>{item.totalAmount} 원</TextBox>
          </FundingContents>
          <TextBox>{item.endDate}</TextBox>
        </FundingContents>
      </FundingContents>
    </FundingContainer>
  )
}

export default MainFundingProject
