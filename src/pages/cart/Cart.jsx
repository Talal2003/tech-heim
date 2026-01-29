import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Divider, Grid, IconButton, Typography } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link as RouterLink } from 'react-router-dom';
import useCart from "../../hooks/useCart";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import { useTranslation } from "react-i18next";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import useClearCart from "../../hooks/useClearCart";

export default function Cart() {

  const { data, isLoading, isError, error } = useCart();
  const { mutate: removeItem, isPending: removeItemPending } = useRemoveFromCart();
  const { mutate: updateItem, isPending: updateItemPending } = useUpdateCartItem();
  const { mutate: clearCart, isPending: clearCartPending } = useClearCart();
  const { t } = useTranslation();
  const handleUpdate = (productId, action) => {
    const item = data.items.find(i => i.productId == productId);
    if (action == '-') {
      if (item.count - 1 == 0) {
        removeItem(productId)
      }
      else {
        updateItem({ productId, count: item.count - 1 })
      }
    } else {
      updateItem({ productId, count: item.count + 1 })
    }
  }
  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
    <CircularProgress />
  </Box>
  if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
    {error.message}
  </Typography>

  return (
    <>
      {data.items.length != 0 ? (
        <Grid container spacing={{ xs: 3, md: 6, lg: 13 }}>
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {data.items.map(item => (
                <Card key={item.productId} sx={{ display: "flex", flexDirection: "row", gap: 3, px: 2, py: 1, alignItems: "center" }}>
                  {item.image != null ?
                    <CardMedia
                      component="img"
                      sx={{ width: 182, height: '100%', borderRadius: 2 }}
                      image={item.image}
                      title=""
                    />
                    :
                    <ImageNotSupportedOutlinedIcon sx={{ width: 182, height: '100%', color: 'neutral.gray500' }} />
                  }
                  <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
                    <Typography>{item.productName}</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
                        <Typography variant="subtitle1">${item.price}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                        <IconButton disabled={removeItemPending} sx={{ mt: "auto", p: 0 }}
                          onClick={() => removeItem(item.productId)}>
                          <DeleteOutlineIcon fontSize="small" sx={{ color: "red" }} />
                        </IconButton>
                        <Box sx={{
                          display: "flex", flexDirection: "row", gap: 1.5, alignItems: "center",
                          width: "100%", borderBottom: "1px solid neutral.gray700"
                        }}>
                          <IconButton disabled={updateItemPending} sx={{ p: 0.4375, minWidth: 0 }}
                            onClick={() => handleUpdate(item.productId, '-')}>
                            <RemoveIcon fontSize="small" sx={{ color: "neutral.gray700" }} />
                          </IconButton>
                          <Typography component={'span'} sx={{ color: "neutral.gray700" }}>{item.count}</Typography>
                          <IconButton disabled={updateItemPending} sx={{ p: 0.4375, minWidth: 0 }}
                            onClick={() => handleUpdate(item.productId, '+')}>
                            <AddIcon fontSize="small" sx={{ color: "neutral.gray700" }} />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}>
              <Button onClick={clearCart} disabled={clearCartPending} variant='outlined' color='error'
                sx={{ display: 'flex', textTransform: "none", gap: 1, px: 3, py: 1.5, borderRadius: 2, borderWidth: 2 }}>
                <DeleteOutlineIcon fontSize="small" />
                {t("Clear Cart")}
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>

            <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", borderColor: "neutral.gray300", gap: 2, px: 3, py: 2, borderRadius: 2 }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0 }}>
                <Typography component={'h4'} variant="h5">{t("Payment Details")}</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 1 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {data.items.map(item => (
                      <Box key={item.productId} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography variant="body2" sx={{ color: "neutral.gray700" }}>{item.productName}</Typography>
                        <Typography variant="body2" sx={{ color: "neutral.gray700" }}>${item.totalPrice}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Divider sx={{ borderBottomWidth: '2px' }}></Divider>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography component={'h6'} variant="body1" sx={{ color: "neutral.gray1000" }}>{t("Grand Total")}</Typography>
                    <Typography component={'h6'} variant="body1" sx={{ color: "neutral.gray1000" }}>${data.cartTotal}</Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ p: 0 }}>
                <Button fullWidth variant="contained" sx={{ py: 1.8125, borderRadius: 2, textTransform: 'none' }}>
                  <Typography component={RouterLink} variant="body1" to='/checkout'
                    sx={{ color: 'white', textDecoration: 'none' }}>{t("Proceed to checkout")}</Typography>
                </Button>
              </CardActions>
            </Card>

          </Grid>
        </Grid>
      )
        :
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'neutral.gray600', gap: 2 }}>
          <ProductionQuantityLimitsIcon sx={{ fontSize: 80 }} />
          <Typography variant="h6">{t("Your cart is empty")}</Typography>
        </Box>}
    </>
  )
}
