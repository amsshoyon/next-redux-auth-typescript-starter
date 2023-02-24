import { PasswordField } from '@/components/client/forms/FormFields';
import { Button, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import React from 'react'
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const LoginCred = () => {
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={async values => {
                const res = await signIn('credentials', {
                    redirect: true,
                    username: values.username,
                    password: values.password,
                    callbackUrl: '/',
                });
            }}
        >
            {({ errors, touched, values, handleChange }) => (
                <Form>
                    <Field
                        as={TextField}
                        label="Username"
                        variant="outlined"
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        error={(touched.username && errors.username) ? true : false}
                        helperText={errors.username}
                        fullWidth
                        className='mb-4'
                    />
                    <Field
                        as={PasswordField}
                        name='password'
                        value={values.password}
                        error={(touched.password && errors.password) ? true : false}
                        helperText={errors.password}
                        onChange={handleChange}
                        className='mb-4'
                    />
                    <Button type="submit" variant='contained' color='primary' className='bg-primary'>Login</Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginCred