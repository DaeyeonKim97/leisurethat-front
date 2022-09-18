import styled from 'styled-components'
import NotificationsIcon from '@mui/icons-material/Notifications'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 600px;
`

const ContainerHeader = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const MainAdditional = ({ title, content }) => (
  <Container>
    <ContainerHeader>
      <p
        style={{
          fontSize: '30px',
          fontWeight: '800',
        }}
      >
        {title}
      </p>
      <p
        onClick={() => {}}
        style={{
          fontSize: '17px',
          textDecorationLine: 'underline',
          fontWeight: 'normal',
          color: '#00AEEF',
          cursor: 'pointer',
        }}
      >
        더 보기
      </p>
    </ContainerHeader>
    <div
      style={{
        marginTop: '17px',
        height: '430px',
        width: '100%',
      }}
    >
      {content.map((content) => (
        <div
          key={content}
          style={{
            width: '100%',
            height: '125px',
            marginTop: '13px',
            display: 'flex',
          }}
        >
          <img
            src="static/img/PublicMainDisabled.png"
            style={{ height: '100%', width: '120px', cursor: 'pointer' }}
          ></img>
          <div style={{ width: '100%', margin: '8px 16px' }}>
            <div
              style={{
                color: '#00AEEF',
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: '10px',
                fontSize: '20px',
                fontWeight: 'normal',
                cursor: 'pointer',
              }}
            >
              히어로즈 오브 더 스☆톰♚♚가입시$$전원 카드팩☜☜ 뒷면100%증정※
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10px',
                fontSize: '15px',
                color: '#6297BA',
                cursor: 'pointer',
              }}
            >
              <div>레저뎃</div>

              <NotificationsIcon
                sx={{ fontSize: '22px', mr: '10px', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
)

export default MainAdditional
