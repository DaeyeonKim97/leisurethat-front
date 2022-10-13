import { Button, TextField } from '@mui/material'
import { display } from '@mui/system'
import CreateContainer from '../User/CreateContainer'
import SendIcon from '@mui/icons-material/Send'

const refund = `레저댓의 환불 및 교환 정책 기본사항 
   1. 프로젝트 기간 중에는 자유롭게 마이 페이지에서 펀딩 취소가 가능합니다. 
   2. 펀딩을 받아야만 생산을 시작할 수 있는 크라우드 펀딩 특성상, 프로젝트 종료 이후에는 단순 변심으로 인한 
   교환이나 환불이 불가하니 이점 양해 부탁드립니다. 
   3. 리워드 배송일이 예상보다 지연되는 경우, 새소식과 후원자 분들의 이메일을 통해 안내해드리겠습니다. 
   이에 관한 문의는 이메일 "admin@leisurethat.com" , 연락처 "02-000-0000" 로 연락바랍니다.`

const DprojectService = ({
  refundPolicy,
  setRefundPolicy,
  inquiryPhone,
  setInquiryPhone,
  inquiryEmail,
  setInquiryEmail,
}) => {
  return (
    <div style={{ margin: '80px 50px' }}>
      <CreateContainer fisrt title="환불 및 교환 정책을 적어주세요">
        <div>리워드 안내에 노출됩니다</div>
        <TextField
          id="outlined-basic"
          label="환불 교환 정책 작성"
          variant="outlined"
          style={{ marginTop: '25px', width: '900px', height: '250px' }}
          multiline
          rows={10}
          maxRows={10}
          value={refundPolicy}
          onChange={(e) => {
            setRefundPolicy(e.target.value)
          }}
        />
      </CreateContainer>
      <CreateContainer
        title="문의 가능한 번호"
        input="02-000-0000"
        value={inquiryPhone}
        setValue={setInquiryPhone}
      ></CreateContainer>
      <CreateContainer
        title="문의 이메일"
        input="admin@leisurethat.com"
        value={inquiryEmail}
        setValue={setInquiryEmail}
      ></CreateContainer>
      <CreateContainer>
        <TextField
          id="outlined-basic"
          placeholder={refund}
          variant="outlined"
          style={{ marginTop: '25px', width: '900px', height: '250px' }}
          multiline
          rows={10}
          maxRows={10}
        />
      </CreateContainer>
      <div style={{ color: '#00AEEF', marginTop: '60px' }}>
        프로젝트 종료일 이후에 리워드와 관련된 환불 및 교환은 프로젝트 제작자가
        약속하는 것에 따르며 레저댓은 이에 책임지지 않습니다.
      </div>
      <CreateContainer>
        <div
          style={{
            display: 'flex',
            width: '900px',
            justifyContent: 'space-between',
          }}
        ></div>
      </CreateContainer>
      <CreateContainer>
        <div
          style={{
            display: 'flex',
            width: '900px',
          }}
        ></div>
      </CreateContainer>
    </div>
  )
}

export default DprojectService
