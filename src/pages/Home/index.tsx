import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { StatesRedux } from '../../store/modules/rootReducers';
import { changeTheme } from '../../store/modules/theme/themeSlice';

export function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const themeName = useSelector((state:StatesRedux) => state.theme);
  const handleChangeTheme = () => dispatch(changeTheme(themeName === 'light' ? 'dark' : 'light'));

  return (
    <Box color="secondary">
      <Typography variant="h1" color="primary">Diener</Typography>
      <Button
        variant="contained"
        onClick={handleChangeTheme}
      >
        Hello World
      </Button>
    </Box>

  );
}
