import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi' })(theme => ({
  root: {
    paddingBottom: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    '& > div': {
      [theme.breakpoints.down('lg')]: {
        padding: 0,
      }
    }
  },
  props: {
    width: 240,
    height: 240,
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    '& > div': {
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: theme.spacing(8),
      top: theme.spacing(2),
      width: 240
    }
  },
  carousel: {
    position: 'relative',
    slickSlide: {
      marginTop: theme.spacing()
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(1, 0),
    marginBottom: theme.spacing(),
    '&:focus': {
      outline: 'none'
    }
  },
  nav: {
    position: 'absolute',
    top: '45%',
    width: 36,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: theme.palette.background.default,
    border: 'none',
    boxShadow: 'none',
    zIndex: 3,
    transform: `scale(2.5) ${theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)'}`,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& i': {
      transform: 'scale(1.2)',
      color: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.text.primary,
    }
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  },
  itemPropsFirst: {
    '& div': {
      width: theme.direction === 'rtl' ? 400 : 350,
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 500 : 300,
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 350 : 400,
    '& div': {
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 300 : 500,
      }
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
