import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'primary',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#00AEEF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #00AEEF',
    },
    '&:hover fieldset': {
      border: '2px solid #00AEEF',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #00AEEF',
    },
  },
})

export default function PreOpenSearchForm() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid container spacing={2}>
          <Grid
            item
            xs={10}
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}
          >
            <SearchIcon style={{ marginLeft: '15px' }} />
            <Typography
              variant="h6"
              style={{
                margin: '0 15px 0 15px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              검색
            </Typography>
            <CssTextField
              id="outlined-basic"
              label="프로젝트 명"
              variant="outlined"
              size="small"
              style={{ margin: '0px 15px' }}
            />
            <CssTextField
              id="outlined-basic"
              label="제작자 ID"
              variant="outlined"
              size="small"
            />
            <CssTextField
              id="date"
              label="오픈예정일"
              type="date"
              defaultValue="2022-01-01"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              style={{ margin: '0px 15px', marginLeft: '120px' }}
            />
            이후
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: 'flex', justifyContent: 'right' }}
          >
            <Button variant="contained">search</Button>
          </Grid>
        </Grid>
      </Item>
    </Box>
  )
}
