import { TextField } from '@mui/material'
import styled from 'styled-components'

const CreateContainer = ({
  first,
  title,
  children,
  input,
  none,
  value,
  setValue,
}) => {
  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

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
      {input && !none ? (
        <TextField
          id="outlined-basic"
          label={input}
          variant="outlined"
          style={{ marginTop: '25px', width: '400px', height: '50px' }}
          value={value}
          onChange={onChangeHandler}
        />
      ) : null}
    </>
  )
}
export default CreateContainer
