import styled from 'styled-components'

export const BaseBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 900px;
`

export const UnderLineBox = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const UnderLineContentsBox = styled(UnderLineBox)`
  font-size: 26px;
  margin-bottom: 10px;
  border-color: rgba(0, 0, 0, 1);
  border-width: 2px;
`

export const UnderLineContentBox = styled(UnderLineBox)`
  font-size: 18px;
  padding: 10px;
  justify-content: flex-start;
`

export const UnderLineContent = styled.div`
  margin-right: 20px;
  width: 100%;
`
