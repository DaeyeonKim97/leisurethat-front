import Divider from '@mui/material/Divider'
import JudgeSearchForm from '../components/member/MemberSearchForm'
import MemberTable from '../components/member/MemberTable'
import { useState,useEffect } from 'react';

export default function MemberPage() {

  let [userCount,setUserCount] = useState(0);

  useEffect(() => {

    const getMemberCount = async()=>{
      const requestURL = `http://localhost:8001/user/count`;
      const userCount =  await fetch(requestURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
    })
    .then(response => response.json())
  
    console.log("userCount :" , userCount);
    setUserCount(userCount);
     }
  
     getMemberCount();
     
    }, []);
    
  return (

    <section style={{ padding: 40, height: 'calc(100% - 64px)' }}>
      <header style={{ color: '#00AEEF', fontSize: 36, fontWeight: 'bold' }}>
        회원 조회
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
          총 <span style={{ color: '#6297BA' }}>{userCount}</span> 개
        </section>

        <MemberTable />
      </div>
    </section>
  )
}