import Divider from '@mui/material/Divider'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProceedingSearchForm from '../components/proceeding/ProceedingSearchForm'
import ProceedingTable from '../components/proceeding/ProceedingTable'

export default function ProceedingPage() {
  const [init, setInit] = useState(true)
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const size = 6

  useEffect(() => {
    if (init) {
      axios
        .get(
          `http://localhost:8001/project-detail/open?page=${page}&size=${size}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            },
          }
        )
        .then((res) => {
          console.log(res.data)
          setList(res.data.results.projectList)
          setCount(res.data.results.total)
          console.log('list : ', list)
        })

      setInit(false)
    }
  }, [])
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
          총 <span style={{ color: '#6297BA' }}>{count}</span> 개
        </section>

        <ProceedingTable list={list} />
      </div>
    </section>
  )
}
