import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Cart() {
  return (
    <Box sx={{ py: 6 }}>
      <Grid container spacing={13}>
        <Grid size={{ xs: 12, md: 7, lg: 8 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Card sx={{ display: "flex", flexDirection: "row", gap: 3, px: 2, py: 1, alignItems: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: 182, height: '100%', borderRadius: 2 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title=""
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
                <Typography>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
                    <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                      $1410.87
                    </Typography>
                    <Typography variant="subtitle1">
                      $1299.00
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1, pr: 3 }}>
                    <DeleteOutlineIcon fontSize="small" sx={{ color: "red", mt: "auto" }} />
                    <Box sx={{
                      display: "flex", flexDirection: "row", gap: 1.5, alignItems: "center",
                      width: "100%", borderBottom: "1px solid #717171"
                    }}>
                      <Button sx={{ p: 0, minWidth: 0.4375, minHeight: 0.4375 }}>
                        <Typography variant="h4" sx={{ color: "#717171" }}>-</Typography>
                      </Button>
                      <Typography variant="h6" sx={{ color: "#717171" }}>1</Typography>
                      <Button sx={{ p: 0, minWidth: 0.4375, minHeight: 0.4375 }}>
                        <Typography variant="h5" sx={{ color: "#717171" }}>+</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ display: "flex", flexDirection: "row", gap: 3, px: 2, py: 1, alignItems: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: 182, height: '100%', borderRadius: 2 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title=""
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
                <Typography>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
                    <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                      $1410.87
                    </Typography>
                    <Typography variant="subtitle1">
                      $1299.00
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1, pr: 3 }}>
                    <DeleteOutlineIcon fontSize="small" sx={{ color: "red", mt: "auto" }} />
                    <Box sx={{
                      display: "flex", flexDirection: "row", gap: 1.5, alignItems: "center",
                      width: "100%", borderBottom: "1px solid #717171"
                    }}>
                      <Button sx={{ p: 0, minWidth: 0.4375, minHeight: 0.4375 }}>
                        <Typography variant="h4" sx={{ color: "#717171" }}>-</Typography>
                      </Button>
                      <Typography variant="h6" sx={{ color: "#717171" }}>1</Typography>
                      <Button sx={{ p: 0, minWidth: 0.4375, minHeight: 0.4375 }}>
                        <Typography variant="h5" sx={{ color: "#717171" }}>+</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ display: "flex", flexDirection: "row", gap: 3, px: 2, py: 1, alignItems: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: 182, height: '100%', borderRadius: 2 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title=""
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
                <Typography>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
                    <Typography variant="caption" color="textSecondary" sx={{ textDecoration: 'line-through' }}>
                      $1410.87
                    </Typography>
                    <Typography variant="subtitle1">
                      $1299.00
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1, pr: 3 }}>
                    <DeleteOutlineIcon fontSize="small" sx={{ color: "red", mt: "auto" }} />
                    <Box sx={{
                      display: "flex", flexDirection: "row", gap: 1.5, alignItems: "center",
                      width: "100%", borderBottom: "1px solid #717171"
                    }}>
                      <Button sx={{ p: 0, minWidth: 0.4375, minHeight: 0.4375 }}>
                        <Typography variant="h4" sx={{ color: "#717171" }}>-</Typography>
                      </Button>
                      <Typography variant="h6" sx={{ color: "#717171" }}>1</Typography>
                      <Button sx={{ p: 0, minWidth: 0.4375, minHeight: 0.4375 }}>
                        <Typography variant="h5" sx={{ color: "#717171" }}>+</Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>

          <Card sx={{ display: "flex", flexDirection: "column", gap: 2, px: 3, py: 2 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, p: 0 }}>
              <Typography variant="h4">Payment Details</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 1 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "#717171" }}>Subtotal</Typography>
                    <Typography variant="body2" sx={{ color: "#717171" }}>$519.52</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "#717171" }}>Discount</Typography>
                    <Typography variant="body2" sx={{ color: "#717171" }}>-$111.87</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "#717171" }}>Shipment cost</Typography>
                    <Typography variant="body2" sx={{ color: "#717171" }}>$22.50</Typography>
                  </Box>
                </Box>
                <Divider></Divider>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Typography variant="h6" sx={{ color: "#2D2D2D" }}>Grand Total</Typography>
                  <Typography variant="h6" sx={{ color: "#2D2D2D" }}>$543.02</Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ p: 0 }}>
              <Button fullWidth variant="contained" sx={{ py: 1.8125, borderRadius: 2, textTransform: 'none' }}>
                <Typography variant="body1">Procced to checkout</Typography>
              </Button>
            </CardActions>
          </Card>

        </Grid>
      </Grid>
    </Box>
  )
}
