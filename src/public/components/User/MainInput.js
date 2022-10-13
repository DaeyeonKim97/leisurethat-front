import styled from 'styled-components'

const MainInput = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(p) => (p.hasError ? 'red' : p.theme.borderColor)};
  margin-top: 25px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: ${(p) => (p.hasError ? 'red' : 'rgb(38, 38, 38)')};
  }
`

export default MainInput
