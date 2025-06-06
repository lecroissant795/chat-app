import React from 'react';
import { Link as RouterLink} from "react-router-dom"
import { Container, Stack, Typography, Link} from '@mui/material';
import LoginForm from '../../sections/auth/LoginForm';
import AuthSocial from '../../sections/auth/AuthSocial';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Login</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">Create an account</Link>
        </Stack>
      </Stack>
      <LoginForm />
      <AuthSocial />
    </Container>
  );
};

export default Login;