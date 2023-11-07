import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { Box } from '@mui/material';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';

function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            {!isTablet && (
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.femine.name}
              </Typography>
            )}
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item alignItems="center" justifyContent="center" md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('femine-landing.timeline_experience')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={200}
                      delay={400}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>NIFTY IT</Typography>
                        <Typography gutterBottom>React Js Developer</Typography>
                        <Typography className={classes.time}>Sep 2023 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>POLACITY</Typography>
                        <Typography gutterBottom>Web Developer</Typography>
                        <Typography className={classes.time}>Des 2022 - Apr 2023</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('femine-landing.timeline_skill')}
                </Typography>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  delay={400}
                  duration={0.3}
                  afterAnimatedIn={handlePlay}
                >
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[0]} alt="react" />
                        <Typography variant="h6" className={text.subtitle2}>React JS</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 80 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">80%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[1]} alt="next" />
                        <Typography variant="h6" className={text.subtitle2}>Next JS</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 70 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">70%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[2]} alt="javascript" />
                        <Typography variant="h6" className={text.subtitle2}>Javascript</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 75 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">75%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[3]} alt="typescript" />
                        <Typography variant="h6" className={text.subtitle2}>Typescript</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 70 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">70%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[4]} alt="node" />
                        <Typography variant="h6" className={text.subtitle2}>Node JS</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 68 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">68%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[5]} alt="express" />
                        <Typography variant="h6" className={text.subtitle2}>Express JS</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 65 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">65%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[6]} alt="mongodb" />
                        <Typography variant="h6" className={text.subtitle2}>MongoDB</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 72 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">72%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[7]} alt="mongoose" />
                        <Typography variant="h6" className={text.subtitle2}>Mongoose</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 70 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">70%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[8]} alt="prisma" />
                        <Typography variant="h6" className={text.subtitle2}>Prisma</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 62 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">62%</Typography>
                        </Box>
                      </Box>
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <img src={imgAPI.skills[10]} alt="prisma" />
                        <Typography variant="h6" className={text.subtitle2}>Postgresql</Typography>
                      </div>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={play ? 55 : 0}
                            classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                          />
                        </Box>
                        <Box sx={{ minWidth: 35 }}>
                          <Typography className={classes.textParentage} variant="body2" color="text.secondary">55%</Typography>
                        </Box>
                      </Box>
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Timeline;
