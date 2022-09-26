/** @format */

import Divider from '@mui/material/Divider'
import WithdrawOrderTable from '../components/WithdrawOrder/WithdrawOrderTable'
import WithdrawOrderSearchForm from '../components/WithdrawOrder/WithdrawOrderSearchForm'
export default function WithdrawOrder() {
  return (
    <section style={{ padding: 40, height: 'calc(100% - 64px)' }}>
      <header style={{ color: '#00AEEF', fontSize: 36, fontWeight: 'bold' }}>
        주문 취소
      </header>
      <Divider
        style={{ boxShadow: '0px 2px 4px gray', margin: '15px 0px 25px 0px' }}
      />
      <WithdrawOrderSearchForm />

      <div
        className="whatsthis"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <section
          style={{
            margin: '12px 20px',
            fontSize: '18px',
            alignSelf: 'flex-end',
          }}
        >
          총 <span style={{ color: '#6297BA' }}>22320</span> 개
        </section>

        <WithdrawOrderTable />
      </div>
    </section>
  )
}
