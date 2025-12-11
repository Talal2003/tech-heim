import { FacebookRounded, Google } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {

const{register, handleSubmit} = useForm({})
const loginForm = async(values)=>{
  console.log(values);
  try {
    const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Login`, values);
    if(response.status === 200) {
      localStorage.setItem("token", response.data.accessToken);
    }
  }catch(err) {
    console.log(err);
  }
}

  return (
    <Box className="login-form"
    sx={{ display:'flex', flexDirection:'column', gap:2, mt:3, alignItems:'center' }}>
      <Typography variant='h5'>Log in to Tech Heim</Typography>

      <Box onSubmit={handleSubmit(loginForm)} component='form'
      sx={{ display:'flex', flexDirection:'column', gap:2, alignItems:'center' }}>
        <TextField {...register('email')} label="E-mail" fullWidth variant="outlined" />
        <TextField {...register('password')} label="Password" fullWidth variant="outlined" />
        <FormControlLabel control={<Checkbox />}  label="Keep me logged in" />
        <Button variant="contained" fullWidth type="submit">Log In</Button>
      </Box>

      <Typography>Or Log In with</Typography>

      <Box className="other-sign-up-options"
      sx={{display:'flex', gap:2, flexDirection:'column', alignItems:'center'}}>
        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
          <Button variant="outlined" startIcon={<Google />} fullWidth>
            Google
          </Button>
          <Button variant="outlined" startIcon={<FacebookRounded />} fullWidth>
            Facebook
          </Button>
        </Box>
        <Box 
          sx={{display:'flex', gap:2}}>
          <Typography>Don’t have an account ? </Typography>
          <Link component={RouterLink} to='/register' underline='none'>sign up</Link>
        </Box>
      </Box>
    </Box>
  )
}
