import { Button, IconButton } from '@mui/material'
import * as React from 'react'
import styled from 'styled-components'
import HouseSidingIcon from '@mui/icons-material/HouseSiding'
import PoolIcon from '@mui/icons-material/Pool'
import GolfCourseIcon from '@mui/icons-material/GolfCourse'
import PhishingIcon from '@mui/icons-material/Phishing'
import MainMenuButton from '../components/commons/MainMenuButton'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`
const EventContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: purple;
  height: 100%;
  width: 600px;
`
const NoticeContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: tomato;
  height: 100%;
  width: 600px;
`

export default function PublicMain() {
  const contents = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div style={{ width: '100%' }}>
      <FlexContainer style={{ height: '315px' }}>123</FlexContainer>
      <FlexContainer style={{ height: '200px' }}>
        <MainMenuButton variant="outlined">
          <HouseSidingIcon sx={{ fontSize: '30px', mr: '10px' }} />
          캠핑
        </MainMenuButton>
        <MainMenuButton>
          <PoolIcon sx={{ fontSize: '30px', mr: '10px' }} />
          수상레저
        </MainMenuButton>
        <MainMenuButton>
          <GolfCourseIcon sx={{ fontSize: '30px', mr: '10px' }} />
          골프
        </MainMenuButton>
        <MainMenuButton>
          <PhishingIcon sx={{ fontSize: '30px', mr: '10px' }} />
          낚시
        </MainMenuButton>
        <MainMenuButton>
          <DirectionsBikeIcon sx={{ fontSize: '30px', mr: '10px' }} />
          자전거
        </MainMenuButton>
      </FlexContainer>
      <FlexContainer style={{ height: '1500px' }}>
        <FlexContainer
          style={{ height: '100%', width: '1150px', flexDirection: 'column' }}
        >
          <p
            style={{
              width: '100%',
              fontSize: '30px',
              fontWeight: '800',
              padding: '10px 0px',
              borderBottom: '1px solid rgba(0,0,0,0.3)',
            }}
          >
            펀딩 진행 중 프로젝트
          </p>
          <FlexContainer
            style={{
              width: '100%',
              height: '100%',
              display: 'grid',
              grid: 'Repeat(2, 60px)',
            }}
          >
            {contents.map((contents) => {
              return <div> {contents} </div>
            })}
          </FlexContainer>
          <FlexContainer style={{ width: '100%', height: '150px' }}>
            123
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer style={{ height: '600px' }}>
        <FlexContainer style={{ height: '100%', width: '1150px' }}>
          <EventContainer></EventContainer>
          <NoticeContainer></NoticeContainer>
        </FlexContainer>
      </FlexContainer>
    </div>
  )
}
