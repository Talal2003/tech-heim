import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useAccount from "../../hooks/useAccount";

export default function AccountOrders() {

  const { data, isLoading, isError, error } = useAccount();
  const { t, i18n } = useTranslation();

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
    <CircularProgress />
  </Box>
  if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
    {error.message}
  </Typography>

  console.log(data.orders);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, lg: 5 } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography component={"h5"} variant="h6">Order History</Typography>
        <Typography component={"span"} variant="body1" color="#717171">Track, return or purchase items</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, px: 2, py: 2.125 }}>
        {data.orders.map(order => (
          <Box sx={{
            display: "flex", flexDirection: { xs: "column", lg: "row" }, backgroundColor: "#F6F6F6",
            justifyContent: "space-evenly", borderRadius: 2, p: 2, gap: { xs: 1, lg: 0 }
          }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">order code</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>#{order.id}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">Placed on</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>{order.orderDate}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">Total</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>${order.amountPaid}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">Payment status</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>{order.paymentStatus}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "row", lg: "column" }, gap: 3, justifyContent: { xs: "space-between", lg: "center" } }}>
              <Typography component={"h6"} variant="body1">Order status</Typography>
              <Typography component={"span"} sx={{ fontSize: '1.125rem' }}>{order.status}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
