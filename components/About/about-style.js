import { makeStyles } from 'tss-react/mui';
const gold = '#D6BD96';

const aboutStyles = makeStyles({ uniqId: 'about' })(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      '& .MuiContainer-root': {
        maxWidth: 1280,
        padding: 0,
      },
    },
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        padding: 0
      }
    }
  },
  about: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      '& > h5': {
        fontSize: 18,
        lineHeight: '28px',
        padding: theme.spacing(0, 2)
      }
    }
  },
  reward: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(0.5),
    },
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto'
    }
  },
  gh: {
    color: '#878787'
  },
  fb: {
    color: '#193CCC'
  },
  in: {
    color: '#0050FF'
  },
  ig: {
    color: '#F41056'
  },
  item: {
    textAlign: 'center',
    color: gold,
    margin: theme.spacing(),
    borderRadius: '50%',
    position: 'relative',
    width: 160,
    height: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      position: 'relative',
      zIndex: 1,
    },
    '& figure': {
      height: 90,
      margin: theme.spacing(0, 0, 2),
      [theme.breakpoints.down('md')]: {
        height: 50
      },
      '& img': {
        height: '100%',
      },
    },
    '& p': {
      fontFamily: 'Times New Roman',
      [theme.breakpoints.down('md')]: {
        fontSize: 16
      }
    },
    '& h5': {
      fontSize: 18,
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: 16
      }
    },
  },
  photo: {
    position: 'relative',
    marginTop: -140,
    background: 'none',
    zIndex: 1,
    width: 350,
    height: 350,
    borderRadius: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(2)
    },
    '& figure': {
      margin: 0,
      borderRadius: theme.rounded.big,
      overflow: 'hidden',
      marginLeft: -1,
      marginTop: -1,
      width: '101%',
      height: '101%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        transform: 'scale(1.02)',
        width: '100%',
        minHeight: '100%',
      }
    }
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: 600,
    margin: theme.spacing(3, 0, 3, -2),
    '& button': {
      margin: theme.spacing(),
      width: 36,
      height: 36,
    },
    '& i': {
      fontSize: 24
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
