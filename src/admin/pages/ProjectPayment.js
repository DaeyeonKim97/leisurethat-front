/** @format */

import Divider from '@mui/material/Divider';
import ProjectPaymentSearchForm from '../components/projectPayment/ProjectPaymentSearchForm';
import ProjectPaymentTable from '../components/projectPayment/ProjectPaymentTable';

export default function ProjectPayment() {
  return (
    <section style={{ padding: 40, height: 'calc(100% - 64px)' }}>
      <header style={{ color: '#00AEEF', fontSize: 36, fontWeight: 'bold' }}>
        프로젝트 결제 현황
      </header>
      <Divider
        style={{ boxShadow: '0px 2px 4px gray', margin: '15px 0px 25px 0px' }}
      />
      <ProjectPaymentSearchForm />
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
          총 <span style={{ color: '#6297BA' }}>22320</span> 개
        </section>
        <ProjectPaymentTable />
      </div>
    </section>
  );
}
