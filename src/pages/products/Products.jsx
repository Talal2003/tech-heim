import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
import Categories from "../../components/categories/Categories.jsx";

export default function Products() {
  return (
    <Box>
      <Categories />
      <Grid container spacing={4}>

        <Grid size={{ sm:4, md: 3 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Grid container spacing={4}>

          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 8, md: 9 }}>

          <Grid container spacing={4}>

            <Grid size={{ sm: 5, md: 4 }}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1">
                    Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey
                    (Apple M2 Chip / 256GB SSD / 8GB RAM) - French
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                        $1410.87
                      </Typography>
                      <Typography variant="subtitle1">
                        $1299.00
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="flex-end" mt="auto" gap={0.5}>
                      <StarIcon fontSize="small" />
                      <Typography variant="body2">4.9</Typography>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ sm: 5, md: 4 }}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1">
                    Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey
                    (Apple M2 Chip / 256GB SSD / 8GB RAM) - French
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                        $1410.87
                      </Typography>
                      <Typography variant="subtitle1">
                        $1299.00
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="flex-end" mt="auto" gap={0.5}>
                      <StarIcon fontSize="small" />
                      <Typography variant="body2">4.9</Typography>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ sm: 5, md: 4 }}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1">
                    Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey
                    (Apple M2 Chip / 256GB SSD / 8GB RAM) - French
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                        $1410.87
                      </Typography>
                      <Typography variant="subtitle1">
                        $1299.00
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="flex-end" mt="auto" gap={0.5}>
                      <StarIcon fontSize="small" />
                      <Typography variant="body2">4.9</Typography>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ sm: 5, md: 4 }}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1">
                    Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey
                    (Apple M2 Chip / 256GB SSD / 8GB RAM) - French
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                        $1410.87
                      </Typography>
                      <Typography variant="subtitle1">
                        $1299.00
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="flex-end" mt="auto" gap={0.5}>
                      <StarIcon fontSize="small" />
                      <Typography variant="body2">4.9</Typography>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ sm: 5, md: 4 }}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1">
                    Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey
                    (Apple M2 Chip / 256GB SSD / 8GB RAM) - French
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                        $1410.87
                      </Typography>
                      <Typography variant="subtitle1">
                        $1299.00
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="flex-end" mt="auto" gap={0.5}>
                      <StarIcon fontSize="small" />
                      <Typography variant="body2">4.9</Typography>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ sm: 5, md: 4 }}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1">
                    Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey
                    (Apple M2 Chip / 256GB SSD / 8GB RAM) - French
                  </Typography>

                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                        $1410.87
                      </Typography>
                      <Typography variant="subtitle1">
                        $1299.00
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="flex-end" mt="auto" gap={0.5}>
                      <StarIcon fontSize="small" />
                      <Typography variant="body2">4.9</Typography>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Grid>


      </Grid>


    </Box>
  )
}
