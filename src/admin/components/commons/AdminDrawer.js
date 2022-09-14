import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Link from '@mui/material/Link';
import { useNavigate} from 'react-router-dom';
import { createBrowserHistory } from "history";
// import { Link } from 'react-router-dom';

export default function AdminDrawer(props) {

  
  const [state, setState] = React.useState({
    left: false,
    opened: "회원",
    selected: "회원 조회"
  });

  const history = createBrowserHistory();

  React.useEffect(()=>{
    const unlistenHistoryEvent = history.listen(({ action }) => {
      if (action === "POP") {
        navigate('/admin')
        setState({
          left:false,
          opened: "회원",
          selected: "회원 조회"
        })
      }
    });

    return unlistenHistoryEvent;
  },[])
  
  const handleClick = (e) => {
    if(state.opened === e.target.innerText){
      setState({ ...state, opened: "" });
    }
    else{
      setState({ ...state, opened: e.target.innerText});
    }
  };
  
  const handleSelect = (e) => {
    setState({...state, selected: e.target.innerText});
    switch(e.target.innerText){
      case "회원 조회":
        navigate('/admin/users');
        break;
      case "제작자 조회":
        navigate('/admin/producers');
        break;
      case "프로젝트 등록 안내":
        navigate('/admin/guide');
        break;
      case "프로젝트 등록 심사":
        navigate('/admin/judge');
        break;
      case "오픈예정 프로젝트":
        navigate('/admin/judge-open');
        break;
      case "진행중인 프로젝트":
        navigate('/admin/judge-engaging');
        break;
      case "프로젝트 포기승인":
        navigate('/admin/judge-giveup');
        break;
      case "진행마감 프로젝트":
        navigate('/admin/ended');
        break;
      case "반려된 프로젝트":
        navigate('/admin/refunded');
        break;
      case "취소된 프로젝트":
        navigate('/admin/canceled');
        break;
      case "강제 종료된 프로젝트":
        navigate('/admin/canceled-forced');
        break;
      case "포기된 프로젝트":
        navigate('/admin/givup');
        break;
      case "미달성 종료된 프로젝트":
        navigate('/admin/notfunded');
        break;
      case "완료된 프로젝트":
        navigate('/admin/completed');
        break;
      case "결제 현황":
        navigate('/admin/payment');
        break;
      case "프로젝트별 결제 현황":
        navigate('/admin/payment-state');
        break;
      case "미결제 현황":
        navigate('/admin/outstanding');
        break;
      case "프로젝트 환불":
        navigate('/admin/refund');
        break;
      case "주문 취소":
        navigate('/admin/withdraw');
        break;
      case "정산 신청":
        navigate('/admin/calculate');
        break;
      case "FAQ":
        navigate('/admin/faq');
        break;
      case "1:1 문의":
        navigate('/admin/qna');
        break;
      case "공지사항":
        navigate('/admin/notice');
        break;
      case "이벤트":
        navigate('/admin/event');
        break;
    }
    
  }
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setState({ ...state, [anchor]: open});
  };

  const navigate = useNavigate();
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        
            <List>
              <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={state.opened==="회원"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <PersonOutlineOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='회원' />
                      {state.opened==="회원" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>

              <Collapse in={state.opened==="회원"} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                  <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                    {state.selected === "회원 조회"?
                      <ListItemText primary="회원 조회"
                        primaryTypographyProps={{
                            color: '#00AEEF',
                            variant: 'body2',
                        }}
                      />
                    :
                      <ListItemText primary="회원 조회"
                        primaryTypographyProps={{
                            color: 'black',
                            variant: 'body2',
                        }}
                      />
                    }
                  </ListItemButton>
                  
                  <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                    {state.selected === "제작자 조회"?
                      <ListItemText primary="제작자 조회"
                        primaryTypographyProps={{
                            color: '#00AEEF',
                            variant: 'body2',
                        }}
                      />
                    :
                      <ListItemText primary="제작자 조회"
                        primaryTypographyProps={{
                            color: 'black',
                            variant: 'body2',
                        }}
                      />
                    }
                  </ListItemButton>
                </List>
              </Collapse>

              <Divider/>
              <ListItem disablePadding >
                  <ListItemButton onClick={handleClick} sx={state.opened==="프로젝트"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <AccountTreeOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='프로젝트' />
                      {state.opened==="프로젝트" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>

              <Collapse in={state.opened==="프로젝트"} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "프로젝트 등록 안내"?
                        <ListItemText primary="프로젝트 등록 안내"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="프로젝트 등록 안내"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    {/* <Link href="/admin/judge" underline="none"> */}
                      <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                        {state.selected === "프로젝트 등록 심사"?
                          <ListItemText primary="프로젝트 등록 심사"
                            primaryTypographyProps={{
                                color: '#00AEEF',
                                variant: 'body2',
                            }}
                          />
                        :
                          <ListItemText primary="프로젝트 등록 심사"
                            primaryTypographyProps={{
                                color: 'black',
                                variant: 'body2',
                            }}
                          />
                        }
                      </ListItemButton>
                    {/* </Link> */}
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "오픈예정 프로젝트"?
                        <ListItemText primary="오픈예정 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="오픈예정 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "진행중인 프로젝트"?
                        <ListItemText primary="진행중인 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="진행중인 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "프로젝트 포기승인"?
                        <ListItemText primary="프로젝트 포기승인"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="프로젝트 포기승인"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "진행마감 프로젝트"?
                        <ListItemText primary="진행마감 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="진행마감 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                </List>
              </Collapse>

              <Divider/>
              <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={state.opened==="프로젝트 로그"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <LibraryBooksOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='프로젝트 로그' />
                      {state.opened==="프로젝트 로그" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>

              <Collapse in={state.opened==="프로젝트 로그"} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                    {state.selected === "반려된 프로젝트"?
                      <ListItemText primary="반려된 프로젝트"
                        primaryTypographyProps={{
                            color: '#00AEEF',
                            variant: 'body2',
                        }}
                      />
                    :
                      <ListItemText primary="반려된 프로젝트"
                        primaryTypographyProps={{
                            color: 'black',
                            variant: 'body2',
                        }}
                      />
                    }
                  </ListItemButton> 
                  <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "취소된 프로젝트"?
                        <ListItemText primary="취소된 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="취소된 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "강제 종료된 프로젝트"?
                        <ListItemText primary="강제 종료된 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="강제 종료된 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "포기된 프로젝트"?
                        <ListItemText primary="포기된 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="포기된 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "미달성 종료된 프로젝트"?
                        <ListItemText primary="미달성 종료된 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="미달성 종료된 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "결제 후 종료된 프로젝트"?
                        <ListItemText primary="결제 후 종료된 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="결제 후 종료된 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "완료된 프로젝트"?
                        <ListItemText primary="완료된 프로젝트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="완료된 프로젝트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                </List>
              </Collapse>

              <Divider/>
              <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={state.opened==="결제"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <CreditCardOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='결제' />
                      {state.opened==="결제" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>
              <Collapse in={state.opened==="결제"} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "결제 현황"?
                        <ListItemText primary="결제 현황"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="결제 현황"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "프로젝트별 결제현황"?
                        <ListItemText primary="프로젝트별 결제현황"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="프로젝트별 결제현황"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "미결제 현황"?
                        <ListItemText primary="미결제 현황"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="미결제 현황"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                </List>
              </Collapse>

              <Divider/>
              <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={state.opened==="환불"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <CreditCardOffOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='환불' />
                      {state.opened==="환불" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>
              <Collapse in={state.opened==="환불"} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "프로젝트 환불"?
                        <ListItemText primary="프로젝트 환불"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="프로젝트 환불"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "주문 취소"?
                        <ListItemText primary="주문 취소"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="주문 취소"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                </List>
              </Collapse>

              <Divider/>
              <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={state.opened==="정산"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <PaidOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='정산' />
                      {state.opened==="정산" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>
              <Collapse in={state.opened==="정산"} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "정산 신청"?
                        <ListItemText primary="정산 신청"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="정산 신청"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "계좌 변경 신청"?
                        <ListItemText primary="계좌 변경 신청"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="계좌 변경 신청"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                </List>
              </Collapse>

              <Divider/>
              <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={state.opened==="문의"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <HelpOutlineOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='문의' />
                      {state.opened==="문의" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>
              <Collapse in={state.opened==="문의"} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "FAQ"?
                        <ListItemText primary="FAQ"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="FAQ"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "1:1 문의"?
                        <ListItemText primary="1:1 문의"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="1:1 문의"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                </List>
              </Collapse>

              <Divider/>
              <ListItem disablePadding>
                  <ListItemButton onClick={handleClick} sx={state.opened==="정보제공"?{bgcolor:'#F1FBFF'}:{}}>
                      <ListItemIcon>
                        <InfoOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary='정보제공' />
                      {state.opened==="정보제공" ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
              </ListItem>
            </List>
            <Collapse in={state.opened==="정보제공"} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                  <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "공지사항"?
                        <ListItemText primary="공지사항"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="공지사항"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
                      {state.selected === "이벤트"?
                        <ListItemText primary="이벤트"
                          primaryTypographyProps={{
                              color: '#00AEEF',
                              variant: 'body2',
                          }}
                        />
                      :
                        <ListItemText primary="이벤트"
                          primaryTypographyProps={{
                              color: 'black',
                              variant: 'body2',
                          }}
                        />
                      }
                    </ListItemButton>
                </List>
            </Collapse>
      </Box>
    );
  
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
    );
  }