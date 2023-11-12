import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/logo.png';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';

function Footer() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={-200}
              delay={200}
              duration={0.3}
            >
              <div>
                <div className={classes.logo}>
                  <img src={logo} alt="logo" />
                  <Typography variant="h3" className={text.title}>
                    {brand.femine.name}
                  </Typography>
                  <Typography variant="h4" className={text.subtitle}>
                    {brand.femine.title}
                  </Typography>
                </div>
                <div className={classes.socmed}>
                  <IconButton href="https://web.facebook.com/nurmohammad54800/" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                    <i className={cx('ion-logo-facebook', classes.fb)} />
                  </IconButton>
                  <IconButton href="https://github.com/nurmohammad83" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                    <i className={cx('ion-logo-github', classes.tw)} />
                  </IconButton>
                  <IconButton href="https://www.instagram.com/noor__5480/" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                    <i className={cx('ion-logo-instagram', classes.ig)} />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/nur-mohammad-0a1137259/" aria-label="Delete" className={classes.margin} size="small">
                    <i className={cx('ion-logo-linkedin', classes.in)} />
                  </IconButton>
                </div>
                <Button href="https://drive.google.com/file/d/1Z7Amg7Xm47CCy2gJC-c8Sfs4il4R0pnr/view?usp=drive_link" target="_blank" variant="outlined" color="primary" className={classes.download} component="a">Download CV</Button>
                <div className={classes.contact}>
                  <Typography className={text.paragraph}>
                    {t('femine-landing.footer_contact')}
                    <br />
                    +8801935399238
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography className={text.paragraph}>
                    {t('femine-landing.footer_hello')}
                    <br />
                    mohammadnur5480@gmail.com
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={7}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={-200}
              delay={200}
              duration={0.3}
            >
              <div>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
