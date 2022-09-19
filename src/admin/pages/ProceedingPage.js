import Divider from '@mui/material/Divider'
import ProceedingSearchForm from '../components/proceeding/ProceedingSearchForm'
import ProceedingTable from '../components/proceeding/ProceedingTable'

export default function ProceedingPage() {
  return (
    <section style={{ padding: 40, height: 'calc(100% - 64px)' }}>
      <header style={{ color: '#00AEEF', fontSize: 36, fontWeight: 'bold' }}>
        진행중인 프로젝트
      </header>

      <Divider
        style={{ boxShadow: '0px 2px 4px gray', margin: '15px 0px 25px 0px' }}
      />

      <ProceedingSearchForm />

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

        <ProceedingTable />
      </div>
    </section>
  )
}
