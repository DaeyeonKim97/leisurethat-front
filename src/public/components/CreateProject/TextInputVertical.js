import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Stack } from '@mui/material'

const TextInputVertical = ({ title, lg, cal, label, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleDateChange = (e) => {
    setValue(e.$d)
    console.log(e.$d)
  }
  return (
    <div style={{ display: 'flex', marginTop: '20px' }}>
      <div style={{ marginTop: '35px', width: '250px' }}>{title}</div>
      {lg ? (
        <TextField
          id="outlined-basic"
          label={title}
          variant="outlined"
          style={{ marginTop: '25px', width: '400px', height: '250px' }}
          multiline
          rows={10}
          maxRows={10}
          value={value}
          onChange={handleChange}
        />
      ) : cal ? (
        <div style={{ marginTop: '25px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack>
              <DesktopDatePicker
                label={label}
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
      ) : (
        <TextField
          id="outlined-basic"
          label={title}
          variant="outlined"
          style={{ marginTop: '25px', width: '400px', height: '50px' }}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  )
}

export default TextInputVertical
