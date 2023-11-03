import { makeStyles } from 'tss-react/mui';

const sideNavIconStyles = makeStyles({ uniqId: 'sidenav' })((theme, _params, classes) => ({
  logo: {
    display: 'block',
    margin: theme.spacing(1.5, 0),
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: '100%',
      maxWidth: 64
    }
  },
  menu: {
    margin: '0 auto',
    background: theme.palette.common.black,
    borderRadius: theme.rounded.big,
    width: 80,
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
  icon: {
    display: 'block',
    minWidth: 0,
    margin: '0 auto',
    marginLeft: 0,
    borderRadius: '50%',
    width: 48,
    height: 48,
    lineHeight: '48px',
    '& span': {
      fontSize: 36,
      zIndex: 2,
      position: 'relative',
      color: theme.palette.common.white,
    }
  },
  text: {
    transition: 'all 0.3s cubic-bezier(0, 1.73, 1, 1.02)',
    visibility: 'hidden',
    position: 'absolute',
    left: 40,
    background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    textTransform: 'capitalize',
    borderRadius: theme.rounded.medium,
    padding: theme.spacing(1, 2),
    zIndex: 2,
    whiteSpace: 'nowrap',
    opacity: 0,
    '& span': {
      fontSize: 18,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  deco: {
    '&:after': {
      opacity: 0,
      content: '""',
      background: theme.palette.common.black,
      position: 'absolute',
      bottom: -32,
      left: -8,
      width: '100%',
      height: 32,
      transition: 'border-radius 0.5s ease',
      borderTopRightRadius: 0,
    },
    '&:before': {
      opacity: 0,
      content: '""',
      background: theme.palette.background.paper,
      position: 'absolute',
      bottom: -32,
      left: -8,
      width: '100%',
      height: 32,
    },
  },
  link: {
    textAlign: 'center',
    background: 'transparent',
    transition: 'border-radius 0.5s ease',
    borderTopLeftRadius: theme.rounded.small,
    borderBottomLeftRadius: theme.rounded.small,
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
    position: 'relative',
    '&:last-child': {
      [`& .${classes.deco}`]: {
        display: 'none',
      }
    },
    '&:first-of-type': {
      '&:after, &:before': {
        display: 'none',
      }
    },
    '&:after': {
      opacity: 0,
      content: '""',
      background: theme.palette.common.black,
      position: 'absolute',
      top: -32,
      left: -8,
      width: '100%',
      height: 32,
      transition: 'border-radius 0.5s ease',
      borderBottomRightRadius: 0,
    },
    '&:before': {
      opacity: 0,
      content: '""',
      background: theme.palette.background.paper,
      position: 'absolute',
      top: -32,
      left: -8,
      width: '100%',
      height: 32,
    },
    '&:hover': {
      borderTopLeftRadius: theme.rounded.medium,
      borderBottomLeftRadius: theme.rounded.medium,
      background: theme.palette.background.paper,
      '&:before': {
        opacity: 1,
      },
      '&:after': {
        opacity: 1,
        borderBottomRightRadius: theme.rounded.big,
      },
      [`& .${classes.deco}`]: {
        '&:before': {
          opacity: 1,
        },
        '&:after': {
          opacity: 1,
          borderTopRightRadius: theme.rounded.big,
        }
      },
      [`& .${classes.icon}`]: {
        zIndex: 3,
        background: `linear-gradient(320deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        '& span': {
          color: theme.palette.common.white,
        },
      },
      [`& .${classes.text}`]: {
        visibility: 'visible',
        opacity: 1,
        left: 70
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sideNavIconStyles;
