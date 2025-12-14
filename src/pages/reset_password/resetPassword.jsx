import { Alert, Box, Button, CircularProgress, Tab, Tabs, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "../../validations/ResetPasswordSchema";
import { useState } from "react";

export default function SendCode() {
    
    const userEmail = localStorage.getItem("email");
    const [serverErrors, setServerErrors] = useState("");
    const [serverMessage, setServerMessage] = useState("");
    const [successfulSentCode, setSuccessfulSentCode] = useState(false);
    const{register, handleSubmit, formState: { errors, isSubmitting }} = useForm({
        resolver:yupResolver(ResetPasswordSchema),
        mode:'onBlur',
    })
    const sendCodeForm = async(values)=> {
        console.log(values);
        try {
            const response = await axios.patch(`https://knowledgeshop.runasp.net/api/Auth/Account/ResetPassword`, values);
            console.log(response);
        if(response.status === 200) {
            setSuccessfulSentCode(true);
            setServerMessage(response.data.message);
            setServerErrors("");
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
                <Typography variant='h5'>Enter your code</Typography>
                <Box>
                    <Typography>Verification code sent to </Typography>
                    <Typography>{userEmail}</Typography>
                </Box>
            </Box>

            {(serverErrors.length > 0) ? 
                <Alert variant="outlined" severity="error" sx={{ width: '100%',}}>
                    {serverErrors}
                </Alert>
            : null}

            {successfulSentCode && (
            <Alert variant="outlined" severity="success" sx={{ width: '100%',}}>
                {serverMessage}
            </Alert>
            )}

            <TextField {...register('code')} label="Code" fullWidth variant="outlined" 
            error={errors.code} helperText={errors.code?.message}
            />
            <TextField {...register('newPassword')} label="New Password" fullWidth variant="outlined" 
            error={errors.newPassword} helperText={errors.newPassword?.message}
            />
            <TextField {...register('email')} label="E-mail" fullWidth variant="outlined" 
            error={errors.email} helperText={errors.email?.message} value={userEmail} disabled
            />
            
            <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
                {isSubmitting ? <CircularProgress /> : 'Reset Password'}
            </Button>
        </Box>
        </Box>
    )
}