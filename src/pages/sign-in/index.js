import { useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormHelperText, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import { auth, ENABLE_AUTH } from '../../lib/auth';
import { Logo } from '../../components/logo';
import { useAuthContext } from '../../contexts/auth-context';
import Router from 'next/router';

const Page = () => {
  const [tab, setTab] = useState('email');
  const [emailSent, setEmailSent] = useState(false);
  const authContext = useAuthContext();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Email is required')
    }),
    onSubmit: async (values, helpers) => {
      if (!ENABLE_AUTH) {
        helpers.setFieldError('submit', 'Zalter authentication not enabled');
        helpers.setSubmitting(false);
        return;
      }

      try {
        // When in development, this will be 'http://localhost:3000/sign-in/confirm'
        // Remember to configure it in your project settings
        const redirectUri = window.location.href + '/confirm';

        // This can be call inside AuthProvider component, but we do it here for simplicity
        await auth.signInWithLink('start', {
          email: values.email,
          redirectUri
        });
        helpers.setSubmitting(false);
        setEmailSent(true);
      } catch (err) {
        console.error(err);
        helpers.setFieldError('submit', err.message || 'Something went wrong');
        helpers.setSubmitting(false);
      }
    }
  });

  const handleTabChange = (event, value) => {
    setTab(value);
  };

  const handleRetry = () => {
    setEmailSent(false);
  };

  return (
    <>
      <Head>
        <title>Sign in | Sincity</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flex: '1 1 auto'
        }}
      >
        <Grid
          container
          sx={{ flex: '1 1 auto' }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              backgroundColor: '#121212',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            <Box
              md={{
                justifyContent: "start",                
                display: "flex",
                width: '100%',
              }}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                display: "flex",
                justifyContent: "center",
                p: 3
              }}
              
            >
              <NextLink
                href="/"
                passHref
              >
                  {/* <Logo
                    sx={{
                      height: 42,
                      width: 42
                    }}
                  /> */}
                  <Typography
                    sx={{ mb: 1 }}
                    variant="h1"
                    color="text.gold"
                    style={{
                      textShadow: "3px 3px 2px #AC7A2B80"
                    }}
                  >
                    Sincity Admin
                  </Typography>
              </NextLink>
            </Box>
            <Box
              sx={{
                flex: '1 1 auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  maxWidth: 500,
                  px: 3,
                  py: '100px',
                  width: '100%'
                }}
              >
                {emailSent ? (
                  <div>
                    <Typography
                      sx={{ mb: 1 }}
                      variant="h4"
                    >
                      Confirm your email
                    </Typography>
                    <Typography>
                      We emailed a magic link to&nbsp;
                      <Box
                        component="span"
                        sx={{
                          color: 'primary.main'
                        }}
                      >
                        {formik.values.email}
                      </Box>
                      <br />
                      Click the link to to log in.
                    </Typography>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        gap: 3,
                        mt: 3
                      }}
                    >
                      <Typography
                        color="text.white"
                        variant="body2"
                      >
                        Wrong email?
                      </Typography>
                      <Button
                        color="inherit"
                        onClick={handleRetry}
                      >
                        Use a different email
                      </Button>
                    </Box>
                  </div>
                ) : (
                  <div>
                    <Typography
                      sx={{ mb: 1 }}
                      variant="h1"
                      color="text.white"
                    >
                      Welcome
                    </Typography>
                    <Typography
                      color="text.white"
                      sx={{ mb: 3 }}
                      variant="body2"
                    >
                      Sign up on the internal platform
                    </Typography>
                  
                    <div>
                      <TextField
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        label="Email Address"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                        variant="outlined"
                        sx={{
                          my:3
                        }}
                      />
                      <TextField
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        fullWidth
                        helperText={formik.touched.password && formik.errors.password}
                        label="Password"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        value={formik.values.password}
                        variant="outlined"
                        sx={{
                          my:3
                        }}
                      />
                      {formik.errors.submit && (
                        <Typography
                          color="error"
                          sx={{ mt: 2 }}
                          variant="body2"
                        >
                          {formik.errors.submit}
                        </Typography>
                      )}
                      <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        onClick={() => formik.handleSubmit()}
                        variant="contained"
                      >
                        Continue
                      </Button>
                    </div>                    
                  </div>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              alignItems: 'center',
              background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              '& img': {
                maxWidth: '100%'
              }
            }}
          >
            <img
              alt=""
              src="/static/images/sidebar.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
