import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";

import FundingProjectTab from "./FundingProjectTab";
import MakeProjectTab from "./MakeProjectTab";
import MypageSetTab from "./MypageSetTab";

export default function MypageTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        borderBottom: "1px solid #ccc",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="펀딩한 프로젝트" value="1" sx={{ width: "200px" }} />
            <Tab label="제작한 프로젝트" value="2" sx={{ width: "200px" }} />
            <Tab label="설정" value="3" sx={{ width: "200px" }} />
          </Tabs>
        </Box>
        <TabPanel value="1">
          <FundingProjectTab />
        </TabPanel>
        <TabPanel value="2">
          <MakeProjectTab />
        </TabPanel>
        <TabPanel value="3">
          <MypageSetTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
