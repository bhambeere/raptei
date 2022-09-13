import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center"
      sx={{ backgroundColor: '#ce93d8', pt: 5, pb: 5 }}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://raptei.com/">
        raptei.com
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
