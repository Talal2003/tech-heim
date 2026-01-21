import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import useAuthStore from "../../store/authStore";
import { useTranslation } from "react-i18next";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AccountLayout() {

    const [value, setValue] = useState(0);
    const user = useAuthStore(state => state.user);
    const logout = useAuthStore(state => state.logout);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "#F9F9F9" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2, px: 1, py: 0.25 }}>
                        <AccountCircleOutlinedIcon sx={{ color: '#B4B4B4', fontSize: '3.75rem' }} />
                        <Typography component={"h5"} variant="h6">{user?.name}</Typography>
                    </Box>
                    <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} orientation="vertical"
                        variant="scrollable" scrollButtons="auto" aria-label="categories tabs"
                        sx={{ ".MuiTabs-indicator": { right: "auto", } }}>
                        <Tab
                            component={NavLink}
                            to=''
                            sx={{ p: 3, alignItems: "start" }}
                            label={
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", color: "inherit", textTransform: "none", gap: 2 }}>
                                    <ManageAccountsOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography component={"body1"} variant="h6" fontWeight="lighter">{t("Personal Data")}</Typography>
                                </Box>
                            } />
                        <Tab sx={{ p: 3, alignItems: "start" }}
                            component={NavLink}
                            to='payment-instalments'
                            label={
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", color: "inherit", textTransform: "none", gap: 2 }}>
                                    <ManageAccountsOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography component={"body1"} variant="h6" fontWeight="lighter">{t("Payment & Instalments")}</Typography>
                                </Box>
                            } />
                        <Tab sx={{ p: 3, alignItems: "start" }}
                            component={NavLink}
                            to='orders'
                            label={
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", color: "inherit", textTransform: "none", gap: 2 }}>
                                    <ManageAccountsOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography component={"body1"} variant="h6" fontWeight="lighter">{t("Orders")}</Typography>
                                </Box>
                            } />
                    </Tabs>
                    <Button sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", color: "inherit", textTransform: "none", gap: 2, p: 3 }}
                        onClick={handleLogout}>
                        <LogoutOutlinedIcon sx={{ color: "#444444" }} />
                        <Typography component={"body1"} variant="h6" color="error" fontWeight="lighter">{t("Log out")}</Typography>
                    </Button>
                </Box>
                <Box sx={{ flex: 1, pr: 13 }}>
                    <Outlet />
                </Box>
            </Box >
        </>
    )
}
