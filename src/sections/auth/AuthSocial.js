import React from 'react';
import { Stack, Divider, IconButton, Typography } from '@mui/material';
import { GoogleLogo, GithubLogo, TwitterLogo } from 'phosphor-react';

const AuthSocial = () => {
  return (
    <div>
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton>
          <GoogleLogo color="#DF3E30" />
        </IconButton>
        <IconButton>
          <GithubLogo color="black" />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1C9CEA" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;