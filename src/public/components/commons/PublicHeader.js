import * as React from 'react'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
  flex-grow: '1';
`
const Bar = styled.div`
  position: static;
  color: white;
  border-bottom: 1.5px solid rgba(1, 1, 1, 0.2);
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuBox = styled.div`
  right: 0;
`

const Search = styled.form`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  svg {
    height: 25px;
  }
`

const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  padding: 9px 90px;
  padding-left: 30px;
  margin-right: 5px;
  z-index: -1;
  color: black;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
`

export default function PublicHeader() {
  const [isLogin, setLogin] = React.useState(false)
  //true false 여부에 따라서 로그인되고 안되고의 레이아웃 결정

  const [searchOpen, setSerchOpen] = React.useState(false)
  const inputAnimation = useAnimation()
  //searchOpen state는 서치가 열리고 안열리고 여부를 판단함.
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      })
    } else {
      inputAnimation.start({
        scaleX: 1,
      })
    }
    setSerchOpen((p) => !p)
  }

  return (
    <HeaderContainer>
      <Bar position="static" color="public">
        <FlexBox>
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{
              flexGrow: 1,
              fontSize: '32px',
              ml: '33px',
              mr: '40px',
            }}
            style={{ alignContent: 'bottom' }}
          >
            <Link to={'/'}>LEISURETHAT</Link>
          </Typography>
          <MenuBox>
            <Button
              variant="text"
              style={{
                color: 'black',
                fontWeight: 'bolder',
              }}
            >
              홈
            </Button>
            <Button
              variant="text"
              style={{
                color: 'black',
                fontWeight: 'bolder',
              }}
            >
              소개
            </Button>
            <Button
              variant="text"
              style={{
                color: 'black',
                fontWeight: 'bolder',
              }}
            >
              펀딩
            </Button>
            <Button
              variant="text"
              style={{
                color: 'black',
                fontWeight: 'bolder',
              }}
            >
              공지사항
            </Button>
          </MenuBox>
        </FlexBox>
        <FlexBox>
          <Search>
            <Input
              initial={{ scaleX: 0 }}
              animate={inputAnimation}
              transition={{ type: 'linear' }}
              placeholder="프로젝트 검색"
            />
            <motion.svg
              style={{
                width: '50px',
                cursor: 'pointer',
              }}
              onClick={toggleSearch}
              transition={{ type: 'linear' }}
            >
              <SearchIcon style={{ color: 'black' }} />
            </motion.svg>
          </Search>

          {isLogin ? (
            <div>
              <Button
                variant="outlined"
                sx={{ ml: '30px', width: '100px', fontWeight: '800' }}
              >
                <Link to={'/user/login'}>로그인</Link>
              </Button>
              <Button
                variant="contained"
                sx={{
                  mr: '40px',
                  ml: '15px',
                  width: '100px',
                  fontWeight: '800',
                }}
              >
                <Link to={'user/signup'}>회원가입</Link>
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="outlined" sx={{ mx: '30px' }}>
                <Link to={'user/createproject'}>프로젝트 만들기</Link>
              </Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
              >
                <AccountCircle />
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="primary"
                style={{ marginRight: '50px' }}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
          )}
        </FlexBox>
      </Bar>
    </HeaderContainer>
  )
}
