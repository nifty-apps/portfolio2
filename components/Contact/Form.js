import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import emailjs from '@emailjs/browser';
import { useText } from '~/theme/common';
import useStyles from './contact-style';

function Form() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [openNotif, setNotif] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    // Prepare the email parameters
    const emailParams = {
      from_name: values.name,
      from_email: values.email,
      phone: values.phone,
      message: values.message,
    };

    // Send the email
    emailjs
      .send(
        process.env.NEXT_SERVICE_ID,
        process.env.NEXT_TEMPLATE_ID,
        emailParams,
        process.env.NEXT_USER_ID,
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          values.name = '';
          values.email = '';
          values.message = '';
          setNotif(true);
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Your message has been sent</span>}
      />
      <Paper className={classes.formBox}>
        <Grid container spacing={6}>
          <Grid item lg={5} xs={12}>
            <Typography className={cx(classes.title, text.title)} variant="h3">
              Contact&nbsp;
              <span>Me.</span>
            </Typography>
          </Grid>
          <Grid item lg={7} xs={12}>
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
              >
                <TextValidator
                  className={classes.input}
                  label={t('femine-landing.form_name')}
                  onChange={handleChange('name')}
                  name="Name"
                  variant="standard"
                  value={values.name}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  className={classes.input}
                  label={t('femine-landing.form_email')}
                  onChange={handleChange('email')}
                  name="Email"
                  variant="standard"
                  value={values.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                  multiline
                  rows="6"
                  variant="standard"
                  className={classes.input}
                  label={t('femine-landing.form_message')}
                  onChange={handleChange('message')}
                  name="Message"
                  value={values.message}
                />
                <div className={classes.btnArea}>
                  <Button variant="contained" type="submit" color="primary" size="large">
                    {t('femine-landing.form_send')}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Form;
