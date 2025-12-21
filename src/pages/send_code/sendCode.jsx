import { Alert, Box, Button, CircularProgress, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { SendCodeSchema } from "../../validations/SendCodeSchema";
import useSendCode from "../../hooks/useSendCode";

export default function SendCode() {

  const{register, handleSubmit, formState: { errors, isSubmitting }} = useForm({
    resolver:yupResolver(SendCodeSchema),
    mode:'onBlur'
  })
  const {sendCodeMutation, serverErrors} = useSendCode();
  const sendCodeForm = async(values)=> {
    await sendCodeMutation.mutateAsync(values);
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