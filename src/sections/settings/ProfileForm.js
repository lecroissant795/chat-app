import React, { useCallback } from 'react';
import { Stack, Alert, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RHFTextField } from '../../components/hook-form';
import { Link as RouterLink } from 'react-router-dom';

const ProfileForm = () => {

    const loginSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        about: yup.string().required('About is required'),

        avatarUrl: yup.string().required('Avatar is required').nullable(true),

    });


    const methods = useForm({
        resolver: yupResolver(loginSchema),
    });

    const {
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        setError,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = methods;

    const values = watch();


    const handleDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file),
        });

        if (file) {
            setValue("avatarUrl", newFile, { shouldValidate: true });  // Fixed setValue function call
        }
    }, [setValue]);  // Fixed the typo in the dependency array

    const onSubmit = async (data) => {
        try {
            console.log(data);
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
                <Stack spacing={3}>
                    {!!errors.afterSubmit && (
                        <Alert severity="error">{errors.afterSubmit.message}</Alert>
                    )}

                    <RHFTextField name="name" label="Full Name" />

                    <RHFTextField multiline rows={4} maxRows={5} name="about" label="About" />

                </Stack>

                <Stack direction={"row"} justifyContent="end">
                    <Button
                        color="primary"
                        size="large"
                        type="submit"
                        variant="contained"
                    // loading={isSubmitSuccessful || isSubmitting}
                    >
                        Save
                    </Button>
                </Stack>
                </Stack>


            </form>
        </FormProvider>
    );
};

export default ProfileForm;