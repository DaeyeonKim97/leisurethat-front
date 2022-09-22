import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import { UnderLineContent, UnderLineContentBox } from '../components/shared'
import CreateContainer from '../components/User/CreateContainer'

const ProjectMenu = styled.div`
  margin-bottom: 15px;
`

const PublicCreateProject = () => {
  const [getCreateLevel, setCreateLevel] = useState('')

  return (
    <>
      <UnderLineContentBox
        style={{
          height: '150px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '120px',
            margin: '0px 280px',
          }}
        >
          <UnderLineContent
            style={{
              marginRight: '20px',
              width: '180px',
              opacity: 0.5,
            }}
          >
            기본정보
          </UnderLineContent>
          <Button variant="outlined" sx={{ border: 'solid 1.5px' }}>
            가이드북 다운로드
          </Button>
        </div>
      </UnderLineContentBox>
      <div style={{ display: 'flex' }}>
        <div style={{ height: '2000px', width: '15%' }}>
          <div style={{ margin: '75px 50px', fontSize: '14px' }}>
            <div style={{ fontSize: '16px' }}>프로젝트 만들기</div>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ProjectMenu>1. 기본정보</ProjectMenu>
              <ProjectMenu>2. 스토리</ProjectMenu>
              <ProjectMenu>3. 리워드</ProjectMenu>
              <ProjectMenu>4. 안내사항</ProjectMenu>
              <ProjectMenu>5. 제작자 부가정보</ProjectMenu>
            </div>
          </div>
        </div>
        <div
          style={{
            height: '2000px',
            width: '85%',
            fontSize: '16px',
          }}
        >
          <div style={{ margin: '80px 50px' }}>
            <CreateContainer fisrt title="프로젝트의 성공 조건 & 수수료 안내">
              프로젝트 종료일 기준 모금액이 목표금액의 100% 이상인 경우에만
              프로젝트가 성공하게 됩니다.
              <br />
              프로젝트가 성공한 경우, leisurethat은 모금액에서 수수료를 제한
              금액을 정산해드립니다.
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
                최소{' '}
                <div style={{ color: '#00AEEF' }}> &nbsp; 100,000원&nbsp; </div>
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
                홈페이지와 외부 공유를 했을 때 보여집니다. 프로젝트를 한 눈에
                나타낼 수 있는 이미지를 등록해주세요.
              </div>
              <div>
                <label for="inputImg">
                  <div
                    style={{
                      height: '360px',
                      width: '550px',
                      marginTop: '30px',
                      border: '1px solid rgba(0,0,0, 0.2)',
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src="/static/img/PublicCreateImgInput.png" />
                  </div>
                </label>
                <input type="file" id="inputImg" style={{ display: 'none' }} />
              </div>
            </CreateContainer>
            <CreateContainer
              title="프로젝트 카테고리를 적어주세요"
              input="카테고리"
            ></CreateContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '100px',
                marginRight: '100px',
              }}
            >
              <Button variant="contained" size="large" sx={{ width: '200px' }}>
                다음단계
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PublicCreateProject
