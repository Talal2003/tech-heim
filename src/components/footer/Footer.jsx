import { Accordion, AccordionSummary, Box, Button, Container, IconButton, Link, TextField, Typography } from "@mui/material";
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ pt: 1.5, color: 'white', backgroundColor: '#052E6D' }}>
      <Container maxWidth="xl">

        <Box sx={{ display: { xs: 'none', md: 'block' } }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 4.5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 2fr 4fr 3fr', width: '100%', pb: 6.25 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography component="span" variant="body1">{t("Company")}</Typography>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("about us")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("blog")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("returns")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("order status")}</Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography component="span" variant="body1">{t("Info")}</Typography>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("How it works?")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("our promises")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("FAQ")}</Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography component="span" variant="body1">{t("Contact us")}</Typography>
                  <Typography variant="body2" to='/' color='#CBCBCB' underline='none'>123 Main Street, Anytown,USA</Typography>
                  <Typography variant="body2" to='/' color='#CBCBCB' underline='none'>+1 (555) 123-4567</Typography>
                  <Typography variant="body2" to='/' color='#CBCBCB' underline='none'>TechHeimSupport@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography component="span" variant="body1">{t("Sign up for News and updates")}</Typography>
                  <Box sx={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 1.5,
                    border: "1px solid", borderRadius: 2
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                      <PersonOutlineOutlinedIcon fontSize="large" />
                      <TextField placeholder={t("E-mail Address")} size="small" fullWidth
                        sx={{ input: { color: 'white', p: 1 }, 'fieldset': { border: 'none' } }} />
                    </Box>
                    <IconButton sx={{ color: 'inherit', minWidth: 0 }}><ArrowForwardIosIcon /></IconButton>
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
              <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("cookie settings")}</Link>
              <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("Privacy Policy")}</Link>
              <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("Terms and Conditions")}</Link>
              <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("Imprint")}</Link>
            </Box>
          </Box>
        </Box >


        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button sx={{ backgroundColor: "#AECDFB", minWidth: "auto", borderRadius: "50%", p: 1 }}>
                <ChatBubbleOutlineIcon sx={{ color: "#2D2D2D" }} />
              </Button>
              <Button sx={{ backgroundColor: "#AECDFB", minWidth: "auto", borderRadius: "50%", p: 1 }}>
                <KeyboardArrowUpIcon sx={{ color: "#2D2D2D" }} />
              </Button>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 1 }}>
                <Typography component={'h3'} variant="body1">{t("Sign up for News and updates")}</Typography>
                <Box sx={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', px: 0.75, py: 0.5,
                  border: "1px solid", borderRadius: 2
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <PersonOutlineOutlinedIcon fontSize="large" sx={{ p: 0 }} />
                    <TextField placeholder={t("E-mail Address")} size="small" fullWidth
                      sx={{ input: { color: 'white', p: 1 }, 'fieldset': { border: 'none' } }} />
                  </Box>
                  <IconButton sx={{ color: 'inherit', minWidth: 0 }}><ArrowForwardIosIcon fontSize="small" /></IconButton>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Accordion disableGutters sx={{
                boxShadow: "none", backgroundColor: "transparent", color: "white",
                display: 'flex', flexDirection: 'column', gap: 1
              }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  slotProps={{ root: { sx: { px: 0, py: 1, minHeight: 0 }, }, content: { sx: { m: 0, }, } }}>
                  <Typography component={'h3'} variant="subtitle1">{t("Company")}</Typography>
                </AccordionSummary>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 1.5 }}>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("about us")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("blog")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("returns")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("order status")}</Link>
                </Box>
              </Accordion>
              <Accordion disableGutters sx={{
                boxShadow: "none", backgroundColor: "transparent", color: "white",
                display: 'flex', flexDirection: 'column', gap: 1
              }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  slotProps={{ root: { sx: { px: 0, py: 1, minHeight: 0 }, }, content: { sx: { m: 0, }, } }}>
                  <Typography component={'h3'} variant="subtitle1">{t("Info")}</Typography>
                </AccordionSummary>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 1.5 }}>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("How it works?")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("our promises")}</Link>
                  <Link component={RouterLink} variant="body2" to='/' color='#CBCBCB' underline='none'>{t("FAQ")}</Link>
                </Box>
              </Accordion>
              <Accordion disableGutters sx={{
                boxShadow: "none", backgroundColor: "transparent", color: "white",
                display: 'flex', flexDirection: 'column', gap: 1
              }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  slotProps={{ root: { sx: { px: 0, py: 1, minHeight: 0 }, }, content: { sx: { m: 0, }, } }}>
                  <Typography component={'h3'} variant="subtitle1">{t("Contact us")}</Typography>
                </AccordionSummary>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 1.5 }}>
                  <Typography variant="body2" to='/' color='#CBCBCB' underline='none'>123 Main Street, Anytown,USA</Typography>
                  <Typography variant="body2" to='/' color='#CBCBCB' underline='none'>+1 (555) 123-4567</Typography>
                  <Typography variant="body2" to='/' color='#CBCBCB' underline='none'>TechHeimSupport@gmail.com</Typography>
                </Box>
              </Accordion>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
              <PinIcon fontSize="large" />
              <PinIcon fontSize="large" />
              <PinIcon fontSize="large" />
              <PinIcon fontSize="large" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Link component={RouterLink} to='/' color='inherit' underline='none'><FacebookIcon fontSize="large" /></Link>
              <Link component={RouterLink} to='/' color='inherit' underline='none'><XIcon fontSize="large" /></Link>
              <Link component={RouterLink} to='/' color='inherit' underline='none'><InstagramIcon fontSize="large" /></Link>
              <Link component={RouterLink} to='/' color='inherit' underline='none'><YouTubeIcon fontSize="large" /></Link>
            </Box>
          </Box>
        </Box >
      </Container >
    </Box >
  );
}
