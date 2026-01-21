import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, IconButton, Link, Menu, MenuItem, Tab, Tabs } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logoIcon from './../../assets/icons/navbar/logo.svg';
import searchNormalIcon from './../../assets/icons/navbar/search-normal.svg';
import bagIcon from './../../assets/icons/navbar/bag.svg';
import useAuthStore from '../../store/authStore';
import { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useTranslation } from 'react-i18next';
import useThemeStore from '../../store/useThemeStore';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  const [value, setValue] = useState(0);
  const token = useAuthStore(state => state.token);
  const logout = useAuthStore(state => state.logout);
  const user = useAuthStore(state => state.user);
  const { mode, toggleTheme } = useThemeStore();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  const changeLanguage = () => {
    const newLng = i18n.language === 'ar' ? 'en' : 'ar';;
    i18n.changeLanguage(newLng);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = [
    { label: t("Home"), path: "/" },
    { label: t("Products"), path: "/products" },
    { label: t("Blog"), path: "/" },
    { label: t("FAQ"), path: "/" },
    { label: t("Contact Us"), path: "/" },
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ borderBottom: '1px solid', borderColor: '#78ABF9', boxShadow: 'none', py: 2 }}>
      <Container maxWidth="xl">
        <AppBar position="static" color="white" sx={{ boxShadow: 'none' }}>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={index}
                    component={RouterLink}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    {page.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link>
                <img src={logoIcon} alt="Logo" />
              </Link>
            </Box>

            <Typography component={'h3'} variant='h6'
              sx={{ color: 'primary.main', display: { xs: 'flex', md: 'none' } }}>Tech Heim</Typography>

            <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}
              variant="scrollable" scrollButtons="auto" aria-label="categories tabs"
              sx={{
                display: { xs: 'none', md: 'flex' },
                '.MuiTabs-flexContainer': { gap: { lg: 4 } }, '.MuiTabs-indicator': { height: 1.5 }
              }}>
              {pages.map((page, index) => (
                <Tab key={index} component={RouterLink} to={page.path} label={page.label} value={index} />
              ))}
            </Tabs>

            <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1, md: 2 }, alignItems: 'center' }}>
              <IconButton color='inherit'
                onClick={changeLanguage}
              >
                <Typography sx={{ width: '1.5rem' }}>
                  {i18n.language === 'ar' ? 'EN' : 'ع'}
                </Typography>
              </IconButton>
              <IconButton color='inherit'
                onClick={toggleTheme}
              >
                {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
              </IconButton>
              <IconButton component={RouterLink} to='/products'>
                <img src={searchNormalIcon} alt="" />
              </IconButton>
              {token != null ?
                <>
                  <IconButton component={RouterLink} to='/cart'>
                    <img src={bagIcon} alt="" />
                  </IconButton>
                  <Box>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? 'long-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <PersonOutlineOutlinedIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        paper: {
                          style: {
                            width: '32ch',
                          },
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 1 }}>
                        <MenuItem disableRipple onClick={() => {
                          handleClose();
                          navigate('/account');
                        }}>
                          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <AccountCircleOutlinedIcon />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                              <Typography variant='body1' color='primary'>{user?.name}</Typography>
                              <Typography variant='body2'>{user?.email}</Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                        <MenuItem onClick={() => {
                          handleClose();
                          handleLogout();
                        }} disableRipple>
                          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <LogoutOutlinedIcon />
                            {t("Log out")}
                          </Box>
                        </MenuItem>
                      </Box>
                    </Menu>
                  </Box>
                </>
                :
                <Button component={RouterLink} to='/login' variant="contained">{t("Login")} / {t("Sign Up")}</Button>
              }
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}
