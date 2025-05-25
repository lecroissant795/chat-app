import React from 'react';
import { Container, Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NewPasswordForm from '../../sections/auth/NewPasswordForm';

const NewPassword = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Reset Password</Typography>

      </Stack>
      <NewPasswordForm />
      <Link component={RouterLink} variant="subtitle2" to="/auth/login">Return to sign in</Link>
    </Container>
  );
};

export default NewPassword;