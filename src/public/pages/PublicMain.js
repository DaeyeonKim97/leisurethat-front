import * as React from 'react'
import styled from 'styled-components'
import HouseSidingIcon from '@mui/icons-material/HouseSiding'
import PoolIcon from '@mui/icons-material/Pool'
import GolfCourseIcon from '@mui/icons-material/GolfCourse'
import PhishingIcon from '@mui/icons-material/Phishing'
import MainMenuButton from '../components/commons/MainMenuButton'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import { height } from '@mui/system'
import MainAdditional from '../components/Main/MainAdditional'
import MainFundingProject from '../components/Main/MainFundingProject'
import { Pagination } from '@mui/material'
import { UnderLineBox } from '../components/shared'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerButton = styled.div`
  position: absolute;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 50px;
  z-index: 10;
`
const BannerContainer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 312px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url(${(p) => p.bgphoto});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -20;
`
const BannerContents = styled.div`
  font-size: 64px;
  color: white;
  margin-left: 135px;
  margin-top: 80px;
  font-weight: bolder;
  line-height: 70px;
  z-index: 10;
`
const BannerVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
    }
  },
}
const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const GridContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
`

export default function PublicMain() {
  const [[page, direction], setPage] = React.useState([0, 0])
  const [getCategory, setCategory] = React.useState(false)
  const [getCategorySort, setCategorySort] = React.useState('')

  const fundingMap = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const fundingImgUrl = 'static/img/PublicMainFunding.png'
  const bannerImg = [
    'static/img/PublicMainTop.png',
    'static/img/PublicMainTop.png',
    'static/img/PublicMainTop.png',
  ]
  const bottomMap = [1, 2, 3]

  const imageIndex = wrap(0, bannerImg.length, page)
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div style={{ width: '100%' }}>
      <FlexContainer style={{ height: '315px' }}>
        <BannerButton
          style={{ left: '10px', transform: 'scale(-1)' }}
          onClick={() => paginate(1)}
        >
          {'‣'}
        </BannerButton>
        <AnimatePresence initial={false} custom={direction}>
          <BannerContainer
            key={page}
            bgphoto={bannerImg[imageIndex]}
            custom={direction}
            variants={BannerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          >
            <BannerContents>
              LEISURETHAT
              <br />
              기획전 절찬 모집 중
            </BannerContents>
          </BannerContainer>
        </AnimatePresence>
        <BannerButton style={{ right: '10px' }} onClick={() => paginate(-1)}>
          {'‣'}
        </BannerButton>
      </FlexContainer>
      <FlexContainer style={{ height: '200px' }}>
        <MainMenuButton variant="outlined">
          <div
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            onClick={() => {
              setCategorySort(1)
            }}
          ></div>
          <HouseSidingIcon
            sx={{ fontSize: '30px', mr: '10px', alignSelf: 'center' }}
          />
          캠핑
        </MainMenuButton>
        <MainMenuButton>
          <div
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            onClick={() => {
              setCategorySort(2)
            }}
          ></div>
          <PoolIcon sx={{ fontSize: '30px', mr: '10px' }} />
          수상레저
        </MainMenuButton>
        <MainMenuButton>
          <div
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            onClick={() => {
              setCategorySort(3)
            }}
          ></div>
          <GolfCourseIcon sx={{ fontSize: '30px', mr: '10px' }} />
          골프
        </MainMenuButton>
        <MainMenuButton>
          <div
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            onClick={() => {
              setCategorySort(4)
            }}
          ></div>
          <PhishingIcon sx={{ fontSize: '30px', mr: '10px' }} />
          낚시
        </MainMenuButton>
        <MainMenuButton>
          <div
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            onClick={() => {
              setCategorySort(5)
            }}
          ></div>
          <DirectionsBikeIcon sx={{ fontSize: '30px', mr: '10px' }} />
          자전거
        </MainMenuButton>
      </FlexContainer>
      <FlexContainer style={{ height: '1500px' }}>
        <FlexContainer
          style={{ height: '100%', width: '1150px', flexDirection: 'column' }}
        >
          <UnderLineBox
            style={{
              marginBottom: '10px',
            }}
          >
            <p
              style={{
                fontSize: '30px',
                fontWeight: '800',
              }}
            >
              {getCategorySort === 0 ? (
                <div>펀딩 진행 중 프로젝트</div>
              ) : getCategorySort === 1 ? (
                <div>캠핑 관련 프로젝트</div>
              ) : getCategorySort === 2 ? (
                <div>수상레저 관련 프로젝트</div>
              ) : getCategorySort === 3 ? (
                <div>골프 관련 프로젝트</div>
              ) : getCategorySort === 4 ? (
                <div>낚시 관련 프로젝트</div>
              ) : getCategorySort === 5 ? (
                <div>자전거 관련 프로젝트</div>
              ) : (
                <div>펀딩 진행 중 프로젝트</div>
              )}
            </p>
            <p
              onClick={() => {
                setCategory(!getCategory)
              }}
              style={{
                fontSize: '17px',
                textDecorationLine: 'underline',
                fontWeight: 'normal',
                color: '#00AEEF',
                cursor: 'pointer',
              }}
            >
              더 보기
            </p>
          </UnderLineBox>
          <FlexContainer style={{ width: '100%', height: '100%' }}>
            <GridContainer>
              {fundingMap.map((content) => (
                <MainFundingProject
                  key={content}
                  contents={content}
                  img={fundingImgUrl}
                />
              ))}
            </GridContainer>
          </FlexContainer>
          <FlexContainer style={{ width: '100%', height: '150px' }}>
            {getCategory ? <Pagination count={10} color="primary" /> : null}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      {getCategory ? null : (
        <FlexContainer style={{ height: '600px' }}>
          <FlexContainer style={{ height: '100%', width: '1150px' }}>
            <MainAdditional title="이벤트" content={bottomMap} />
            <div style={{ width: '130px' }} />
            <MainAdditional title="공지사항" content={bottomMap} />
          </FlexContainer>
        </FlexContainer>
      )}
    </div>
  )
}
