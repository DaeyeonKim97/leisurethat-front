import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Divider } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 512,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

export default function MakerInfoModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const [info, setInfo] = useState()

  React.useEffect(() => {
    console.log(props.projectId)
    if (props.projectId) {
      axios
        .get(`http://localhost:8001/project-detail/${props.projectId}/maker`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          },
        })
        .then((res) => {
          console.log(res.data)
          setInfo(res.data.results.maker)
        })
    }
  }, [])

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            제작자 정보
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <div>
            <div style={{ margin: '20px 0', fontSize: '25px' }}>유저 정보</div>
            {info ? (
              <div>
                <div>번호 : {info.member.memberId}</div>
                <div>아이디 : {info.member.username}</div>
                <div>이메일 : {info.member.memberEmail}</div>
                <div>전화번호 : {info.member.memberPhone}</div>
                <div>가입일 : {info.member.memberRegDate}</div>
                <div>가입구분 : {info.member.snsCategory.name}</div>
                <div>권한 : {info.member.memberRole}</div>
              </div>
            ) : null}
          </div>
          <div>
            <div style={{ margin: '20px 0', fontSize: '25px' }}>
              유저 프로젝트 목록
            </div>
            {info
              ? info.projectList.map((project) => (
                  <div>
                    {`[${project.projectId}] ${project.projectName} ~${project.projectEndDate} (${project.projectStatus.description})`}
                  </div>
                ))
              : null}
          </div>
        </Box>
      </Modal>
    </div>
  )
}
