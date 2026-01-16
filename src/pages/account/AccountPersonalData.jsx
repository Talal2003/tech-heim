import { Box, CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import { useTranslation } from "react-i18next";
import useAccount from "../../hooks/useAccount";

export default function AccountPersonalData() {

    const { data: user, isLoading, isError, error } = useAccount();
    const { t, i18n } = useTranslation();

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
        {error.message}
    </Typography>

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
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
                            <Typography fontWeight="lighter" color="#717171">{user.fullName}</Typography>
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
                            <Typography fontWeight="lighter" color="#717171">{user.email}</Typography>
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
                            <Typography fontWeight="lighter" color="#717171">{user.phoneNumber}</Typography>
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
                            <Typography fontWeight="lighter" color="#717171">{user.city}</Typography>
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
    )
}
