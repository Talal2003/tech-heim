import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Divider, FormControlLabel, Grid, LinearProgress, Radio, RadioGroup, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import InventoryIcon from '@mui/icons-material/Inventory';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/Discount';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

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
    const { data, isLoading, isError } = useProductDetails(id);
    const product = data?.response;
    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
        {error.message}
    </Typography>

    console.log(data);

    return (
        <>
            <Grid container spacing={6.125}>
                <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 496 }}>
                            <CardMedia component={'img'}
                                image={product.image}
                                sx={{ height: 338, objectFit: 'contain', borderRadius: 8 }}
                            >
                            </CardMedia>
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
                        <Box display="flex" flexDirection="column" gap={4}>
                            <Box display="flex" flexDirection="column" gap={3}>
                                <Box display="flex" flexDirection="column" gap={1}>
                                    <Typography>{product.name}</Typography>
                                    <Box display="flex" alignItems="center" gap={2}>
                                        <Box display="flex" alignItems="center"
                                            sx={{ color: 'white', backgroundColor: "#063A88", p: 0.5, borderRadius: 1 }}>
                                            <StarIcon fontSize="small" />
                                            <Typography variant="body2">{product.rate}</Typography>
                                        </Box>
                                        <Divider orientation="vertical" flexItem sx={{ borderWidth: 1, backgroundColor: "#717171" }} />
                                        <Typography>quantity {product.quantity}</Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" gap={4}>
                                    <Box display="flex" flexDirection="row" gap={0.5} alignItems={'center'}>
                                        <InventoryIcon fontSize="small" />
                                        <Typography variant="body2">In Stock</Typography>
                                    </Box>
                                    <Box display="flex" flexDirection="row" gap={0.5} alignItems={'center'}>
                                        <VerifiedIcon fontSize="small" />
                                        <Typography variant="body2">Guaranteed</Typography>
                                    </Box>
                                    <Box display="flex" flexDirection="row" gap={0.5} alignItems={'center'}>
                                        <LocalShippingIcon fontSize="small" />
                                        <Typography variant="body2">Free Delivery</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box>
                                <Typography>Description:</Typography>
                                <Typography>{product.description}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ md: 4, lg: 3 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                                    <Typography>last price</Typography>
                                    <Typography>$ {product.price}</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <RadioGroup>
                                    <FormControlLabel value="pay-now" control={<Radio />} label="Pay Now" />
                                    <FormControlLabel value="installments" control={<Radio />} label="Buy in installments" />
                                </RadioGroup>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ display: "flex", flexDirection: "column", gap: 1, px: 3, pt: 0, pb: 3 }}>
                            <Button variant="contained" color="primary" fullWidth sx={{ py: 1.25, borderRadius: 2 }}>Buy Now</Button>
                            <Button variant="outlined" color="primary" fullWidth sx={{ py: 1.25, borderRadius: 2 }}>Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid size={{ md: 4, lg: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'medium' }}>Comments</Typography>
                            <Typography variant='h6' sx={{ fontWeight: 'normal' }}>leave your comments here for other customers</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Typography sx={{ px: 3, py: 0.5, border: '1px solid', borderRadius: 4, color: '#9E9E9E', }}>
                                Share your thoughts about this product here</Typography>
                            <Button variant="outlined" sx={{
                                borderWidth: 2, borderRadius: 4, color: '#0C68F4',
                                borderBlockColor: '#0C68F4', textTransform: 'none', py: 1.8125
                            }}>
                                <Typography sx={{ fontWeight: 'medium' }}>Comment</Typography>
                            </Button>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography variant='body1'>By feature</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.125 }}>
                                        <Typography variant='caption'>Battery charge</Typography>
                                        <Typography variant='caption'>Monitor</Typography>
                                        <Typography variant='caption'>Lightness</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, py: 1.1875, flex: 1, }}>
                                        <LinearProgress variant="determinate" value={(4.8 / 5) * 100} color="warning"
                                            sx={{ height: 4, borderRadius: 4, backgroundColor: "#CBCBCB" }} />
                                        <LinearProgress variant="determinate" value={(4.9 / 5) * 100} color="warning"
                                            sx={{ height: 4, borderRadius: 4, backgroundColor: "#CBCBCB" }} />
                                        <LinearProgress variant="determinate" value={(4.3 / 5) * 100} color="warning"
                                            sx={{ height: 4, borderRadius: 4, backgroundColor: "#CBCBCB" }} />
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
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, backgroundColor: '#F9F9F9' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                                <Avatar alt="avatar" src="https://mui.com/static/images/avatar/1.jpg"
                                    sx={{ width: 60, height: 60 }} />
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                        <Typography variant="h5">Gabriel</Typography>
                                        <Typography variant="caption">July 28, 2023</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center"
                                        sx={{ color: 'white', backgroundColor: "#063A88", p: 0.5, borderRadius: 1 }}>
                                        <StarIcon fontSize="small" />
                                        <Typography variant="body2">4.8</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="body1">I needed a fast, efficient laptop for on the go use. Battery life is amazing. Build quality is fantastic. Perfect fit for my needs.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, backgroundColor: '#F9F9F9' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                                <Avatar alt="avatar" src="https://mui.com/static/images/avatar/2.jpg"
                                    sx={{ width: 60, height: 60 }} />
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                        <Typography variant="h5">Jimmy Smith</Typography>
                                        <Typography variant="caption">May 28, 2023</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center"
                                        sx={{ color: 'white', backgroundColor: "#063A88", p: 0.5, borderRadius: 1 }}>
                                        <StarIcon fontSize="small" />
                                        <Typography variant="body2">4.8</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="body1">This macbook air at first feels just so big to me using it for school, and after a while, it felt as a perfect size. I look at it sometimes and realize how portable and small it is, but IT FEELS AS BIG AS LIKE A TV SCREEN. It's not a huge computer, but when your doing work and typing or whatever watching youtube it feels like a movie screen, beautiful. I never had such a good computer that just feels like a breath of fresh air. If you are contemplating on buying one, I would get 512 GB of storage and 16 ram. You will not be disappointed if you buy this no matter what, I strongly recommend it.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2, backgroundColor: '#F9F9F9' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                                <Avatar alt="avatar" src="https://mui.com/static/images/avatar/3.jpg"
                                    sx={{ width: 60, height: 60 }} />
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                        <Typography variant="h5">sarah Anderson</Typography>
                                        <Typography variant="caption">April 20, 2023</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center"
                                        sx={{ color: 'white', backgroundColor: "#063A88", p: 0.5, borderRadius: 1 }}>
                                        <StarIcon fontSize="small" />
                                        <Typography variant="body2">4.2</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="body1">This was my first personal Mac purchase. We are using a combination of Mac & PC at work and while my PC skills are good the Mac side needs work.
                                    So far I like the experience, although not all my apps will run on the Mac, I am finding workarounds.
                                    One person found this helpful</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
