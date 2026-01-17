import { Box, Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
import { Link as RouterLink } from 'react-router-dom';

export default function Product({ product }) {
    return (
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card>
                <CardActionArea component={RouterLink} to={`/product/${product.id}`}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        title={product.title}
                        sx={{ height: 190, objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1">{product.name}</Typography>

                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                            <Box display="flex" flexDirection="column">
                                <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                                    ${product.price}
                                </Typography>
                                <Typography component={'span'} variant="body1">${product.price}</Typography>
                            </Box>

                            <Box display="flex" alignItems="center" justifyContent="flex-end" mt="auto" gap={0.5}>
                                <StarIcon fontSize="small" />
                                <Typography variant="body2">{product.rate}</Typography>
                            </Box>

                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
