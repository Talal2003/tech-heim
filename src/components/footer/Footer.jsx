import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link as RouterLink } from 'react-router-dom';
import PinIcon from '@mui/icons-material/Pin';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Box component="footer" sx={{ pt: 1.5, color: 'white', backgroundColor: '#052E6D' }}>
      <Container>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 4.5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 2fr 4fr 3fr', width: '100%', pb: 6.25 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography component="span" variant="body1">Company</Typography>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>about us</Link>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>blog</Link>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>returns</Link>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>order status</Link>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography component="span" variant="body1">Info</Typography>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>How it works?</Link>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>our promises</Link>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>FAQ</Link>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography component="span" variant="body1">Contact us</Typography>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>123 Main Street, Anytown,USA</Link>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>+1 (555) 123-4567</Link>
                <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>TechHeimSupport@gmail.com</Link>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography component="span" variant="body1">Sign up for News and updates</Typography>

                <Box sx={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 1.5,
                  border: "1px solid", borderRadius: 2
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <PersonOutlineOutlinedIcon fontSize="large" />
                    <TextField placeholder="E-mail Address" size="small" fullWidth
                      sx={{ input: { color: 'white', p:1 }, 'fieldset': { border: 'none' } }} />
                  </Box>
                  <Button sx={{ color: 'inherit', minWidth: 0 }}><ArrowForwardIosIcon /></Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                  <Link component={RouterLink} to='/' color='inherit' underline='none'><FacebookIcon fontSize="large" /></Link>
                  <Link component={RouterLink} to='/' color='inherit' underline='none'><XIcon fontSize="large" /></Link>
                  <Link component={RouterLink} to='/' color='inherit' underline='none'><InstagramIcon fontSize="large" /></Link>
                  <Link component={RouterLink} to='/' color='inherit' underline='none'><YouTubeIcon fontSize="large" /></Link>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', px: 2.5 }}>
              <Button sx={{ backgroundColor: "#AECDFB", minWidth: "auto", borderRadius: "50%", p: 1 }}>
                <ChatBubbleOutlineIcon sx={{ color: "#2D2D2D" }} />
              </Button>
              <Button sx={{ backgroundColor: "#AECDFB", minWidth: "auto", borderRadius: "50%", p: 1 }}>
                <KeyboardArrowUpIcon sx={{ color: "#2D2D2D" }} />
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
            <PinIcon fontSize="large" />
            <PinIcon fontSize="large" />
            <PinIcon fontSize="large" />
            <PinIcon fontSize="large" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.125, alignItems: 'center' }}>
            <CopyrightIcon fontSize="large" sx={{ color: "#CBCBCB" }} />
            <Typography variant="body2" color="#CBCBCB">2023 Tech Heim.</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
            <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>cookie settings</Link>
            <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>Privacy Policy</Link>
            <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>Terms and Conditions</Link>
            <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>Imprint</Link>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
