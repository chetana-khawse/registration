import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const theme = createTheme();
function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: 2,
          px: 4,
          py: 6,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <ModeRoundedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="testarea"
                  id="Address"
                  autoComplete="Address"
                />
                <br/> <br/>
                <FormControl fullWidth>
                
  <NativeSelect
    defaultValue={1}
    inputProps={{
      name: 'city',
      id: 'uncontrolled-native',
    }}
  >
    <option value={1}>Select City</option>
    <option value={2}>Wardha</option>
    <option value={3}>Pune</option>
    <option value={3}>Mumbai</option>
  </NativeSelect>

  
</FormControl> <br/><br/>
<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        
      </RadioGroup>
      <FormLabel id="demo-row-radio-buttons-group-label">Hobbies</FormLabel>

      <FormGroup direction="row" spacing={2}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Dancing" />
      <FormControlLabel control={<Checkbox />} label="Reading" />
      <FormControlLabel control={<Checkbox />} label="Singing" />
    </FormGroup>

    <Stack direction="row" alignItems="center" spacing={5}>
      <Button variant="contained" component="label">
        Upload Photo
      </Button>
      <input  accept="image/*" multiple type="file" />
    </Stack>
    <br/><br/>
    <Grid item xs={12}>
    <FormLabel id="demo-row-radio-buttons-group-label" required>DOB</FormLabel>
    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ mt: 6 ,height: '25%', width: 'auto' }}>
      <DatePicker />
    </LocalizationProvider></Grid>
    
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I Agree"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
    
    
    </>
  )
}

export default Register