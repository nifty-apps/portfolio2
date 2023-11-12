import { makeStyles } from 'tss-react/mui';

const footerStyles = makeStyles({ uniqId: 'footer' })((theme) => ({
  root: {
    textAlign: 'center',
    paddingBottom: theme.spacing(5)
  },
  decoration: {},
  logo: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(5)
    },
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 80,
      marginBottom: theme.spacing(2)
    },
    '& h4': {
      textTransform: 'uppercase',
    }
  },
  iconSet: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    color: theme.palette.primary.dark,
    width: 36,
    height: 36,
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& a': {
      margin: theme.spacing(1),
      padding: theme.spacing(0),
      width: 36,
      height: 36,
    },
    '& i': {
      fontSize: 24
    }
  },
  tw: {
    color: '#736B6B'
  },
  fb: {
    color: '#193CCC'
  },
  in: {
    color: '#0050FF'
  },
  ig: {
    color: '#FF2C17'
  },
  contact: {
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  },
  download: {
    marginBottom: theme.spacing(4)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
