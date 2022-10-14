import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';


export default function DenseTable(props) {

  let [rows,setRows] = useState([]);

  useEffect(() => {

    const getLoginLog = async()=>{
      const requestURL = `http://localhost:8001/user/loginlog/${props.id}`;
      const loginLog =  await fetch(requestURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
    })
    .then(response => response.json())
    .then(data=>{
      console.log(data.results.loginLog);
      setRows(data.results.loginLog);
      
    })
  
     }
  
     getLoginLog();
     
    }, []);


  return (
    <TableContainer sx={{ width: 500 }} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell align="right">변경일자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.loginDate.slice(0,19).replace('T',' ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}