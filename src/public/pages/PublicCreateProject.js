import { ChildCare } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AprojectInfo from '../components/CreateProject/AprojectInfo'
import BprojectStory from '../components/CreateProject/BprojectStory'
import CprojectReward from '../components/CreateProject/CprojectReward'
import DprojectService from '../components/CreateProject/DprojectService'
import EprojectAdditional from '../components/CreateProject/EprojectAdditional'
import { UnderLineContent, UnderLineContentBox } from '../components/shared'
import CreateContainer from '../components/User/CreateContainer'

const ProjectMenu = styled.div`
  margin-bottom: 15px;
`

const PrecessMenu = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  div:nth-child(${(p) => p.process}) {
    color: #00aeef;
  }
`

const PublicCreateProject = () => {
  const [getCreateLevel, setCreateLevel] = useState(1)
  //state 숫자에 따라서 프로젝트 만들기 하위의 css가 변경

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
        <div style={{ width: '250px' }}>
          <div style={{ margin: '75px 50px', fontSize: '14px' }}>
            <div style={{ fontSize: '16px' }}>프로젝트 만들기</div>
            <PrecessMenu process={getCreateLevel}>
              <ProjectMenu>1. 기본정보</ProjectMenu>
              <ProjectMenu>2. 스토리</ProjectMenu>
              <ProjectMenu>3. 리워드</ProjectMenu>
              <ProjectMenu>4. 안내사항</ProjectMenu>
              <ProjectMenu>5. 제작자 부가정보</ProjectMenu>
            </PrecessMenu>
          </div>
        </div>

        <form
          style={{
            width: '85%',
            fontSize: '16px',
          }}
        >
          {getCreateLevel === 1 ? (
            <AprojectInfo />
          ) : getCreateLevel === 2 ? (
            <BprojectStory />
          ) : getCreateLevel === 3 ? (
            <CprojectReward />
          ) : getCreateLevel === 4 ? (
            <DprojectService />
          ) : getCreateLevel === 5 ? (
            <EprojectAdditional />
          ) : (
            <AprojectInfo />
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '100px',
              marginRight: '100px',
            }}
          >
            {getCreateLevel === 5 ? (
              <Button
                onClick={() => {}}
                variant="outlined"
                color="red"
                size="large"
                sx={{ width: '200px' }}
              >
                <Link to={'/'}>승인 요청하기</Link>
              </Button>
            ) : getCreateLevel > 1 ? (
              <Button
                onClick={() => {
                  if (getCreateLevel > 1) {
                    setCreateLevel(getCreateLevel - 1)
                  } else {
                  }
                  javascript: window.scrollTo(0, 0)
                }}
                variant="contained"
                size="large"
                sx={{ width: '200px' }}
              >
                이전단계
              </Button>
            ) : null}

            {getCreateLevel === 5 ? null : (
              <>
                <div style={{ width: '20px' }} />
                <Button
                  onClick={() => {
                    if (getCreateLevel <= 5) {
                      setCreateLevel(getCreateLevel + 1)
                    } else {
                    }
                    javascript: window.scrollTo(0, 0)
                  }}
                  variant="contained"
                  size="large"
                  sx={{ width: '200px' }}
                >
                  다음단계
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default PublicCreateProject
