import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Divider, FormControlLabel, Grid, LinearProgress, Radio, RadioGroup, Rating, TextField, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import InventoryIcon from '@mui/icons-material/Inventory';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/Discount';
import { useNavigate, useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import useAddToCart from '../../hooks/useAddToCart';
import { useTranslation } from 'react-i18next';
import useReviews from '../../hooks/useReviews';
import { useState } from 'react';

export default function ProductDetails() {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];

    const { id } = useParams();
    const { isLoading: isProductLoading, isError: isProductError, error: productError, data: productData } = useProductDetails(id);
    const { mutate: addToCart, isPending: isAddToCartPending } = useAddToCart();
    const { mutate: addReview, isPending: isReviewPending } = useReviews(id);
    const { t } = useTranslation();
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const handleReviewSubmit = () => {
        console.log(`Raintg: ${rating}, Comment: ${comment}`);
        addReview({
            Rating: rating,
            Comment: comment,
        });
        setComment("");
        setRating(0);
    };

    if (isProductLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
        <CircularProgress />
    </Box>
    if (isProductError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
        {productError.message}
    </Typography>

    const product = productData.response;

    return (
        <>
            <Grid container spacing={6.125}>
                <Grid size={{ xs: 12, lg: 9 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 496 }}>
                                <CardMedia component={'img'}
                                    image={product.image}
                                    sx={{ height: 338, objectFit: 'contain', borderRadius: 8 }}
                                />
                                <Box sx={{ display: 'flex', overflowX: 'auto', overflowY: 'hidden', gap: 3 }}>
                                    {itemData.slice(1).map((item) => (
                                        <Box key={item.img} sx={{ minWidth: 80 }}>
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box display="flex" flexDirection="column" gap={4}>
                                <Box display="flex" flexDirection="column" gap={3}>
                                    <Box display="flex" flexDirection="column" gap={1}>
                                        <Typography>{product.name}</Typography>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Box display="flex" alignItems="center"
                                                sx={{ color: 'white', backgroundColor: "primary.500", p: 0.5, borderRadius: 1 }}>
                                                <StarIcon fontSize="small" />
                                                <Typography variant="body2">{product.rate}</Typography>
                                            </Box>
                                            <Divider orientation="vertical" flexItem sx={{ borderWidth: 1, backgroundColor: "neutral.gray700" }} />
                                            <Typography>{t("quantity")} {product.quantity}</Typography>
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection="row" gap={4}>
                                        <Box display="flex" flexDirection="row" gap={0.5} alignItems={'center'}>
                                            <InventoryIcon fontSize="small" />
                                            <Typography variant="body2">{t("In Stock")}</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" gap={0.5} alignItems={'center'}>
                                            <VerifiedIcon fontSize="small" />
                                            <Typography variant="body2">{t("Guaranteed")}</Typography>
                                        </Box>
                                        <Box display="flex" flexDirection="row" gap={0.5} alignItems={'center'}>
                                            <LocalShippingIcon fontSize="small" />
                                            <Typography variant="body2">{t("Free Delivery")}</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography>{t("Description")}:</Typography>
                                    <Typography>{product.description}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid size={{ xs: 12, lg: 3 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Card sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 0.5, px: 3, pt: 3, pb: 0 }}>
                            <Box display="flex" flexDirection="column" gap={0.5}>
                                <Box display="flex" flexDirection="row" justifyContent="space-between">
                                    <Typography variant="h5">$ {product.price}</Typography>
                                    <Box display="flex" flexDirection="row" gap={0.25}>
                                        <DiscountIcon fontSize="small" />
                                        <Typography>-0%</Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" gap={1}>
                                    <Typography>{t("last price")}</Typography>
                                    <Typography>$ {product.price}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <RadioGroup>
                                    <FormControlLabel value="pay-now" control={<Radio />} label={t("Pay Now")} />
                                    <FormControlLabel value="installments" control={<Radio />} label={t("Buy in installments")} />
                                </RadioGroup>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ display: "flex", flexDirection: "column", gap: 1, px: 3, pt: 0, pb: 3 }}>
                            <Button variant="contained" color="primary" fullWidth sx={{ py: 1.25, borderRadius: 2 }}
                                onClick={() => {
                                    addToCart({ ProductId: product.id, Count: 1 })
                                    navigate('/checkout');
                                }}
                                disabled={isAddToCartPending}
                            >{t("Buy Now")}</Button>
                            <Button variant="outlined" color="primary" fullWidth sx={{ py: 1.25, borderRadius: 2 }}
                                onClick={() => addToCart({ ProductId: product.id, Count: 1 })}
                                disabled={isAddToCartPending}
                            >{t("Add to Cart")}</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'medium' }}>{t("Comments")}</Typography>
                            <Typography variant='h6' sx={{ fontWeight: 'normal' }}>{t("leave your comments here for other customers")}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Box component="form" onSubmit={handleReviewSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <Typography component="legend"></Typography>
                                    <Rating
                                        value={rating}
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                    />
                                </Box>
                                <TextField multiline minRows={1} maxRows={6}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder={t("Share your thoughts about this product here")}
                                    sx={{ 'fieldset': { borderColor: 'neutral.gray600', borderRadius: 4 } }} />
                                <Button type="submit" variant="outlined"
                                    disabled={isReviewPending}
                                    sx={{
                                        borderWidth: 2, borderRadius: 4, color: 'primary',
                                        borderBlockColor: 'primary', textTransform: 'none', py: 1.8125
                                    }}>
                                    <Typography sx={{ fontWeight: 'medium' }}>{t("Comment")}</Typography>
                                </Button>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography variant='body1'>{t("By feature")}</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.125 }}>
                                        <Typography variant='caption'>Battery charge</Typography>
                                        <Typography variant='caption'>Monitor</Typography>
                                        <Typography variant='caption'>Lightness</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, py: 1.1875, flex: 1, }}>
                                        <LinearProgress variant="determinate" value={(4.8 / 5) * 100} color="warning"
                                            sx={{ height: 4, borderRadius: 4, backgroundColor: "neutral.gray400" }} />
                                        <LinearProgress variant="determinate" value={(4.9 / 5) * 100} color="warning"
                                            sx={{ height: 4, borderRadius: 4, backgroundColor: "neutral.gray400" }} />
                                        <LinearProgress variant="determinate" value={(4.3 / 5) * 100} color="warning"
                                            sx={{ height: 4, borderRadius: 4, backgroundColor: "neutral.gray400" }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.625 }}>
                                        <Typography variant='body1'>4.8</Typography>
                                        <Typography variant='body1'>4.9</Typography>
                                        <Typography variant='body1'>4.3</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pt: 6 }}>
                        {product.reviews.map(review => (
                            <Box key={review.id} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, backgroundColor: 'neutral.gray100' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                                    <Avatar alt="avatar" src=""
                                        sx={{ width: 60, height: 60 }} />
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                            <Typography variant="h5">{review.userName}</Typography>
                                            <Typography variant="caption">{review.createdAt}</Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center"
                                            sx={{ color: 'white', backgroundColor: "primary.500", p: 0.5, borderRadius: 1 }}>
                                            <StarIcon fontSize="small" />
                                            <Typography variant="body2">{review.rating}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="body1">{review.comment}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
