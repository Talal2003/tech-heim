import { Box, Card, CardMedia, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, TextField, CardActionArea, Pagination, PaginationItem, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
import Categories from "../../components/categories/Categories.jsx";
import Filters from "../../components/filters/Filters.jsx";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useProducts from "../../hooks/useProducts.js";

export default function Products() {

  const { isLoading, isError, data } = useProducts();
  if (isLoading) return <CircularProgress></CircularProgress>
  if (isError) return <Typography>Error</Typography>

  return (
    <>
      <Categories />
      <Grid container spacing={4}>
        <Grid size={{ sm: 4, md: 3 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Filters />
        </Grid>


        <Grid size={{ xs: 12, sm: 8, md: 9 }}>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4.125 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <TextField label="Search.." sx={{ flex: 1 }} />

              <FormControl sx={{ minWidth: 205 }}>
                <InputLabel>Sort By</InputLabel>
                <Select>
                  <MenuItem value="featured">Featured</MenuItem>
                  <MenuItem value="priceAscending">Price: ascending</MenuItem>
                  <MenuItem value="priceDescending">Price: descending</MenuItem>
                  <MenuItem value="newArrivals">New Arrivals</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={4}>
              {data.map((product) =>
                <Grid size={{ sm: 5, md: 4 }}>
                  <Card>
                    <CardActionArea component={RouterLink} to="/product-details">
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
              )}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={10}
                shape="rounded"
                size="large"
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />

            </Box>
          </Box>

        </Grid>


      </Grid>
    </>
  )
}
