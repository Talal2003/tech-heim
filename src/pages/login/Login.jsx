import { yupResolver } from "@hookform/resolvers/yup";
import { FacebookRounded, Google } from "@mui/icons-material";
import { Alert, Box, Button, Checkbox, CircularProgress, FormControlLabel, Link, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { LoginSchema } from "../../validations/LoginSchema";
import useLogin from "../../hooks/useLogin";
import { useTranslation } from "react-i18next";

export default function Login() {
  
  const { t } = useTranslation();
  const{register, handleSubmit, formState: { errors, isSubmitting }} = useForm({
      resolver:yupResolver(LoginSchema),
      mode:'onBlur'
  })
  const {loginMutation, successfulLogin, serverErrors} = useLogin();
  const loginForm = async (values)=> {
    await loginMutation.mutateAsync(values);
  }

  return (
    <Box className="login-form"
    sx={{ display:'flex', flexDirection:'column', gap:2, mt:3, alignItems:'center' }}>

      <Box onSubmit={handleSubmit(loginForm)} component='form'
      sx={{ display:'flex', flexDirection:'column', gap:2, alignItems:'center' }}>

        <Tabs
          value={0}
          aria-label="nav tabs example"
          role="navigation"
        >
          <Tab label={t("Log in")} component={RouterLink} to="/login" />
          <Tab label={t("Create Account")} component={RouterLink} to="/register" />
        </Tabs>

        <Typography variant='h5' >{t("Log in to Tech Heim")}</Typography>

        {(serverErrors.length > 0) ? 
          <Alert variant="outlined" severity="error" sx={{ width: '100%',}}>
            {serverErrors}
          </Alert>
        : null}

        {successfulLogin && (
          <Alert variant="outlined" severity="success" sx={{ width: '100%',}}>
            {t("Logged In Successfully")}
          </Alert>
        )}

        <TextField {...register('email')} label={t("E-mail")} fullWidth variant="outlined"
        error={errors.email} helperText={errors.email?.message}
        />
        <TextField {...register('password')} type="password" label={t("Password")} fullWidth variant="outlined"
        error={errors.password} helperText={errors.password?.message}
        />
        <Link component={RouterLink} variant="caption" to='/send-code'underline='none'
        sx={{ alignSelf: 'flex-end' }}>{t("Forgot Password ?")}</Link>
        <FormControlLabel control={<Checkbox size="small" />}
        label={<Typography variant="caption">{t("Keep me logged in")}</Typography>}
        sx={{ alignSelf: 'flex-start' }} />
        <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress /> : t("Log In")}
        </Button>
      </Box>

      <Typography>{t("Or Log In with")}</Typography>

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
          <Typography>{t("Don’t have an account ?")}</Typography>
          <Link component={RouterLink} to='/register' underline='none'>{t("sign up")}</Link>
        </Box>
      </Box>
    </Box>
  )
}
