import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from 'react-slick';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import testiData from './testimonialsData';
import Title from '../Title';
import useStyle from './testi-style';

function AvatarBuble(props) {
  const { classes } = useStyle();
  const {
    avatar, name,
    x, y,
    openPopover, closePopover
  } = props;

  return (
    <div className={classes.person} style={{ left: x, top: y }}>
      {avatar ? (
        <Avatar
          alt={name}
          src={avatar}
          className={classes.avatar}
          onMouseEnter={(e) => openPopover(e)}
          onMouseLeave={closePopover}
        />
      ) : (
        <span
          className={classes.dot}
          onMouseEnter={(e) => openPopover(e)}
          onMouseLeave={closePopover}
        />
      )}
    </div>
  );
}

AvatarBuble.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  openPopover: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired
};

AvatarBuble.defaultProps = {
  avatar: ''
};

function Testimonials() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupData, setPopupData] = useState({});
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const { classes } = useStyle();
  const { classes: text } = useText();
  const open = Boolean(anchorEl);

  const firsthChar = txt => txt.charAt(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  function handlePopoverOpen(event, item) {
    setAnchorEl(event.currentTarget);
    setPopupData(item);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  return (
    <Container>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={100}
        delay={200}
        duration={0.3}
      >
        <div className={classes.root}>
          <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
              paper: classes.paper,
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            onClose={handlePopoverClose}
          >
            <div className={classes.paperBlock}>
              <Typography gutterBottom display="block">
                {popupData.text}
              </Typography>
              <Typography variant="h6">
                {popupData.name}
              </Typography>
              <Typography className={classes.title}>
                {popupData.title}
              </Typography>
            </div>
          </Popover>
          <Title dark>
            {t('femine-landing.testi_title')}
            &nbsp;
            <strong>
              {t('femine-landing.testi_titleBold')}
            </strong>
          </Title>
          <Grid container>
            <Grid item md={7} xs={12}>
              <div className={classes.worldMap}>
                {!isTablet ? (
                  <div className={classes.avatarWrap}>
                    {testiData.map((item, index) => (
                      <AvatarBuble
                        key={index.toString()}
                        avatar={item.avatar}
                        name={item.name}
                        x={item.x}
                        y={item.y}
                        openPopover={(e) => handlePopoverOpen(e, item)}
                        closePopover={handlePopoverClose}
                      />
                    ))}
                  </div>
                ) : (
                  <Carousel {...settings}>
                    {testiData.map((item, index) => (
                      <div
                        className={classes.itemCarousel}
                        key={index.toString()}
                      >
                        <Paper className={classes.card}>
                          <Typography variant="body1" display="block">
                            {item.text}
                          </Typography>
                          <div className={classes.name}>
                            {item.avatar ? (
                              <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                            ) : (
                              <Avatar alt={item.name} className={classes.avatar}>
                                {firsthChar(item.name)}
                              </Avatar>
                            )}
                            <Typography variant="caption">
                              {item.name}
                            </Typography>
                          </div>
                        </Paper>
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>
            </Grid>
            <Grid item md={5} xs={12}>
              <div className={classes.text}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-200}
                  delay={200}
                  duration={0.3}
                >
                  <Typography
                    variant="h3"
                    className={text.title2}
                  >
                    {t('femine-landing.testi_title2')}
                  </Typography>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={-200}
                  delay={300}
                  duration={0.3}
                >
                  <div>
                    <Typography component="p" className={text.paragraph}>
                      {t('femine-landing.testi_desc')}
                    </Typography>
                    <Button color="primary" href="#contact" size="large" className={classes.button} variant="contained">
                      {t('femine-landing.testi_button')}
                    </Button>
                  </div>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

export default Testimonials;
