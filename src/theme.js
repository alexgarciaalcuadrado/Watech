import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e53935',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f4511e',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
