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
    const { t } = useTranslation();

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
        {error.message}
    </Typography>

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography component={"h5"} variant="h6">{t("Identification")}</Typography>
                <Typography fontWeight="lighter" color="neutral.gray700">{t("Verify your identity")}</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center", backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <PersonOutlineOutlinedIcon sx={{ color: "neutral.gray900" }} />
                            <Typography fontWeight="lighter" color="neutral.gray700">{user.fullName ||
                                "Jimmy Smith"}</Typography>
                        </Box>
                        <IconButton>
                            <EditOutlinedIcon color="primary" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center", backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <EmailOutlinedIcon sx={{ color: "neutral.gray900" }} />
                            <Typography fontWeight="lighter" color="neutral.gray700">{user.email ||
                                "Jimmy.smith1996@gmail.com"}</Typography>
                        </Box>
                        <IconButton>
                            <EditOutlinedIcon color="primary" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center", backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <PhoneOutlinedIcon sx={{ color: "neutral.gray900" }} />
                            <Typography fontWeight="lighter" color="neutral.gray700">{user.phoneNumber ||
                                "+12345678910"}</Typography>
                        </Box>
                        <IconButton>
                            <EditOutlinedIcon color="primary" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center", backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <KeyOutlinedIcon sx={{ color: "neutral.gray900" }} />
                            <Typography fontWeight="lighter" color="neutral.gray700">*********</Typography>
                        </Box>
                        <IconButton>
                            <EditOutlinedIcon color="primary" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center", backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <HomeOutlinedIcon sx={{ color: "neutral.gray900" }} />
                            <Typography fontWeight="lighter" color="neutral.gray700">{user.city ||
                                t("HubSpot, 25 First Street, Cambridge MA 02141, United States")}</Typography>
                        </Box>
                        <IconButton>
                            <EditOutlinedIcon color="primary" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center", backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <SignpostOutlinedIcon sx={{ color: "neutral.gray900" }} />
                            <Typography fontWeight="lighter" color="neutral.gray700">{t("Postal code")}</Typography>
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
