import Divider from '@mui/material/Divider'
import JudgeSearchForm from '../components/judge/JudgeSearchForm'
import JudgeTable from '../components/judge/JudgeTable'

export default function JudgePage() {
  return (
    <section style={{ padding: 40, height: 'calc(100% - 64px)' }}>
      <header style={{ color: '#00AEEF', fontSize: 36, fontWeight: 'bold' }}>
        프로젝트 등록 심사
      </header>

      <Divider
        style={{ boxShadow: '0px 2px 4px gray', margin: '15px 0px 25px 0px' }}
      />

      <JudgeSearchForm />

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

        <JudgeTable />
      </div>
    </section>
  )
}
