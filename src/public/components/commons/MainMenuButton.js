import { Button } from '@mui/material'

const MainMenuButton = ({ children }) => {
  return (
    <Button
      sx={{
        mx: '10px',
        height: '70px',
        backgroundColor: '#ECFBFF',
        border: '2px solid black',
        borderRadius: '10px',
        color: 'black',
        fontSize: '20px',
      }}
      variant="outlined"
    >
      {children}
    </Button>
  )
}

export default MainMenuButton
