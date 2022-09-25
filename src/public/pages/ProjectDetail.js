import * as React from 'react'
import { Tabs, Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import DetailStory from '../components/projectDetail/story/DetailStory'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function ProjectDetail(props) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${'https://previews.123rf.com/images/mariakraynova/mariakraynova1405/mariakraynova140500426/28717325-%EB%A7%91%EA%B3%A0-%ED%91%B8%EB%A5%B8-%EB%B0%94%EB%8B%A4%EC%97%90-%EB%96%A0%EC%9E%88%EB%8A%94-%ED%92%8D%EC%84%A0-%EB%85%B8%EB%9E%80%EC%83%89-%EB%82%B4%EB%B6%80-%ED%8A%9C%EB%B8%8C.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: 220,
            opacity: 1,
          }}
        ></div>
        <div style={{ position: 'absolute', top: '30%', left: 60 }}>
          <Typography variant="h3" color={'white'}>
            단 1초만에 구명튜브로 변신
          </Typography>
          <Typography variant="h6" color={'white'} style={{ marginTop: 15 }}>
            수상레저의 수호신, 에스튜브!
          </Typography>
        </div>
      </div>
      <section style={{ display: 'flex' }}>
        <Box sx={{ flexGrow: 1, p: 4 }}>
          <Typography variant="h2" style={{ marginTop: 30 }}>
            단 1초만에 구명튜브로 변신
          </Typography>
          <Typography variant="h4" style={{ marginTop: 30 }}>
            수상레저의 수호신 에스튜브!
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
              marginBottom: '12px',
            }}
          >
            <div style={{ margin: '5px' }}>
              <b style={{ fontWeight: 'bold', color: '#00AEEF' }}>
                프로젝트 시작일
              </b>{' '}
              2022-09-01
            </div>
            <div style={{ margin: '5px' }}>
              <b style={{ fontWeight: 'bold', color: '#00AEEF' }}>
                프로젝트 종료일
              </b>{' '}
              2022-10-22
            </div>
            <div style={{ margin: '5px' }}>
              <b style={{ fontWeight: 'bold', color: '#00AEEF' }}>조회수</b> 999
            </div>
          </div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
              >
                <Tab label="스토리" {...a11yProps(0)} />
                <Tab label="문의" {...a11yProps(1)} />
                <Tab label="공지사항" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <DetailStory />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Box>
        <Box sx={{ width: '400px', backgroundColor: 'red', p: 4 }}>2</Box>
      </section>
    </Box>
  )
}
