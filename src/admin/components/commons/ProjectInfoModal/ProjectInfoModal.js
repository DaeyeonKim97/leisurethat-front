import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Divider } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1024,
  height: '80%',
  overflow: 'scroll',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

export default function ProjectInfoModal(props) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }
  const [info, setInfo] = useState()

  React.useEffect(() => {
    if (props.projectId) {
      axios
        .get(`http://localhost:8001/project-detail/${props.projectId}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          },
        })
        .then((res) => {
          console.log(res.data)
          setInfo(res.data.results.project)
        })
    }
  }, [])

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {props.children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            프로젝트 상세정보
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <div style={{ padding: '10px' }}>
            {info ? (
              <div>
                <div>
                  <div style={{ margin: '20px 0', fontSize: '25px' }}>
                    프로젝트 정보
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div style={{ width: '45%' }}>
                      프로젝트 대표 이미지
                      <div>
                        <img
                          src={info.project.projectAttachment.downloadAddress}
                          width={'100%'}
                        />
                        <div>
                          원본 파일명 :{' '}
                          {info.project.projectAttachment.originalName}
                        </div>
                        <div>
                          업로드 시간 :{' '}
                          {info.project.projectAttachment.uploadDate}
                        </div>
                      </div>
                    </div>
                    <div style={{ width: '45%' }}>
                      <div>프로젝트 번호 : {info.project.projectId}</div>
                      <div>프로젝트 이름 : {info.project.projectName}</div>
                      <div>프로젝트 목표금액 : {info.project.targetAmount}</div>
                      <div>
                        프로젝트 카테고리 : {info.project.projectCategory.name}
                      </div>
                      <div>프로젝트 url : {info.project.projectUrl}</div>
                      <div>
                        프로젝트 시작일 : {info.project.projectStartDate}
                      </div>
                      <div>프로젝트 종료일 : {info.project.projectEndDate}</div>
                      <div>문의 번호 : {info.project.inquiryPhone}</div>
                      <div>문의 이메일 : {info.project.inquiryEmail}</div>
                      <div>
                        환불 정보
                        <div
                          style={{
                            backgroundColor: '#e2e2e2',
                            whiteSpace: 'pre',
                            padding: '20px',
                            overflow: 'scroll',
                          }}
                        >
                          {info.project.refundPolicy}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ margin: '20px 0', fontSize: '25px' }}>
                    상품 리스트
                  </div>
                  {info.productList.map((product, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ width: '45%' }}>
                        <div>상품 아이디 : {product.productId}</div>
                        <div>상품 이름 : {product.productName}</div>
                        <div>
                          상품 정보 고시
                          <div
                            style={{
                              backgroundColor: '#e2e2e2',
                              whiteSpace: 'pre',
                              padding: '20px',
                              overflow: 'scroll',
                            }}
                          >
                            {product.productDetail}
                          </div>
                        </div>
                      </div>
                      <div style={{ width: '45%' }}>
                        <img
                          src={product.productAttachment.downloadAddress}
                          width={'100%'}
                        />
                        <div>
                          원본 파일명 : {product.productAttachment.originalName}
                        </div>
                        <div>
                          업로드 시간 : {product.productAttachment.uploadDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ margin: '20px 0', fontSize: '25px' }}>
                    리워드 리스트
                  </div>
                  {info.rewardList.map((reward, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ width: '45%' }}>
                        <div>리워드 이름 : {reward.rewardTitle}</div>

                        <div>
                          리워드 상세 내용
                          <div
                            style={{
                              backgroundColor: '#e2e2e2',
                              whiteSpace: 'pre',
                              padding: '20px',
                              overflow: 'scroll',
                            }}
                          >
                            {reward.rewardContent}
                          </div>
                          <div>리워드 가격 : {reward.rewardPrice}</div>
                          <div>리워드 최대 수량 : {reward.rewardMaxCount}</div>
                          <div>리워드 배송비 : {reward.rewardFee}</div>
                          <div>리워드 추가 배송비 : {reward.rewardFeeFar}</div>
                          <div>리워드 배송 예정일 : {reward.rewardDate}</div>
                          <div>
                            1회 최대 주문 개수 : {reward.rewardServeCount}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ margin: '20px 0', fontSize: '25px' }}>
                    스토리 리스트
                  </div>
                  {info.storyList.map((story, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ width: '45%' }}>
                        <div>스토리 아이디 : {story.storyId}</div>
                        <div>스토리 이름 : {story.storyTitle}</div>

                        <div>
                          스토리 내용
                          <div
                            style={{
                              backgroundColor: '#e2e2e2',
                              whiteSpace: 'pre',
                              padding: '20px',
                              overflow: 'scroll',
                            }}
                          >
                            {story.storyContent}
                          </div>
                        </div>
                      </div>
                      <div style={{ width: '45%' }}>
                        <img
                          src={story.storyAttachment.downloadAddress}
                          width={'100%'}
                        />
                        <div>
                          원본 파일명 : {story.storyAttachment.originalName}
                        </div>
                        <div>
                          업로드 시간 : {story.storyAttachment.uploadDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ margin: '20px 0', fontSize: '25px' }}>
                  계좌정보
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ width: '45%' }}>
                    <img
                      src={info.accountInfo.accountAttachment.downloadAddress}
                      width={'100%'}
                    />
                    <div>
                      원본 파일명 :{' '}
                      {info.accountInfo.accountAttachment.originalName}
                    </div>
                    <div>
                      업로드 시간 :{' '}
                      {info.accountInfo.accountAttachment.uploadDate}
                    </div>
                  </div>
                  <div style={{ width: '45%' }}>
                    <div>계좌 아이디 : {info.accountInfo.accountId}</div>
                    <div>계좌 은행 : {info.accountInfo.bank.name}</div>
                    <div>계좌 번호 : {info.accountInfo.accountNumber}</div>
                  </div>
                </div>

                <div style={{ margin: '20px 0', fontSize: '25px' }}>
                  사업자정보
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ width: '45%' }}>
                    <div>
                      사업자 정보 아이디 : {info.businessInfo.businessInfoId}
                    </div>
                    <div>
                      전자 세금 계산서 이메일 :{' '}
                      {info.businessInfo.taxInvoiceMail}
                    </div>
                  </div>
                  <div style={{ width: '45%' }}>
                    <img
                      src={
                        info.businessInfo.businessInfoAttachment.downloadAddress
                      }
                      width={'100%'}
                    />
                    <div>
                      원본 파일명 :{' '}
                      {info.businessInfo.businessInfoAttachment.originalName}
                    </div>
                    <div>
                      업로드 시간 :{' '}
                      {info.businessInfo.businessInfoAttachment.uploadDate}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Box>
      </Modal>
    </div>
  )
}
