import { Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Pagination, PaginationItem, CircularProgress, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Categories from "../../components/categories/Categories.jsx";
import Filters from "../../components/filters/Filters.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useProducts from "../../hooks/useProducts.js";
import { useTranslation } from "react-i18next";
import Product from "../../components/product/Product.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Products() {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      search: '',
      categoryId: '',
      minPrice: '',
      maxPrice: '',
      sortBy: '',
      ascending: '',
    }
  });
  const [activeFilters, setActiveFilters] = useState({});
  const { data, isLoading, isError, error } = useProducts(activeFilters);
  const applyFilters = (values) => {
    setActiveFilters({
      search: values.search || null,
      categoryId: values.categoryId || null,
      minPrice: values.minPrice || null,
      maxPrice: values.maxPrice || null,
      sortBy: values.sortBy || null,
      ascending: values.ascending || null,
    });
  };

  const [page, setPage] = useState(1);
  const prodcutsPerPage = 6

  useEffect(() => {
    setPage(1);
  }, [activeFilters]);

  const { t } = useTranslation();

  const [sortBy, setSortBy] = useState('');
  const [ascending, setAscending] = useState('true');

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
    <CircularProgress />
  </Box>
  if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
    {error.message}
  </Typography>

  const totalProducts = data.response.totalCount;
  const products = data.response.data.slice((page - 1) * prodcutsPerPage, page * prodcutsPerPage);
  const numberOfPages = Math.ceil(totalProducts / prodcutsPerPage);

  return (
    <>
      <Categories setValue={setValue} handleSubmit={handleSubmit} applyFilters={applyFilters} />
      <Grid container spacing={4}>
        <Grid size={{ sm: 12, md: 4, lg: 3 }}>
          <Filters register={register} setValue={setValue} handleSubmit={handleSubmit}
            applyFilters={applyFilters} setSortBy={setSortBy} setAscending={setAscending} />
          <Button form="filtersForm" type="submit" variant="outlined" fullWidth
            sx={{ mt: 2, borderRadius: 2 }}>
            {t("Apply")}
          </Button>
        </Grid>
        <Grid size={{ sm: 12, md: 8, lg: 9 }}>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4.125 }}>

            <Box component={'form'} id="filtersForm" onSubmit={handleSubmit(applyFilters)}
              sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <TextField label={`${t("Search")}..`} sx={{ flex: 1 }}
                {...register("search")}
                onKeyDown={() => { handleSubmit(applyFilters) }}
              />
              <FormControl sx={{ flex: { xs: 0.4, md: 0.20 } }}>
                <InputLabel>{t("Sort By")}</InputLabel>
                <Select
                  value={sortBy}
                  label={t("Sort By")}
                  onChange={(e) => {
                    setValue("sortBy", e.target.value)
                    setSortBy(e.target.value)
                    handleSubmit(applyFilters)()
                  }}
                >
                  <MenuItem value='name'>{t("Name")}</MenuItem>
                  <MenuItem value='price'>{t("Price")}</MenuItem>
                  <MenuItem value='rate'>{t("Rate")}</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ flex: { xs: 0.4, md: 0.20 } }}>
                <InputLabel>{t("Order")}</InputLabel>
                <Select
                  value={ascending}
                  label={t("Ascending")}
                  onChange={(e) => {
                    setValue("ascending", e.target.value)
                    setAscending(e.target.value)
                    handleSubmit(applyFilters)()
                  }}
                >
                  <MenuItem value='true'>{t("Ascending")}</MenuItem>
                  <MenuItem value='false'>{t("Descending")}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={4}>
              {products.map((product) =>
                <Product product={product} key={product.id} />
              )}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                page={page}
                onChange={(e, value) => setPage(value)}
                count={numberOfPages}
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
