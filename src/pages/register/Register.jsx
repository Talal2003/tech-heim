import { FacebookRounded, Google } from "@mui/icons-material";
import { Alert, Box, Button, Checkbox, CircularProgress, FormControlLabel, Link, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../validations/RegisterSchema";
import useRegister from "../../hooks/useRegister";
import { useTranslation } from "react-i18next";

export default function Register() {

  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: 'onBlur'
  })
  const { registerMutation, serverErrors, successfulRegistration } = useRegister();
  const registerForm = async (values) => {
    await registerMutation.mutateAsync(values);
  }

  return (
    <>
      <Box className="register-form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3, alignItems: 'center' }}>

        <Box onSubmit={handleSubmit(registerForm)} component='form'
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>

          <Tabs
            value={1}
            aria-label="nav tabs example"
            role="navigation"
          >
            <Tab label={t("Log in")} component={RouterLink} to="/login" />
            <Tab label={t("Create Account")} component={RouterLink} to="/register" />
          </Tabs>

          <Typography variant='h5'>{t("Create your account")}</Typography>

          {serverErrors.length > 0 ?
            serverErrors.map((err) =>
              <Alert variant="outlined" severity="error" sx={{ width: '100%', }}>
                {err}
              </Alert>
            )
            : null}

          {successfulRegistration && (
            <Alert variant="outlined" severity="info" sx={{ width: '100%', }}>
              <Typography component="strong" variant="p">{`${t("Registration successful")}!`}</Typography>
              <Typography variant="body2">{`${t("A confirmation email has been sent to your inbox")}.`}</Typography>
            </Alert>
          )}

          <TextField {...register('fullName')} label={t("Full Name")} fullWidth variant="outlined"
            error={errors.fullName} helperText={errors.fullName?.message}
          />
          <TextField {...register('email')} label={t("E-mail")} fullWidth variant="outlined"
            error={errors.email} helperText={errors.email?.message}
          />
          <TextField {...register('userName')} label={t("Username")} fullWidth variant="outlined"
            error={errors.userName} helperText={errors.userName?.message}
          />
          <TextField {...register('password')} type="password" label={t("Password")} fullWidth variant="outlined"
            error={errors.password} helperText={errors.password?.message}
          />
          <TextField {...register('phoneNumber')} label={t("Phone Number")} fullWidth variant="outlined"
            error={errors.phoneNumber} helperText={errors.phoneNumber?.message}
          />
          <FormControlLabel required control={<Checkbox size="small" />}
            label={<Typography variant="caption">{t("I agree to all Terms & Conditions")}</Typography>}
            sx={{ alignSelf: 'flex-start' }} />
          <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress /> : t("Create Account")}
          </Button>
        </Box>

        <Typography>{t("Or Sign Up with")}</Typography>

        <Box className="other-sign-up-options"
          sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button variant="outlined" startIcon={<Google />} fullWidth>
              Google
            </Button>
            <Button variant="outlined" startIcon={<FacebookRounded />} fullWidth>
              Facebook
            </Button>
          </Box>
          <Box
            sx={{ display: 'flex', gap: 2 }}>
            <Typography>{t("Already have an account ?")}</Typography>
            <Link component={RouterLink} to='/login' underline='none'>{t("sign in")}</Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}
