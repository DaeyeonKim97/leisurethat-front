import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button, Divider } from '@mui/material'
import { width } from '@mui/system'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { TextFieldsOutlined } from '@mui/icons-material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 512,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
}

export default function WaybillModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const [courier, setCourier] = React.useState('')
  const [value, setValue] = React.useState('')

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  const handleChange = (event) => {
    setCourier(event.target.value)
  }

  return (
    <div>
      <div onClick={handleOpen} style={{ width: '70px' }}>
        {props.children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box height={500} sx={style}>
          <Typography
            id="modal-modal-title"
            component="h2"
            sx={{ fontWeight: 'bold', fontSize: 30, mt: '15%', ml: 5 }}
          >
            운송장 등록
          </Typography>
          <Typography
            display={'inline-block'}
            sx={{ fontSize: 18, mt: 4, ml: 5, fontWeight: 'bold' }}
          >
            택배사
          </Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl size="small" sx={{ ml: 5, width: '47ch' }}>
              <InputLabel id="demo-simple-select-label">택배사이름</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={courier}
                label="courier"
                onChange={handleChange}
              >
                <MenuItem value={1}>대한통운</MenuItem>
                <MenuItem value={2}>로젠 택배</MenuItem>
                <MenuItem value={3}>우체국 택배</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Typography
            display={'inline-block'}
            sx={{ fontSize: 18, fontWeight: 'bold', mt: 2, ml: 5 }}
          >
            운송장 번호
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { ml: 5, width: '47ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-textarea"
              label="운송장 번호"
              multiline
              value={value}
              size="small"
              onChange={handleValueChange}
            />
          </Box>
          <Button
            onClick={handleClose}
            variant={'contained'}
            sx={{ position: 'absolute', top: '70%', left: '40%', width: 100 }}
          >
            확인
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
