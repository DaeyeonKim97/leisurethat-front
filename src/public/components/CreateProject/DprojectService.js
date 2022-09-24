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

const DprojectService = () => {
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
        />
      </CreateContainer>
      <CreateContainer
        title="문의 가능한 번호"
        input="02-000-0000"
      ></CreateContainer>
      <CreateContainer
        title="문의 이메일"
        input="admin@leisurethat.com"
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
        >
          <div style={{ marginTop: '10px', width: '500px' }}>
            <div style={{ display: 'flex' }}>
              <div>상품정보고시</div>
              <div>상품정보 등록 가이드</div>
            </div>
            <div
              style={{ marginTop: '15px', fontSize: '14px', color: '#707070' }}
            >
              리워드를 제공하는 경우, 상품정보를 반드시 입력해야 합니다. <br />
              여러 종류의 리워드를 제공하는 경우, 다수의 상품정보를 등록해야
              합니다.
            </div>
          </div>
          <div>
            <Button
              variant="outlined"
              color="invalid"
              size="large"
              sx={{ width: '200px' }}
            >
              등록하기
            </Button>
          </div>
        </div>
      </CreateContainer>
      <CreateContainer>
        <div
          style={{
            display: 'flex',
            width: '900px',
          }}
        >
          <div
            style={{
              marginTop: '10px',
              width: '500px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>관련 서류 제출</div>
            <div
              style={{ marginTop: '15px', fontSize: '14px', color: '#707070' }}
            >
              제출서류에 해당하는 서류 일체를 폴더 내에 첨부. 전체 폴더를 <br />
              한 개의 압축파일로 저장하여 업로드 해주세요.
            </div>
            <Button
              style={{ marginTop: '20px' }}
              variant="outlined"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
            <Button
              style={{ marginTop: '20px' }}
              variant="outlined"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
        </div>
      </CreateContainer>
    </div>
  )
}

export default DprojectService
