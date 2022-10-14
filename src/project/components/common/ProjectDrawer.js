import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { fontSize } from "@mui/system";
// import { Link } from 'react-router-dom';

export default function ProjectDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
    opened: "",
    selected: "",
  });

  const { projectId } = useParams();

  const history = createBrowserHistory();

  React.useEffect(() => {
    // setProjectId(10)
    const unlistenHistoryEvent = history.listen(({ action }) => {
      if (action === "POP") {
        navigate("/admin");
        setState({
          left: false,
          opened: "",
          selected: "",
        });
      }
    });
    return unlistenHistoryEvent;
  }, []);

  const handleClick = (e) => {
    if (state.opened === e.target.innerText) {
      setState({ ...state, opened: "" });
    } else {
      setState({ ...state, opened: e.target.innerText });
    }
  };

  const handleSelect = (e) => {
    setState({ ...state, selected: e.target.innerText });
    switch (e.target.innerText) {
      case "주문 취소":
        navigate(`/project/${projectId}/cancle`);
        break;
      case "정산 현황":
        navigate(`/project/${projectId}/calculate`);
        break;
      case "결제 대기":
        navigate(`/project/${projectId}/waiting`);
        break;
      case "결제 완료":
        navigate(`/project/${projectId}/complete`);
        break;
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navigate = useNavigate();

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2
        align="center"
        style={{
          color: "#00AEEF",
          fontSize: "20px",
          margin: 20,
          textAlign: "center",
        }}
      >
        LEISURETHAT
      </h2>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleClick}
            sx={state.opened === "회원" ? { bgcolor: "#F1FBFF" } : {}}
          >
            <ListItemIcon>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="프로젝트 관리" />
            {state.opened === "프로젝트 관리" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse
          in={state.opened === "프로젝트 관리"}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === "기존 제출 서류" ? (
                <ListItemText
                  primary="기존 제출 서류"
                  primaryTypographyProps={{
                    color: "#00AEEF",
                    variant: "body2",
                  }}
                />
              ) : (
                <ListItemText
                  primary="기존 제출 서류"
                  primaryTypographyProps={{
                    color: "black",
                    variant: "body2",
                  }}
                />
              )}
            </ListItemButton>

            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === "프로젝트 현횡" ? (
                <ListItemText
                  primary="프로젝트 현황"
                  primaryTypographyProps={{
                    color: "#00AEEF",
                    variant: "body2",
                  }}
                />
              ) : (
                <ListItemText
                  primary="프로젝트 현황"
                  primaryTypographyProps={{
                    color: "black",
                    variant: "body2",
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
            sx={state.opened === "주문 통합 관리" ? { bgcolor: "#F1FBFF" } : {}}
          >
            <ListItemIcon>
              <AccountTreeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="주문 통합 관리" />
            {state.opened === "주문 통합 관리" ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </ListItemButton>
        </ListItem>

        <Collapse
          in={state.opened === "주문 통합 관리"}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === "결제 완료" ? (
                <ListItemText
                  primary="결제 완료"
                  primaryTypographyProps={{
                    color: "#00AEEF",
                    variant: "body2",
                  }}
                />
              ) : (
                <ListItemText
                  primary="결제 완료"
                  primaryTypographyProps={{
                    color: "black",
                    variant: "body2",
                  }}
                />
              )}
            </ListItemButton>
            {/* <Link href="/admin/judge" underline="none"> */}
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === "결제 대기" ? (
                <ListItemText
                  primary="결제 대기"
                  primaryTypographyProps={{
                    color: "#00AEEF",
                    variant: "body2",
                  }}
                />
              ) : (
                <ListItemText
                  primary="결제 대기"
                  primaryTypographyProps={{
                    color: "black",
                    variant: "body2",
                  }}
                />
              )}
            </ListItemButton>
            {/* </Link> */}
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === "주문 취소" ? (
                <ListItemText
                  primary="주문 취소"
                  primaryTypographyProps={{
                    color: "#00AEEF",
                    variant: "body2",
                  }}
                />
              ) : (
                <ListItemText
                  primary="주문 취소"
                  primaryTypographyProps={{
                    color: "black",
                    variant: "body2",
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
            sx={state.opened === "정산" ? { bgcolor: "#F1FBFF" } : {}}
          >
            <ListItemIcon>
              <LibraryBooksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="정산" />
            {state.opened === "정산" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={state.opened === "정산"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 9 }} onClick={handleSelect}>
              {state.selected === "정산 현황" ? (
                <ListItemText
                  primary="정산 현황"
                  primaryTypographyProps={{
                    color: "#00AEEF",
                    variant: "body2",
                  }}
                />
              ) : (
                <ListItemText
                  primary="정산 현황"
                  primaryTypographyProps={{
                    color: "black",
                    variant: "body2",
                  }}
                />
              )}
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <div onClick={toggleDrawer("left", true)}>{props.children}</div>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
