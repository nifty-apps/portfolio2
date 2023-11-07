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
  const { classes } = useStyles();
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
                      <img src="/images/femine/reward1.svg" alt="badge" />
                    </figure>
                    <Typography component="p" className={text.paragraph}>Special Programming</Typography>
                    <Typography variant="h5">Awards</Typography>
                  </div>
                </div>
                <div className={classes.item}>
                  <div>
                    <figure>
                      <img src="/images/femine/reward2.svg" alt="badge" />
                    </figure>
                    <Typography component="p" className={text.paragraph}>10k videos</Typography>
                    <Typography variant="h5">Subscriber</Typography>
                  </div>
                </div>
                <div className={classes.item}>
                  <div>
                    <figure>
                      <img src="/images/femine/reward3.svg" alt="badge" />
                    </figure>
                    <Typography component="p" className={text.paragraph}>Best Design</Typography>
                    <Typography variant="h5">Awards</Typography>
                  </div>
                </div>
              </div>
              {!isTablet && (
                <Fragment>
                  <div className={classes.socmed}>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-facebook" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-twitter" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-google" />
                    </IconButton>
                    <IconButton aria-label="Delete" className={classes.margin} size="small">
                      <i className="ion-logo-linkedin" />
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
