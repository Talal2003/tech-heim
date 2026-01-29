import { Box, CircularProgress, Pagination, PaginationItem, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useAccount from "../../hooks/useAccount";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function AccountOrders() {

  const { data, isLoading, isError, error } = useAccount();
  const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const ordersPerPage = 5

  useEffect(() => {
    setPage(1);
  }, []);

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
    <CircularProgress />
  </Box>
  if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
    {error.message}
  </Typography>

  const totalOrders = data.orders.length;
  const orders = data.orders.slice((page - 1) * ordersPerPage, page * ordersPerPage);
  const numberOfPages = Math.ceil(totalOrders / ordersPerPage);

  console.log(data)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, lg: 5 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography component={"h5"} variant="h6">{t("Order History")}</Typography>
        <Typography component={"span"} variant="body1" color='neutral.gray700'>{t("Track, return or purchase items")}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, px: 2, py: 2.125 }}>
        {orders.map(order => (
          <Box key={order.id} sx={{
            display: "flex", flexDirection: { xs: "column", lg: "row" }, backgroundColor: "neutral.gray200",
            justifyContent: "space-evenly", borderRadius: 2, p: 2, gap: { xs: 1, lg: 0 }
          }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">{t("order code")}</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>#{order.id}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">{t("Placed on")}</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>{order.orderDate}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">{t("Total")}</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>${order.amountPaid}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">{t("Payment status")}</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>{order.paymentStatus}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">{t("Order status")}</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>{order.status}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Stack spacing={2} sx={{ alignSelf: 'center' }}>
        <Pagination page={page} onChange={(e, value) => setPage(value)} count={numberOfPages} shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </Box>
  )
}
