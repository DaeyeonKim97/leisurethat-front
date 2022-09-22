import { TextField } from '@mui/material'
import styled from 'styled-components'

const CreateContainer = ({
  first,
  title,
  children,
  input,
  inputCal,
  inputSide,
}) => {
  return (
    <>
      <div
        style={{
          fontSize: '18px',
          marginBottom: '15px',
          marginTop: first ? null : '60px',
        }}
      >
        {title}
      </div>
      <div style={{ lineHeight: '20px' }}>{children}</div>
      {input ? (
        <TextField
          id="outlined-basic"
          label={input}
          variant="outlined"
          style={{ marginTop: '25px', width: '400px', height: '50px' }}
        />
      ) : null}
    </>
  )
}
export default CreateContainer
