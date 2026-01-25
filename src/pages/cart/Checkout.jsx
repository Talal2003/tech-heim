import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Divider, FormControl, FormControlLabel, Grid, Link, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from 'react-router-dom';
import useCart from "../../hooks/useCart";
import { useState } from "react";
import useCheckout from "../../hooks/useCheckout";

export default function Checkout() {

    const { data, isLoading, isError, error } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const { mutate: checkout, data: checkoutData, isPending: isCheckoutPending,
        isError: isCheckoutError, isSuccess: isCheckoutSuccess } = useCheckout();
    const { t } = useTranslation();

    const handleCheckout = () => {
        checkout({ paymentMethod })
    }

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
        {error.message}
    </Typography>

    return <>
        {isCheckoutError ? (
            <Alert variant="outlined" severity="error"
                sx={{ display: 'flex', alignSelf: 'center', width: 'fit-content' }}>
                {("Checkout failed")}
            </Alert>
        ) : null}
        {(isCheckoutSuccess && paymentMethod !== 'visa') ? (
            <Alert variant="outlined" severity="success"
                sx={{ display: 'flex', alignSelf: 'center', width: 'fit-content' }}>
                {checkoutData.message}
            </Alert>
        ) : null}

        <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid size={{ xs: 12, md: 7.2 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, px: 4, py: 3, border: "1px solid", borderRadius: 2, borderColor: "neutral.gray300" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            <Typography component={'h5'} variant="h6">{t("Payment")}</Typography>

                            <FormControl>
                                <RadioGroup
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Box sx={{ backgroundColor: 'neutral.gray100', borderRadius: 2, px: 1, py: 1.75 }}>
                                        <FormControlLabel value={'cash'} control={<Radio sx={{ pl: 0.5, py: 0 }} />} label={t("Cash")}
                                            sx={{ px: 1, py: 0 }} />
                                    </Box>
                                    <Box sx={{ backgroundColor: 'neutral.gray100', borderRadius: 2, px: 1, py: 1.75 }}>
                                        <FormControlLabel value={'visa'} control={<Radio sx={{ pl: 0.5, py: 0 }} />} label={t("Visa")}
                                            sx={{ px: 1 }} />
                                    </Box>
                                </RadioGroup>
                            </FormControl>

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            <Typography component={'h5'} variant="h6">{t("Shipping address")}</Typography>
                            <TextField placeholder={t("HubSpot, 25  Street, Cambridge MA 02141, United States")} fullWidth
                                sx={{ input: { px: 1, py: 1.9375 }, 'fieldset': { border: 'none' }, backgroundColor: 'neutral.gray100', borderRadius: 2 }} />
                        </Box>
                    </Box>
                    <Box sx={{ px: 1.3125, py: 1.8125 }}>
                        <Link component={RouterLink} variant="body1" to='/cart' underline='none'>{t("Return to cart")}</Link>
                    </Box>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4.8 }}>
                <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", borderColor: "neutral.gray300", gap: 5, p: 3, borderRadius: 2 }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 5, p: 0 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <Typography component={'h4'} variant="h5">{t("Your Order")}</Typography>
                                {data.items.map(item => (
                                    <Card key={item.productId} sx={{ boxShadow: "none" }}>
                                        <Box sx={{ display: "flex", flexDirection: "row", gap: 0.75, p: 0.75 }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 87, objectFit: 'contain', borderRadius: 2 }}
                                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                                title=""
                                            />
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "neutral.gray1000", width: "100%" }}>
                                                <Typography variant="body2">{item.productName}</Typography>
                                                <Typography variant="caption" sx={{ color: "neutral.gray700" }}>x{item.count}</Typography>
                                                <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>${item.price}</Typography>
                                            </Box>
                                        </Box>
                                        <Divider></Divider>
                                    </Card>
                                ))}
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                <TextField placeholder={t("discount code")} fullWidth variant="outlined"
                                    sx={{ input: { p: 1.5 }, 'fieldset': { borderRadius: 2 } }} />
                                <Button variant="outlined" sx={{ border: "2px solid", textTransform: "none", borderRadius: 2, px: 5.5625 }}>
                                    <Typography variant="body1">{t("Apply")}</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 1 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                {data.items.map(item => (
                                    <Box key={item.productId} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                        <Typography variant="body2" sx={{ color: "neutral.gray700" }}>{item.productName}</Typography>
                                        <Typography variant="body2" sx={{ color: "neutral.gray700" }}>${item.totalPrice}</Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Divider sx={{ borderBottomWidth: '2px' }}></Divider>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography component={'h6'} variant="body1" sx={{ color: "neutral.gray1000" }}>{t("Grand Total")}</Typography>
                                <Typography component={'h6'} variant="body1" sx={{ color: "neutral.gray1000" }}>${data.cartTotal}</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                    <CardActions sx={{ p: 0 }}>
                        <Button fullWidth variant="contained"
                            onClick={handleCheckout}
                            disabled={isCheckoutPending}
                            sx={{ py: 1.8125, borderRadius: 2, textTransform: 'none' }}>
                            <Typography variant="body1">{t("Continue to pay")}</Typography>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>
}
