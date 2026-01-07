import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, FormControl, FormControlLabel, Grid, Link, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

export default function Checkout() {
    return <>
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 7 }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, px: 4, py: 3, border: "1px solid", borderRadius: 2, borderColor: "#EDEDED" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            <Typography component={'h5'} variant="h6">Payment</Typography>

                            <FormControl>
                                <RadioGroup defaultValue="credit-card"
                                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Box sx={{ backgroundColor: '#F9F9F9', borderRadius: 2, px: 1, py: 1.75 }}>
                                        <FormControlLabel value="credit-card" control={<Radio sx={{ pl: 0.5, py: 0 }} />} label="Credit Card"
                                            sx={{ px: 1 }} />
                                    </Box>
                                    <Box sx={{ backgroundColor: '#F9F9F9', borderRadius: 2, px: 1, py: 1.75 }}>
                                        <FormControlLabel value="cash" control={<Radio sx={{ pl: 0.5, py: 0 }} />} label="Cash"
                                            sx={{ px: 1, py: 0 }} />
                                    </Box>
                                </RadioGroup>
                            </FormControl>

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            <Typography component={'h5'} variant="h6">Shipping address</Typography>
                            <TextField placeholder="HubSpot, 25  Street, Cambridge MA 02141, United States" fullWidth
                                sx={{ input: { px: 1, py: 1.9375 }, 'fieldset': { border: 'none' }, backgroundColor: '#F9F9F9', borderRadius: 2 }} />
                        </Box>
                    </Box>
                    <Box sx={{ px: 1.3125, py: 1.8125 }}>
                        <Link component={RouterLink} variant="body1" to='/cart' underline='none'>Return to cart</Link>
                    </Box>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
                <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", borderColor: "#EDEDED", gap: 5, p: 3, borderRadius: 2 }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 5, p: 0 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <Typography component={'h4'} variant="h5">Your Order</Typography>
                                <Card sx={{ boxShadow: "none" }}>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: 0.75, p: 0.75 }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 87, objectFit: 'contain', borderRadius: 2 }}
                                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                            title=""
                                        />
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "#2D2D2D", width: "100%" }}>
                                            <Typography variant="body2">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</Typography>
                                            <Typography variant="caption" sx={{ color: "#717171" }}>x1</Typography>
                                            <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>$63.26</Typography>
                                        </Box>
                                    </Box>
                                    <Divider></Divider>
                                </Card>
                                <Card sx={{ boxShadow: "none" }}>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: 0.75, p: 0.75 }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 87, objectFit: 'contain', borderRadius: 2 }}
                                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                            title=""
                                        />
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "#2D2D2D", width: "100%" }}>
                                            <Typography variant="body2">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</Typography>
                                            <Typography variant="caption" sx={{ color: "#717171" }}>x1</Typography>
                                            <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>$63.26</Typography>
                                        </Box>
                                    </Box>
                                    <Divider></Divider>
                                </Card>
                                <Card sx={{ boxShadow: "none" }}>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: 0.75, p: 0.75 }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 87, objectFit: 'contain', borderRadius: 2 }}
                                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                            title=""
                                        />
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "#2D2D2D", width: "100%" }}>
                                            <Typography variant="body2">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</Typography>
                                            <Typography variant="caption" sx={{ color: "#717171" }}>x1</Typography>
                                            <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>$63.26</Typography>
                                        </Box>
                                    </Box>
                                    <Divider></Divider>
                                </Card>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                                <TextField placeholder="discount code" fullWidth variant="outlined"
                                    sx={{ input: { p: 1.5 }, 'fieldset': { borderRadius: 2 } }} />
                                <Button variant="outlined"  sx={{ border: "2px solid", textTransform: "none", borderRadius: 2, px: 5.5625 }}>
                                    <Typography variant="body1">Apply</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 1 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Typography variant="body2" sx={{ color: "#717171" }}>Subtotal</Typography>
                                    <Typography variant="body2" sx={{ color: "#717171" }}>$519.52</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Typography variant="body2" sx={{ color: "#717171" }}>Discount</Typography>
                                    <Typography variant="body2" sx={{ color: "#717171" }}>-$111.87</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Typography variant="body2" sx={{ color: "#717171" }}>Shipment cost</Typography>
                                    <Typography variant="body2" sx={{ color: "#717171" }}>$22.50</Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ borderBottomWidth: '2px' }}></Divider>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography component={'h6'} variant="body1" sx={{ color: "#2D2D2D" }}>Grand Total</Typography>
                                <Typography component={'h6'} variant="body1" sx={{ color: "#2D2D2D" }}>$543.02</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                    <CardActions sx={{ p: 0 }}>
                        <Button fullWidth variant="contained" sx={{ py: 1.8125, borderRadius: 2, textTransform: 'none' }}>
                            <Typography variant="body1">Continue to pay</Typography>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>
}
