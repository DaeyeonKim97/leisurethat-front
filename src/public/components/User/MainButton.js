import styled from 'styled-components'

const MainButton = styled.input`
  border: none;
  border-radius: 5px;
  margin-top: 12px;
  background-color: ${(p) => p.bgColor};
  color: ${(p) => p.color};
  text-align: center;
  padding: 12px 0px;
  font-weight: 300;
  font-size: 13px;
  width: 100%;
  opacity: ${(p) => (p.disabled ? '0.2' : '1')};
`

export default MainButton
