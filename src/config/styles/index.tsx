import { GlobalStyles, useTheme } from '@mui/material';

export const GlobalStylesCustom = () => {
  const theme = useTheme();
  return (
    <GlobalStyles styles={{
      body: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
      },

      ':root': {
        [theme.breakpoints.up('xs')]: {
          fontSize: '10px',
        },
        [theme.breakpoints.up('sm')]: {
          fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '14px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '16px',
        },
        [theme.breakpoints.up('xl')]: {
          fontSize: '18px',
        },
      },
    }}
    />
  );
};
