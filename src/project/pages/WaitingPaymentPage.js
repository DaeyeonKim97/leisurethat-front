import Divider from '@mui/material/Divider'
import WaitingPaymentSearchForm from '../components/payment/WaitingPaymentSearchForm'
import WaitingPaymentTable from '../components/payment/WaitingPaymentTable'

export default function WaitingPaymentPage() {
  console.log('재휘')
  return (
    <section style={{ padding: 40, height: 'calc(100% - 64px)' }}>
      <header style={{ color: '#00AEEF', fontSize: 36, fontWeight: 'bold' }}>
        주문 통합 관리-결제 대기
      </header>

      <Divider
        style={{ boxShadow: '0px 2px 4px gray', margin: '15px 0px 25px 0px' }}
      />

      <WaitingPaymentSearchForm />

      <div
        className="whatsthis"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          height: 'calc(100% - 120px)',
        }}
      >
        <section
          style={{
            margin: '12px 20px',
            fontSize: '18px',
            alignSelf: 'flex-end',
          }}
        >
          총 <span style={{ color: '#6297BA' }}>22320</span> 명
        </section>

        <WaitingPaymentTable />
      </div>
    </section>
  )
}
