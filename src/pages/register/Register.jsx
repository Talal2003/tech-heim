import { FacebookRounded, Google } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';

export default function Register() {

const{register, handleSubmit} = useForm({})
const registerForm = async(values)=>{
  console.log(values);
  try {
    const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`, values);
    console.log(response);
  }catch(err) {
    console.log(err);
  }
}

  return (
    <Box className="register-form"
    sx={{ display:'flex', flexDirection:'column', gap:2, mt:3, alignItems:'center' }}>
      <Typography variant='h5'>Create your account</Typography>

      <Box onSubmit={handleSubmit(registerForm)} component='form'
      sx={{ display:'flex', flexDirection:'column', gap:2, alignItems:'center' }}>
        <TextField {...register('fullName')} label="Full Name" fullWidth variant="outlined" />
        <TextField {...register('email')} label="E-mail" fullWidth variant="outlined" />
        <TextField {...register('userName')} label="Username" fullWidth variant="outlined" />
        <TextField {...register('password')} label="Password" fullWidth variant="outlined" />
        <TextField {...register('phoneNumber')} label="Phone Number" fullWidth variant="outlined" />
        <FormControlLabel required control={<Checkbox />}  label="I agree to all Terms & Conditions" />
        <Button variant="contained" fullWidth type="submit">Create Account</Button>
      </Box>

      <Typography>Or Sign Up with</Typography>

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
          <Typography>Already have an account ?</Typography>
          <Link component={RouterLink} to='/login' underline='none'>sign in</Link>
        </Box>
      </Box>
    </Box>
  )
}
