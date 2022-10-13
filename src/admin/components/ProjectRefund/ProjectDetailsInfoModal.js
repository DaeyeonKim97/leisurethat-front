/** @format */

import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CloseIcon from '@mui/icons-material/Close'
import proImg from './16.PNG'
import { Button } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

export default function ProjectDetailsInfoModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            marginBottom={4}
            style={{ borderBottom: '1px solid #808080' }}
          >
            <div
              style={{
                display: 'flex',
              }}
            >
              프로젝트 상세정보
              <div
                style={{
                  marginLeft: 'auto',
                }}
              >
                <Button>
                  <CloseIcon />
                </Button>
              </div>
            </div>
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid
              item
              xs={4}
              md={4}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                제작자 정보
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              md={7}
              style={{
                marginLeft: '5%',
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                메이커 정보
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} style={{ padding: '0 0 0 0' }}>
              <Item
                style={{ padding: '0 0 0 0', border: '', textAlign: 'left' }}
              >
                <img
                  src={proImg}
                  style={{
                    width: '280px',
                    height: '240px',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="label"
                  component="label"
                  fontSize={14}
                >
                  프로젝트 명
                </Typography>
              </Item>
            </Grid>
            <Grid
              item
              xs={6}
              md={7}
              style={{
                marginLeft: '5%',
                marginBottom: '1%',
                padding: '0 0 0 0 ',
              }}
            >
              <Item>
                <Grid borderBottom={'1px solid #808080'}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '30%',
                      marginBottom: '2%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      이름
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: 'auto',
                      marginBottom: '1%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      데이터 삽입 김길동
                    </Typography>
                  </div>
                </Grid>
                <Grid borderBottom={'1px solid #808080'} marginTop={1}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '30%',
                      marginBottom: '1%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      이메일
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: 'auto',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      데이터 삽입 Test@naver.com
                    </Typography>
                  </div>
                </Grid>
                <Grid marginTop={1}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '30%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      휴대폰 번호
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: 'auto',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      데이터 삽입 010-3232-0000
                    </Typography>
                  </div>
                </Grid>
              </Item>
              <Grid
                style={{
                  marginLeft: '1%',
                  marginBottom: '1%',
                  marginTop: '1%',
                  borderBottom: '1px solid #808080',
                }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  marginTop={1}
                >
                  리워드 현황
                </Typography>
              </Grid>
              <Item>
                <Grid borderBottom={'1px solid #808080'}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '20%',
                      marginBottom: '2%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      프로젝트 명
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '80%',
                      marginBottom: '1%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      데이터 삽입 프로젝트명
                    </Typography>
                  </div>
                </Grid>

                <Grid borderBottom={'1px solid #808080'} marginTop={1}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '20%',
                      marginBottom: '1%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      시작일
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '30%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      2022-06-01
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '20%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      종료일
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '30%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      2022-09-01
                    </Typography>
                  </div>
                </Grid>

                <Grid marginTop={1}>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '20%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      모집 금액
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '30%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      1,000,000원
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '20%',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      참여인원
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: 'auto',
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="label"
                      component="label"
                      fontSize={14}
                    >
                      데이터 삽입 20명
                    </Typography>
                  </div>
                </Grid>
              </Item>
            </Grid>
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                borderBottom={1}
              >
                결제 정보
              </Typography>
              <Grid
                marginTop={1}
                borderBottom={1}
                style={{ borderBottom: '1px solid #808080' }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',

                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    Pay 결제
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '30%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    1,500,000원
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    10건
                  </Typography>
                </div>
              </Grid>
              <Grid marginTop={1} borderBottom={'1px solid #808080'}>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',
                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    카드 결제
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '30%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    1,000,000원
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    10건
                  </Typography>
                </div>
              </Grid>
              <Grid marginTop={1}>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',
                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    총 펀딩 금액
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '30%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    2,500,000원
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              md={5.5}
              style={{
                marginLeft: '5%',
                marginBottom: '1%',
                borderBottom: '1px solid #808080',
                paddingLeft: '0',
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                borderBottom={1}
              >
                결제 현황
              </Typography>
              <Grid borderBottom={'1px solid #808080'} marginTop={1}>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',
                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    모집 금액
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '30%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    3.000,000원
                  </Typography>
                </div>
              </Grid>
              <Grid borderBottom={'1px solid #808080'} marginTop={1}>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',
                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    미 결제
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '30%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    1,5000,000원
                  </Typography>
                </div>
              </Grid>
              <Grid marginTop={1}>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20%',
                    marginBottom: '1%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    총 모집 금액
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    width: '30%',
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="label"
                    component="label"
                    fontSize={14}
                  >
                    4,000,000원
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={4} md={12}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button variant="contained" onClick={handleClose}>
                  확인
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
