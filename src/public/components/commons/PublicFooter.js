import * as React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
// import logoBig from ''

const FooterBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FooterContainer = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 200px;
`

const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  min-width: 1000px;
`

const FooterBot = styled.div`
  display: flex;
  font-size: 12px;
  min-width: 1000px;
  justify-content: space-between;
  margin-bottom: 50px;
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.5);
`

const ImgContainer = styled.img`
  margin-bottom: 20px;
`

const FooterRTitle = styled.div`
  margin: 30px 0;
  color: #00aeef;
  font-weight: 800;
`

const FooterRContents = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`

const FooterListContainer = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: flex-end;
`

const FooterListUL = styled.ul`
  list-style: none;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FooterListItem = styled.li`
  margin: 5px 0;
  color: rgba(0, 0, 0, 0.5);
`

const LinkIcon = styled.div`
  margin-right: 100px;
`
const Seperator = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: 0.5px solid rgba(1, 1, 1, 0.2);
`

export default function PublicFooter() {
  return (
    <FooterBigContainer>
      <FooterContainer>
        <ImgContainer src="static/img/Logo_big.png" />
        <FooterTop>
          <div>
            <FooterRTitle>투자위험고지</FooterRTitle>
            <FooterRContents>
              스타트업 투자는 원금 손실과 유동성 및 현금성에 대한 투자위험을
              가지고 있습니다.
              <br />
              투자 전에 투자위험고지를 꼭 확인해주세요. 투자위험고지 바로가기
              <br />
              <br />
              ㈜레저댓는 중개업(온라인소액투자중개 및 통신판매중개)을 영위하는
              플랫폼 제공자로 자금을 모집하는
              <br />
              당사자가 아닙니다. 따라서 투자손실의 위험을 보전하거나 리워드
              제공을 보장해 드리지 않으며 이에 대한 법적인
              <br />
              책임을 지지 않습니다.
              <br />
              <br />
              경기도 성남시 수정구 대왕판교로 815 기업지원허브 | 리워드
              000-0000-0000 | 투자 000-0000-0000, 000-0000-0000
            </FooterRContents>
          </div>
          <FooterListContainer>
            <FooterListUL>
              <FooterListItem>LEISURETHAT이란?</FooterListItem>
              <FooterListItem>FAQ</FooterListItem>
              <FooterListItem>공지사항</FooterListItem>
              <FooterListItem>문의하기</FooterListItem>
            </FooterListUL>
            <FooterListUL>
              <FooterListItem>회원가입 기본약관</FooterListItem>
              <FooterListItem>개인정보처리방침</FooterListItem>
              <FooterListItem>리워드 이용약관</FooterListItem>
            </FooterListUL>
          </FooterListContainer>
        </FooterTop>
      </FooterContainer>
      <Seperator />
      <FooterBot>
        <div>
          통신판매업신고 : 2022-성남수정-0000 | 사업자등록번호 : 000 - 00 -
          00000 | 대표자 : 김대연
          <br />
          벤처인증기업 : 제 20220000000 호
        </div>
        <LinkIcon>
          <a href="https://ko-kr.facebook.com/" target="_blank">
            <FacebookIcon sx={{ mr: '8px' }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon sx={{ mr: '8px' }} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <TwitterIcon sx={{ mr: '8px' }} />
          </a>
        </LinkIcon>
      </FooterBot>
    </FooterBigContainer>
  )
}
