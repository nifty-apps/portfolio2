import React, { Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function About() {
  const theme = useTheme();
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <div>
                    <figure>
                      <img src="/images/femine/phero.png" alt="badge" />
                    </figure>
                    <Typography component="p" className={text.paragraph}>LEVEL 2 WINNER</Typography>
                    <Typography variant="h5">PHERO</Typography>
                  </div>
                </div>
                <div className={classes.item}>
                  <div>
                    <figure>
                      <img src="/images/femine/black.png" alt="badge" />
                    </figure>
                    <Typography component="p" className={text.paragraph}>Black Belt</Typography>
                    <Typography variant="h5">PHERO</Typography>
                  </div>
                </div>
                <div className={classes.item}>
                  <div>
                    <figure>
                      <img src="/images/femine/redux.png" alt="badge" />
                    </figure>
                    <Typography component="p" className={text.paragraph}>Redux Award</Typography>
                    <Typography variant="h5">LWS</Typography>
                  </div>
                </div>
              </div>
              {!isTablet && (
                <Fragment>
                  <div className={classes.socmed}>
                    <IconButton href="https://web.facebook.com/nurmohammad54800/" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                      <i className={cx('ion-logo-facebook', classes.fb)} />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/noor__5480/" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                      <i className={cx('ion-logo-instagram', classes.ig)} />
                    </IconButton>
                    <IconButton href="https://github.com/nurmohammad83" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                      <i className={cx('ion-logo-github', classes.gh)} />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/nur-mohammad-0a1137259/" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                      <i className={cx('ion-logo-linkedin', classes.in)} />
                    </IconButton>
                  </div>
                  <Typography variant="h5">
                    {t('femine-landing.banner_desc')}
                  </Typography>
                </Fragment>
              )}
              <Paper className={classes.photo}>
                <figure>
                  <img src={brand.femine.avatar} alt="avatar" />
                </figure>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
