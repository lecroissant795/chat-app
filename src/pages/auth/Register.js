import React from 'react';
import { Container, Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RegisterForm from '../../sections/auth/RegisterForm';


const Register = () => {
    return (
        <Container maxWidth="sm">
            <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
                <Typography variant="h4">Get started</Typography>
                <Stack direction="row" spacing={0.5}>
                    <Typography variant="body2">Already have an account?</Typography>
                    <Link component={RouterLink} variant="subtitle2" to="/auth/login">Sign in</Link>
                </Stack>
                <RegisterForm />

                <Typography component={"div"} sx={{ color: "text.secondary", mt: 3, typography: "caption", textAlign: "center" }}>
                    {'By signing up, I agree to '}
                    <Link underline="always" color="text.primary">Terms of service
                    </Link>
                    {' and '}
                    <Link underline="always" color="text.primary">Privacy Policy
                    </Link>
                    .

                </Typography>
            </Stack>
        </Container>
    );
};

export default Register;
