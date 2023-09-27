import { Box } from '@mui/material';
import GithubIcon from '@mui/icons-material/GitHub'

function GitHubLink() {
  const handleClick = () => {
    window.open('https://github.com/thori0908', '_blank')
  }

  return <Box onClick={handleClick}><GithubIcon/></Box>
}


export default GitHubLink