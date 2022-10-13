import * as React from 'react'
import { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Typography, Button } from '@mui/material'
import MemberPagenation from './MemberPagenation'
import MemberDetailModal from './MemberDetailModal'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6297BA',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#E6F4F150',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))



export default function MemberTable(props) {


  let [rows,setRows] = useState([]);
  const [keyword,setKeyword] = useState('');
  const [page,setPage] = useState(0);


  useEffect(() => {

    console.log("key:",keyword);

  const getMemberList = async(keyword,page)=>{
    const requestURL = `http://localhost:8001/user?keyword=${keyword}&page=${page}`;
    rows =  await fetch(requestURL, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Accept": "*/*"
      },
  })
  .then(response => response.json())
  .then(data=>{
    console.log(data.results.memberList.content);
    setRows(data.results.memberList.content);

  })

   }

   getMemberList(keyword,1);


  }, [keyword]);

  return (
    <>

      <TableContainer
        component={Paper}
        sx={{ height: '95%' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          height="40px"
          variant="h6"
          id="tableTitle"
          component="div"
          padding="5px 15px"
          backgroundColor="#6297BAA0"
          color="white"
        >
          전체 결과
        </Typography>
        <Table
          sx={{ minWidth: 700, height: '0.8' }}
          style={{ flex: 1 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ width: 130 }}>
                회원id
              </StyledTableCell>
              <StyledTableCell align="center">아이디</StyledTableCell>
              <StyledTableCell align="center">회원명</StyledTableCell>
              <StyledTableCell align="center">이메일</StyledTableCell>
              <StyledTableCell align="center">가입일자</StyledTableCell>
              <StyledTableCell align="center">탈퇴여부</StyledTableCell>
              <StyledTableCell align="center">상세보기</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id} hover>
                <StyledTableCell component="th" scope="row" sx={{ width: 100 }}>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.username}</StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {row.name}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">
                        {row.email}
                </StyledTableCell>


                <StyledTableCell align="center">{row.regDate}</StyledTableCell>
                
                <StyledTableCell align="center">{row.secYn}</StyledTableCell>

                <StyledTableCell align="center">
                  <MemberDetailModal
                     id={row.id} 
                     username={row.username}
                     secYn={row.secYn}
                     regDate={row.regDate}
                     email={row.email}
                     name={row.name}
                     snsCategory={row.snsCategory.name}
                     role={row.role}
                     
                     
                     >
                    <Button
                      variant="outlined"
                      style={{ margin: '0px 10px' }}
                      size="midium"
                    >
                      상세 조회
                    </Button>
                  </MemberDetailModal>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <MemberPagenation />
      </div>
    </>
  )
}
