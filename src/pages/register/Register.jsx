import { FacebookRounded, Google } from "@mui/icons-material";
import { Alert, Box, Button, Checkbox, CircularProgress, FormControlLabel, Link, Tab, Tabs, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../validations/RegisterSchema";
import { useState } from "react";

export default function Register() {

  const [serverErrors, setServerErrors] = useState([]);
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const{register, handleSubmit, formState: { errors, isSubmitting }} = useForm({
    resolver:yupResolver(RegisterSchema),
    mode:'onBlur'
  })
  const registerForm = async(values)=> {
    console.log(values);
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`, values);
      console.log(response);
      if(response.status === 201) {
        setSuccessfulRegistration(true);
        setServerErrors("");
      }

    }catch(err) {
      console.log(err);
      setServerErrors(err.response.data.errors);
      setSuccessfulRegistration(false);
    }
  }
  return (
    <Box className="register-form"
    sx={{ display:'flex', flexDirection:'column', gap:2, mt:3, alignItems:'center' }}>

      <Box onSubmit={handleSubmit(registerForm)} component='form'
      sx={{ display:'flex', flexDirection:'column', gap:2, alignItems:'center' }}>

        <Tabs
          value={1}
          aria-label="nav tabs example"
          role="navigation"
        >
          <Tab label="Log in" component={RouterLink} to="/login" />
          <Tab label="Create Account"component={RouterLink} to="/register" />
        </Tabs>

        <Typography variant='h5'>Create your account</Typography>

        {serverErrors.length > 0 ? 
          serverErrors.map( (err)=>
            <Alert variant="outlined" severity="error" sx={{ width: '100%',}}>
              {err}
            </Alert>
          )
        : null}

        {successfulRegistration && (
          <Alert variant="outlined" severity="info" sx={{ width: '100%',}}>
            <Typography component="strong" variant="p">Registration successful!</Typography>
            <Typography variant="body2">A confirmation email has</Typography>
            <Typography variant="body2">been sent to your inbox.</Typography>
          </Alert>
        )}

        <TextField {...register('fullName')} label="Full Name" fullWidth variant="outlined" 
        error={errors.fullName} helperText={errors.fullName?.message}
        />
        <TextField {...register('email')} label="E-mail" fullWidth variant="outlined" 
        error={errors.email} helperText={errors.email?.message}
        />
        <TextField {...register('userName')} label="Username" fullWidth variant="outlined" 
        error={errors.userName} helperText={errors.userName?.message}
        />
        <TextField {...register('password')} type="password" label="Password" fullWidth variant="outlined" 
        error={errors.password} helperText={errors.password?.message}
        />
        <TextField {...register('phoneNumber')} label="Phone Number" fullWidth variant="outlined" 
        error={errors.phoneNumber} helperText={errors.phoneNumber?.message}
        />
        <FormControlLabel required control={<Checkbox size="small" />}  
        label={<Typography variant="caption">I agree to all Terms & Conditions</Typography>}
        sx={{ alignSelf: 'flex-start' }} />
        <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress /> : 'Create Account'}
        </Button>
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
