import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Stack } from '@mui/material'

const TextInputVertical = ({ title, lg, cal }) => {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'))

  const handleChange = (newValue) => {
    setValue(newValue)
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
        />
      ) : cal ? (
        <div style={{ marginTop: '25px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack>
              <DesktopDatePicker
                label="배송일 정하기"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
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
        />
      )}
    </div>
  )
}

export default TextInputVertical
