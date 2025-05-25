import React from 'react';
import { Container, Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ForgotPasswordForm from '../../sections/auth/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Forgot Your Password?</Typography>
        <Typography sx={{color:"textsecondary", mb: 5}}>
            Please enter the email address associated with your account and We 
            will email you a link to reset your password.
        </Typography>
      </Stack>
      <ForgotPasswordForm />
      <Link component={RouterLink} variant="subtitle2" to="/auth/login">Return to sign in</Link>
    </Container>
  );
};

export default ForgotPassword;