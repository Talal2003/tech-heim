import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import useAuthStore from "../../store/authStore";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Account() {

    const user = useAuthStore(state => state.user);
    const logout = useAuthStore(state => state.logout);
    const { t, i18n } = useTranslation();
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
                    <Button sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", color: "inherit", textTransform: "none", gap: 2, p: 3 }}>
                        <ManageAccountsOutlinedIcon sx={{ color: "#444444" }} />
                        <Typography component={"body1"} variant="h6" fontWeight="lighter">Personal Data</Typography>
                    </Button>
                    <Button sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", color: "inherit", textTransform: "none", gap: 2, p: 3 }}
                        onClick={handleLogout}>
                        <LogoutOutlinedIcon sx={{ color: "#444444" }} />
                        <Typography component={"body1"} variant="h6" color="error" fontWeight="lighter">Log out</Typography>
                    </Button>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography component={"h5"} variant="h6">Identification</Typography>
                        <Typography fontWeight="lighter" color="#717171">Verify your identity</Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "space-between",
                                alignItems: "center", backgroundColor: "#F9F9F9", borderRadius: 2, gap: 0.5, p: 2
                            }}>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                    <PersonOutlineOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography fontWeight="lighter" color="#717171">{user?.name}</Typography>
                                </Box>
                                <IconButton>
                                    <EditOutlinedIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "space-between",
                                alignItems: "center", backgroundColor: "#F9F9F9", borderRadius: 2, gap: 0.5, p: 2
                            }}>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                    <EmailOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography fontWeight="lighter" color="#717171">{user?.email}</Typography>
                                </Box>
                                <IconButton>
                                    <EditOutlinedIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "space-between",
                                alignItems: "center", backgroundColor: "#F9F9F9", borderRadius: 2, gap: 0.5, p: 2
                            }}>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                    <PhoneOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography fontWeight="lighter" color="#717171">+12345678910</Typography>
                                </Box>
                                <IconButton>
                                    <EditOutlinedIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "space-between",
                                alignItems: "center", backgroundColor: "#F9F9F9", borderRadius: 2, gap: 0.5, p: 2
                            }}>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                    <KeyOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography fontWeight="lighter" color="#717171">*********</Typography>
                                </Box>
                                <IconButton>
                                    <EditOutlinedIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "space-between",
                                alignItems: "center", backgroundColor: "#F9F9F9", borderRadius: 2, gap: 0.5, p: 2
                            }}>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                    <HomeOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography fontWeight="lighter" color="#717171">HubSpot, 25 First Street, Cambridge MA 02141, United States</Typography>
                                </Box>
                                <IconButton>
                                    <EditOutlinedIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Box sx={{
                                display: "flex", flexDirection: "row", justifyContent: "space-between",
                                alignItems: "center", backgroundColor: "#F9F9F9", borderRadius: 2, gap: 0.5, p: 2
                            }}>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                    <SignpostOutlinedIcon sx={{ color: "#444444" }} />
                                    <Typography fontWeight="lighter" color="#717171">Postal code</Typography>
                                </Box>
                                <IconButton>
                                    <EditOutlinedIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </>
    )
}
