import { makeStyles } from 'tss-react/mui';

const pagenav = makeStyles({ uniqId: 'pagenav' })((theme, _params, classes) => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    background: '#212121',
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: '#FFF',
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light,
      },
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    [`&.${classes.show}`]: {
      [`& .${classes.fab}`]: {
        opacity: 1,
        transform: 'scale(1)',
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.text.secondary}`,
        display: 'block',
        transition: 'all 0.4s ease',
      },
      '&[class="active"] a': {
        background: theme.palette.common.black,
        border: `1px solid ${theme.palette.primary.light}`,
      },
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important',
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: '#212121',
    color: theme.palette.common.white,
    fontSize: 14
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default pagenav;
