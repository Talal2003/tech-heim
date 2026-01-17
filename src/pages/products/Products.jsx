import { Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Pagination, PaginationItem, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import Categories from "../../components/categories/Categories.jsx";
import Filters from "../../components/filters/Filters.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useProducts from "../../hooks/useProducts.js";
import { useTranslation } from "react-i18next";
import Product from "../../components/product/Product.jsx";

export default function Products() {

  const { isLoading, isError, error, data } = useProducts();
  const { t } = useTranslation();
  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
    <CircularProgress />
  </Box>
  if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
    {error.message}
  </Typography>

  return (
    <>
      <Categories />
      <Grid container spacing={4}>
        <Grid size={{ sm: 12, md: 4, lg: 3 }}>
          <Filters />
        </Grid>

        <Grid size={{ sm: 12, md: 8, lg: 9 }}>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4.125 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <TextField label={`${t("Search")}..`} sx={{ flex: 1 }} />

              <FormControl sx={{ flex: { xs: 0.5, md: 0.25 } }}>
                <InputLabel>{t("Sort By")}</InputLabel>
                <Select>
                  <MenuItem value="featured">{t("Featured")}</MenuItem>
                  <MenuItem value="priceAscending">{t("Price: ascending")}</MenuItem>
                  <MenuItem value="priceDescending">{t("Price: descending")}</MenuItem>
                  <MenuItem value="newArrivals">{t("New Arrivals")}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={4}>
              {data.response.data.map((product) =>
                <Product product={product} key={product.id}/>
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
