import React, { useState } from 'react';
import { Stack, Alert, IconButton, InputAdornment, Button, Link } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import { LoginUser } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid email address').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@talk.com',
    password: 'password123',
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try { 
      console.log(data);
      // Submit data to backend
      dispatch(LoginUser(data))

    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', { message: error.message });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <RHFTextField name="email" label="Email address" />
          <RHFTextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2, mb: 1 }}>
          <Link component={RouterLink} to="/auth/forgot-password"  variant="subtitle2" underline="always">
            Forgot password?
          </Link>
        </Stack>
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Login
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;