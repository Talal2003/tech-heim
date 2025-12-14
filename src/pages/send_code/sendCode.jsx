import { Alert, Box, Button, CircularProgress, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { SendCodeSchema } from "../../validations/SendCodeSchema";
import { useState } from "react";
import axiosInstance from "../../api/axiosinstance";

export default function SendCode() {

  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState("");
  const [successfulSentCode, setSuccessfulSentCode] = useState(false);
  const{register, handleSubmit, formState: { errors, isSubmitting }} = useForm({
    resolver:yupResolver(SendCodeSchema),
    mode:'onBlur'
  })
  const sendCodeForm = async(values)=> {
    console.log(values);
    try {
      const response = await axiosInstance.post(`/Auth/Account/SendCode`, values);
      console.log(response);
      if(response.status === 200) {
        localStorage.setItem("email", values.email);
        setSuccessfulSentCode(true);
        setServerErrors("");
        navigate('/reset-password');
      }

    }catch(err) {
      console.log(err);
      setServerErrors(err.response.data.message);
      setSuccessfulSentCode(false);
    }
  }
  return (
    <Box className="send-code-form"
    sx={{ display:'flex', flexDirection:'column', gap:2, mt:3, alignItems:'center' }}>

      <Box onSubmit={handleSubmit(sendCodeForm)} component='form'
      sx={{ display:'flex', flexDirection:'column', gap:2, alignItems:'center' }}>

        <Tabs
          value={0}
          aria-label="nav tabs example"
          role="navigation"
        >
          <Tab label="Log in" component={RouterLink} to="/login" />
          <Tab label="Create Account" component={RouterLink} to="/register" />
        </Tabs>

        <Box sx={{ display:'flex',flexDirection:'column', gap:1, alignSelf: 'flex-start', mt:1, mb:2 }}>
          <Typography variant='h5'>Password Reset</Typography>
          <Box>
            <Typography>provide the email address</Typography>
            <Typography>associated with your account</Typography>
            <Typography>to recover your password.</Typography>
          </Box>
        </Box>

        {(serverErrors.length > 0) ? 
          <Alert variant="outlined" severity="error" sx={{ width: '100%',}}>
            {serverErrors}
          </Alert>
        : null}

        <TextField {...register('email')} label="E-mail" fullWidth variant="outlined" 
        error={errors.email} helperText={errors.email?.message}
        />
        
        <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress /> : 'Reset Password'}
        </Button>
      </Box>
      </Box>
  )
}