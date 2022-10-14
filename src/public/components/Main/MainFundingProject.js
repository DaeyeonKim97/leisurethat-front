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
    <>
      {item[0] != undefined ? (
        '등록전'
      ) : item.id != null ? (
        <FundingContainer>
          <div
            onClick={() => {
              navigate(`/project-detail/${item.id}`)
            }}
            style={{ cursor: 'pointer' }}
          >
            <ImgBox
              style={{
                height: '240px',
                width: '100%',
              }}
              src={`${item ? item.attachment.downloadAddress : null}`}
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
              {item ? item.name : null}{' '}
            </TextBox>
          </div>
          <FundingContents>
            <TextBox
              style={{
                width: '100%',
              }}
            >
              {item ? item.projectCategory.name : null} |{' '}
              {item ? item.businessInfo.member.name : null}
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
                  {/* {item ? item.totalAmount / item.targetAmount : null}% */}
                </TextBox>
                <TextBox>
                  {item
                    ? [item.targetAmount]
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    : null}{' '}
                  원
                </TextBox>
              </FundingContents>
              <TextBox>{item ? item.endDate : null}</TextBox>
            </FundingContents>
          </FundingContents>
        </FundingContainer>
      ) : (
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
              src={`${item ? item.projectAttachment.downloadAddress : null}`}
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
              {item ? item.projectName : null}{' '}
            </TextBox>
          </div>
          <FundingContents>
            <TextBox
              style={{
                width: '100%',
              }}
            >
              {item ? item.projectCategory : null} |{' '}
              {item ? item.memberName : null}
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
                  {item ? item.totalAmount / item.targetAmount : null}%
                </TextBox>
                <TextBox>{item ? item.totalAmount : null} 원</TextBox>
              </FundingContents>
              <TextBox>{item ? item.endDate : null}</TextBox>
            </FundingContents>
          </FundingContents>
        </FundingContainer>
      )}
    </>
  )
}

export default MainFundingProject
