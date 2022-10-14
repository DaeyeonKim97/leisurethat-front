/** @format */

import Divider from '@mui/material/Divider'
import PaymentSearchForm from '../components/Payment/PaymentSearchForm'
import PaymentTable from '../components/Payment/PaymentTable'
import { useSelector } from 'react-redux'
export default function PaymentPage() {
  const payments = useSelector((state) => state.adminPaymentHandler)
  console.log(payments)
  return (
    <section style={{ padding: 40, height: 'calc(100% - 64px)' }}>
      <header style={{ color: '#00AEEF', fontSize: 36, fontWeight: 'bold' }}>
        결제 현황
      </header>
      <Divider
        style={{ boxShadow: '0px 2px 4px gray', margin: '15px 0px 25px 0px' }}
      />
      <PaymentSearchForm />
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
          총{' '}
          <span style={{ color: '#6297BA' }}>
            {payments.length > 0 ? payments.length : '0'}
          </span>{' '}
          개
        </section>
        <PaymentTable />
      </div>
    </section>
  )
}
