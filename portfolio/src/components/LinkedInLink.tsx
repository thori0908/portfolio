import { Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function LinkedInLink()  {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/takumihori/', '_blank')
  }

  return <Box onClick={handleClick}><LinkedInIcon/></Box>
}


export default LinkedInLink