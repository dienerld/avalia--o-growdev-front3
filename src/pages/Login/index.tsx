import {
  Box, Button,
  Grid, TextField, Typography,
} from '@mui/material';
import bg from '@assets/BG5.webp';
import { useState } from 'react';

export function Login() {
  const [formOk, setFormOk] = useState(true);
  return (
    <Grid container height="100vh" width="100vw">
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: '100%',
          height: '100%',
          background: `url(${bg}) no-repeat center center fixed`,
        }}
      />
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          xs: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            gap: '1rem',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '400px',
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="primary"
            mt="10rem"
            mb="2rem"
          >Login
          </Typography>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            fullWidth
            required
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            fullWidth
            required
          />
          <TextField
            error
            id="filled-basic"
            label="Repeat Password"
            variant="filled"
            helperText="Incorrect entry."
            fullWidth
            required
          />

          <Button
            type="button"
            variant="contained"
            color="primary"
            disabled={!formOk}
            sx={{
              borderRadius: '1rem',
              minWidth: '20rem',
              width: '100%',
              marginTop: '2rem',
            }}
          >
            Register
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
