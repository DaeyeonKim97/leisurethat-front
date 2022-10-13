import * as React from 'react'
import { Tabs, Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import DetailStory from '../components/projectDetail/story/DetailStory'
import DetailQna from '../components/projectDetail/qna/DetailQna'
import DetailNotice from '../components/projectDetail/notice/DetailNotice'
import DetailMaker from '../components/projectDetail/maker/DetailMaker'
import DetailReward from '../components/projectDetail/maker/DetailReward'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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

export default function ProjectDetail() {
  let { projectId } = useParams()
  const [init, setInit] = React.useState(true)
  const [data, setData] = React.useState(null)
  const [paymentData, setPaymentData] = React.useState(null)
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    if (init == true) {
      async function get() {
        const result = await axios
          .get(`http://localhost:8001/project/${projectId}`)
          .then((res) => {
            console.log(res.data.results)
            setData(res.data.results.project)
            setPaymentData(res.data.results.payment)
          })
      }
      get()
      setInit(false)
    }
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${
              data ? data.project.projectAttachment.downloadAddress : null
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: 220,
            opacity: 1,
          }}
        ></div>
        <div style={{ position: 'absolute', top: '30%', left: 60 }}>
          <Typography variant="h3" color={'white'}>
            {data ? data.project.projectName : null}
          </Typography>
        </div>
      </div>
      <section style={{ display: 'flex' }}>
        <Box sx={{ flexGrow: 1, p: 4 }}>
          <Typography variant="h2" style={{ marginTop: 30 }}>
            {data ? data.project.projectName : null}
          </Typography>
          <Typography variant="h4" style={{ marginTop: 30 }}></Typography>
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
              {data != null ? data.project.projectStartDate : null}
            </div>
            <div style={{ margin: '5px' }}>
              <b style={{ fontWeight: 'bold', color: '#00AEEF' }}>
                프로젝트 종료일
              </b>{' '}
              {data != null ? data.project.projectEndDate : null}
            </div>
            <div style={{ margin: '5px' }}>
              <b style={{ fontWeight: 'bold', color: '#00AEEF' }}>조회수</b>{' '}
              {data != null ? data.project.views : null}
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
              <DetailStory
                story={data ? data.storyList[0] : null}
                productList={data ? data.productList : null}
                refundPolicy={data ? data.project.refundPolicy : null}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <DetailQna />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <DetailNotice />
            </TabPanel>
          </Box>
        </Box>
        <Box sx={{ width: '400px', p: 4, marginTop: '150px' }}>
          <DetailMaker
            data={data ? data : null}
            paymentData={paymentData ? paymentData : null}
          />
          <DetailReward rewardList={data ? data.rewardList : null} />
        </Box>
      </section>
    </Box>
  )
}
