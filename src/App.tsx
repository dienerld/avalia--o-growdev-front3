import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStylesCustom } from './config/styles';
import { darkTheme, lightTheme } from './config/styles/themes';
import { Routers } from './Routers';
import { StatesRedux } from './store/modules/rootReducers';

function App() {
  const themeName = useSelector((state:StatesRedux) => state.theme);

  const selectedTheme = () => (themeName === 'light' ? lightTheme : darkTheme);
  const [theme, setTheme] = useState(selectedTheme);

  useEffect(() => {
    setTheme(selectedTheme);
  }, [themeName]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStylesCustom />
        <Routers />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
