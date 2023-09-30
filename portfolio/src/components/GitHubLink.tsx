import { Box, SxProps, Theme } from '@mui/material';
import GithubIcon from '@mui/icons-material/GitHub'
import { FC } from 'react';

type Props = {
  sx?: SxProps<Theme>
}

const GitHubLink: FC<Props> = (props) => {
  const handleClick = () => {
    window.open('https://github.com/thori0908', '_blank')
  }

  return <Box sx={props.sx} onClick={handleClick}><GithubIcon/></Box>
}


export default GitHubLink