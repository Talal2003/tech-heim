import { Box, Grid, IconButton, Typography } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';;
import { useTranslation } from "react-i18next";

export default function AccountPaymentInstalments() {

    const { t } = useTranslation();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography component={"h5"} variant="h6">{t("Cards")}</Typography>
                <Typography fontWeight="lighter" color="neutral.gray700">{t("manage payment methods")}</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                        backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2, maxWidth: { md: 520 }
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <Typography fontWeight="lighter" color="neutral.gray700">{t("Credit or Debit cards")}</Typography>
                        </Box>
                        <IconButton>
                            <EditOutlinedIcon color="primary" />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12 }} >
                    <Box sx={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                        backgroundColor: "neutral.gray100", borderRadius: 2, gap: 0.5, p: 2, maxWidth: { md: 520 }
                    }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                            <Typography fontWeight="lighter" color="neutral.gray700">{t("PayPal")}</Typography>
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
