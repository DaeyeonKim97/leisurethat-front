import { Button, Modal } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MainFundingProject from '../Main/MainFundingProject'
import {
  BaseBox,
  UnderLineBox,
  UnderLineContent,
  UnderLineContentBox,
  UnderLineContentsBox,
} from '../shared'
import ShippingAddressModal from './\bShippingAddressModal'

const BuyingInfo = ({ complete }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const fundingImgUrl = 'static/img/PublicMainFunding.png'

  const user = { name: 'test', email: 'user@mail.com', phone: '010-000-000' }
  const takeUser = {
    name: '홍길동',
    phone: '010-000-000',
    adress: '경기 성남시 분당구 판교역로 235   1층 113호',
    require: '문의 사항 남겨용',
  }

  return (
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
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  이름
                </UnderLineContent>
                <UnderLineContent>{user.name}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  이메일
                </UnderLineContent>
                <UnderLineContent>{user.email}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  휴대폰 번호
                </UnderLineContent>
                <UnderLineContent>{user.phone}</UnderLineContent>
              </UnderLineContentBox>
            </div>
          </div>
          <div>
            <UnderLineContentsBox>배송지 정보</UnderLineContentsBox>
            <div style={{ height: '230px' }}>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  수령인
                </UnderLineContent>
                <UnderLineContent>{takeUser.name}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  휴대폰 번호
                </UnderLineContent>
                <UnderLineContent>{takeUser.phone}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  배송지 주소
                </UnderLineContent>
                <UnderLineContent>{takeUser.adress}</UnderLineContent>
              </UnderLineContentBox>
              <UnderLineContentBox>
                <UnderLineContent
                  style={{ marginRight: '20px', width: '180px' }}
                >
                  배송 요청사항
                </UnderLineContent>
                {complete ? (
                  <UnderLineContent
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ alignSelf: 'center' }}>
                      {takeUser.require}
                    </span>
                    <Button
                      onClick={handleOpen}
                      variant="contained"
                      sx={{
                        width: '140px',
                        height: '30px',
                      }}
                    >
                      배송지 변경
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <ShippingAddressModal />
                    </Modal>
                  </UnderLineContent>
                ) : (
                  <UnderLineContent>{takeUser.require}</UnderLineContent>
                )}
              </UnderLineContentBox>
            </div>
          </div>
        </div>
      </div>
      {complete ? (
        <Link to={'/'}>
          <Button
            variant="contained"
            sx={{ width: '230px', height: '50px', marginTop: '30px' }}
          >
            확인 완료
          </Button>
        </Link>
      ) : null}
    </div>
  )
}

export default BuyingInfo
