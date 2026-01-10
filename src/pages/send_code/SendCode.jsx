import { Alert, Box, Button, CircularProgress, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { SendCodeSchema } from "../../validations/SendCodeSchema";
import useSendCode from "../../hooks/useSendCode";
import { useTranslation } from "react-i18next";

export default function SendCode() {

  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(SendCodeSchema),
    mode: 'onBlur'
  })
  const { sendCodeMutation, serverErrors } = useSendCode();
  const sendCodeForm = async (values) => {
    await sendCodeMutation.mutateAsync(values);
  }

  return (
    <>
      <Box className="send-code-form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3, alignItems: 'center' }}>

        <Box onSubmit={handleSubmit(sendCodeForm)} component='form'
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>

          <Tabs
            value={0}
            aria-label="nav tabs example"
            role="navigation"
          >
            <Tab label={t("Log in")} component={RouterLink} to="/login" />
            <Tab label={t("Create Account")} component={RouterLink} to="/register" />
          </Tabs>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignSelf: 'flex-start', mt: 1, mb: 2 }}>
            <Typography variant='h5'>{t("Password Reset")}</Typography>
            <Box>
              <Typography>{`${t("provide the email address associated with your account to recover your password")}.`}</Typography>
            </Box>
          </Box>

          {(serverErrors.length > 0) ?
            <Alert variant="outlined" severity="error" sx={{ width: '100%', }}>
              {serverErrors}
            </Alert>
            : null}

          <TextField {...register('email')} label={t("E-mail")} fullWidth variant="outlined"
            error={errors.email} helperText={errors.email?.message}
          />

          <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress /> : t("Reset Password")}
          </Button>
        </Box>
      </Box>
    </>
  )
}
