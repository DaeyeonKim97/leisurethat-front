import { TextField } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

const SNSContainer = ({
  publicIcon,
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  twitterIcon,
}) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            marginRight: '10px',
            marginTop: '5px',
            color: 'rgba(1,1,1,0.4)',
          }}
        >
          {publicIcon ? (
            <PublicIcon />
          ) : facebookIcon ? (
            <FacebookIcon />
          ) : instagramIcon ? (
            <InstagramIcon />
          ) : linkedInIcon ? (
            <LinkedInIcon />
          ) : twitterIcon ? (
            <TwitterIcon />
          ) : null}
        </div>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{ width: '400px' }}
        />
      </div>
    </div>
  )
}

export default SNSContainer
