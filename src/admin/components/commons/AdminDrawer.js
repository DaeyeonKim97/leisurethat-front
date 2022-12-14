import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useNavigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export default function AdminDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
    opened: '',
    selected: '',
  })

  const history = createBrowserHistory()

  React.useEffect(() => {
    const unlistenHistoryEvent = history.listen(({ action }) => {
      if (action === 'POP') {
        navigate('/admin')
        setState({
          left: false,
          opened: '',
          selected: '',
        })
      }
    })
    return unlistenHistoryEvent
  }, [])

  const handleClick = (e) => {
    if (state.opened === e.target.innerText) {
      setState({ ...state, opened: '' })
    } else {
      setState({ ...state, opened: e.target.innerText })
    }
  }

  const handleSelect = (e) => {
    setState({ ...state, selected: e.target.innerText })
    switch (e.target.innerText) {
      case '?????? ??????':
        navigate('/admin/users')
        break
      case '????????? ??????':
        navigate('/admin/producers')
        break
      case '???????????? ?????? ??????':
        navigate('/admin/guide')
        break
      case '???????????? ?????? ??????':
        navigate('/admin/judge')
        break
      case '???????????? ????????????':
        navigate('/admin/pre-open')
        break
      case '???????????? ????????????':
        navigate('/admin/proceeding')
        break
      case '???????????? ????????????':
        navigate('/admin/giveup')
        break
      case '???????????? ????????????':
        navigate('/admin/ended')
        break
      case '????????? ????????????':
        navigate('/admin/refunded')
        break
      case '????????? ????????????':
        navigate('/admin/canceled')
        break
      case '?????? ????????? ????????????':
        navigate('/admin/canceled-forced')
        break
      case '????????? ????????????':
        navigate('/admin/givup')
        break
      case '????????? ????????? ????????????':
        navigate('/admin/notfunded')
        break
      case '????????? ????????????':
        navigate('/admin/completed')
        break
      case '?????? ??????':
        navigate('/admin/payment')
        break
      case '??????????????? ????????????':
        navigate('/admin/payment-state')
        break
      case '????????? ??????':
        navigate('/admin/outstanding')
        break
      case '???????????? ??????':
        navigate('/admin/refund')
        break
      case '?????? ??????':
        navigate('/admin/withdraw')
        break
      case '?????? ??????':
        navigate('/admin/calculate')
        break
      case 'FAQ':
        navigate('/admin/faq')
        break
      case '1:1 ??????':
        navigate('/admin/qna')
        break
      case '????????????':
        navigate('/admin/notice')
        break
      case '?????????':
        navigate('/admin/event')
        break
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const navigate = useNavigate()

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2
        align="center"
        style={{
          color: '#00AEEF',
          fontSize: '20px',
          margin: 20,
          textAlign: 'center',
        }}
      >
        LEISURETHAT
      </h2>

      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '??????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="??????" />
            {state.opened === '??????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={state.opened === '??????'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '?????? ??????' ? (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>

            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '????????? ??????' ? (
                <ListItemText
                  primary="????????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="????????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '????????????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <AccountTreeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="????????????" />
            {state.opened === '????????????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={state.opened === '????????????'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '???????????? ?????? ??????' ? (
                <ListItemText
                  primary="???????????? ?????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="???????????? ?????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            {/* <Link href="/admin/judge" underline="none"> */}
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '???????????? ?????? ??????' ? (
                <ListItemText
                  primary="???????????? ?????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="???????????? ?????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            {/* </Link> */}
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '???????????? ????????????' ? (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '???????????? ????????????' ? (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '???????????? ????????????' ? (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '???????????? ????????????' ? (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="???????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '???????????? ??????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <LibraryBooksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="???????????? ??????" />
            {state.opened === '???????????? ??????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse
          in={state.opened === '???????????? ??????'}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '????????? ????????????' ? (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '????????? ????????????' ? (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '?????? ????????? ????????????' ? (
                <ListItemText
                  primary="?????? ????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="?????? ????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '????????? ????????????' ? (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '????????? ????????? ????????????' ? (
                <ListItemText
                  primary="????????? ????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="????????? ????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '?????? ??? ????????? ????????????' ? (
                <ListItemText
                  primary="?????? ??? ????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="?????? ??? ????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '????????? ????????????' ? (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '??????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <CreditCardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="??????" />
            {state.opened === '??????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={state.opened === '??????'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '?????? ??????' ? (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '??????????????? ????????????' ? (
                <ListItemText
                  primary="??????????????? ????????????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="??????????????? ????????????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '????????? ??????' ? (
                <ListItemText
                  primary="????????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="????????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '??????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <CreditCardOffOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="??????" />
            {state.opened === '??????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={state.opened === '??????'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '???????????? ??????' ? (
                <ListItemText
                  primary="???????????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="???????????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '?????? ??????' ? (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '??????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <PaidOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="??????" />
            {state.opened === '??????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={state.opened === '??????'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '?????? ??????' ? (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="?????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '?????? ?????? ??????' ? (
                <ListItemText
                  primary="?????? ?????? ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="?????? ?????? ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '??????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <HelpOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="??????" />
            {state.opened === '??????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={state.opened === '??????'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === 'FAQ' ? (
                <ListItemText
                  primary="FAQ"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="FAQ"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === '1:1 ??????' ? (
                <ListItemText
                  primary="1:1 ??????"
                  primaryTypographyProps={{
                    color: '#00AEEF',
                    variant: 'body2',
                  }}
                />
              ) : (
                <ListItemText
                  primary="1:1 ??????"
                  primaryTypographyProps={{
                    color: 'black',
                    variant: 'body2',
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === '????????????' ? { bgcolor: '#F1FBFF' } : {}}
          >
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="????????????" />
            {state.opened === '????????????' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={state.opened === '????????????'} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
            {state.selected === '????????????' ? (
              <ListItemText
                primary="????????????"
                primaryTypographyProps={{
                  color: '#00AEEF',
                  variant: 'body2',
                }}
              />
            ) : (
              <ListItemText
                primary="????????????"
                primaryTypographyProps={{
                  color: 'black',
                  variant: 'body2',
                }}
              />
            )}
          </ListItemButton>
          <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
            {state.selected === '?????????' ? (
              <ListItemText
                primary="?????????"
                primaryTypographyProps={{
                  color: '#00AEEF',
                  variant: 'body2',
                }}
              />
            ) : (
              <ListItemText
                primary="?????????"
                primaryTypographyProps={{
                  color: 'black',
                  variant: 'body2',
                }}
              />
            )}
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  )

  return (
    <div>
      <React.Fragment key={'left'}>
        <div onClick={toggleDrawer('left', true)}>{props.children}</div>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
