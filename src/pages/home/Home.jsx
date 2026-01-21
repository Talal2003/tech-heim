import { Box, Button, Typography } from "@mui/material";
import Categories from "../../components/categories/Categories";
import backgroundImg from "../../assets/images/Tech-Heim.webp";

export default function Home() {
  return <>
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        alignItems: "start", gap: { xs: 6.75, sm: 10, md: 12, lg: 13.75 }, py: 7
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.875, sm: 3.5, md: 5, lg: 6.25 } }}>
          <Typography component={'h1'}
            sx={{ fontWeight: 'medium', typography: { xs: "h5", sm: "h4", md: "h3", lg: "h2" } }}>Tech Heim</Typography>
          <Typography component={'h3'} variant="h4" sx={{ typography: { xs: 'caption', sm: "h5", lg: 'h3' } }}>
            "Join the{' '}
            <Typography component={'span'} variant="h4" sx={{ color: 'secondary.main', typography: { xs: "caption", sm: "h5", md: "h4", lg: "h3" } }}>
              digital revolution
            </Typography>
            "
          </Typography>

        </Box>
        <Button variant="contained"
          sx={{
            backgroundColor: 'secondary.main', px: { xs: 1.625, sm: 6, md: 9, lg: 11.75 },
            py: { xs: 1.25, sm: 1.75, md: 2, lg: 2.3125 }, borderRadius: 2,
          }}>
          <Typography sx={{ textTransform: 'none', typography: { xs: "caption", sm: "body2", md: "subtitle2", lg: "subtitle1" } }}>Explore More</Typography>
        </Button>
      </Box>
      <Box
        component="img"
        src={backgroundImg}
        alt="Tech Heim" sx={{ width: { xs: 209, sm: 320, md: 420, lg: "auto" }, alignSelf: 'center' }}

      />
    </Box >
  </>
}
