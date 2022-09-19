import { Button } from '@mui/material'
import { height } from '@mui/system'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MainFundingProject from '../components/Main/MainFundingProject'
import { BaseBox, UnderLineBox } from '../components/shared'

const UnderLineContentsBox = styled(UnderLineBox)`
  font-size: 26px;
  margin-bottom: 10px;
  border-color: rgba(0, 0, 0, 1);
  border-width: 2px;
`
const UnderLineContentBox = styled(UnderLineBox)`
  font-size: 18px;
  padding: 10px;
  justify-content: flex-start;
`

const Content = styled.div`
  margin-right: 20px;
  width: 100%;
`

const PublicBuyComplete = () => {
  const fundingImgUrl = 'static/img/PublicMainFunding.png'

  const user = { name: 'test', email: 'user@mail.com', phone: '010-000-000' }
  const takeUser = {
    name: '홍길동',
    phone: '010-000-000',
    adress: '경기 성남시 분당구 판교역로 235   1층 113호',
    require: '문의 사항 남겨용',
  }

  return (
    <BaseBox>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '60px' }}>
            <UnderLineContentsBox>프로젝트</UnderLineContentsBox>
            <MainFundingProject
              contents={'데이터 들어올 공간'}
              img={fundingImgUrl}
            />
          </div>
          <div style={{ width: '795px' }}>
            <div>
              <UnderLineContentsBox>구매자 정보</UnderLineContentsBox>
              <div style={{ height: '160px' }}>
                <UnderLineContentBox>
                  <Content style={{ marginRight: '20px', width: '180px' }}>
                    이름
                  </Content>
                  <Content>{user.name}</Content>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <Content style={{ marginRight: '20px', width: '180px' }}>
                    이메일
                  </Content>
                  <Content>{user.email}</Content>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <Content style={{ marginRight: '20px', width: '180px' }}>
                    휴대폰 번호
                  </Content>
                  <Content>{user.phone}</Content>
                </UnderLineContentBox>
              </div>
            </div>
            <div>
              <UnderLineContentsBox>배송지 정보</UnderLineContentsBox>
              <div style={{ height: '230px' }}>
                <UnderLineContentBox>
                  <Content style={{ marginRight: '20px', width: '180px' }}>
                    수령인
                  </Content>
                  <Content>{takeUser.name}</Content>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <Content style={{ marginRight: '20px', width: '180px' }}>
                    휴대폰 번호
                  </Content>
                  <Content>{takeUser.phone}</Content>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <Content style={{ marginRight: '20px', width: '180px' }}>
                    배송지 주소
                  </Content>
                  <Content>{takeUser.adress}</Content>
                </UnderLineContentBox>
                <UnderLineContentBox>
                  <Content style={{ marginRight: '20px', width: '180px' }}>
                    배송 요청사항
                  </Content>
                  <Content>{takeUser.require}</Content>
                </UnderLineContentBox>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/'}>
          <Button
            variant="contained"
            sx={{ width: '230px', height: '50px', marginTop: '30px' }}
          >
            확인 완료
          </Button>
        </Link>
      </div>
    </BaseBox>
  )
}

export default PublicBuyComplete
