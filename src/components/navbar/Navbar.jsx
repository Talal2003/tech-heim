import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logoIcon from './../../assets/icons/navbar/logo.svg';
import searchNormalIcon from './../../assets/icons/navbar/search-normal.svg';
import bagIcon from './../../assets/icons/navbar/bag.svg';
import useAuthStore from '../../store/authStore';

export default function Navbar() {

  const token = useAuthStore(state=>state.token);
  const logout = useAuthStore(state=>state.logout);
  const navigate = useNavigate('');
  const handleLogout = ()=> {
    logout();
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="white"
      sx={{ borderBottom: '1px solid', borderColor: '#78ABF9', boxShadow: 'none'}}>
        <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
          <Box>
            <Link>
              <img src={logoIcon} alt="Logo" />
            </Link>
          </Box>

          <Box sx={{ display:'flex', gap: 6}}>
            <Link component={RouterLink} to='/home' color='inherit' underline='none'>Home</Link>
            <Link component={RouterLink} to='/products' color='inherit' underline='none'>Products</Link>
            <Link component={RouterLink} to='/' color='inherit' underline='none'>Blog</Link>
            <Link component={RouterLink} to='/' color='inherit' underline='none'>FAQ</Link>
            <Link component={RouterLink} to='/' color='inherit' underline='none'>Contact Us</Link>
          </Box>

          <Box sx={{ display:'flex', gap: 2, alignItems:'center'}}>
            <Link component={RouterLink} to='/'
            sx={{ display:'flex', gap: 2, alignItems:'center'}}>
              <img src={searchNormalIcon} alt="" />
            </Link>
            <Link component={RouterLink} to='/cart'
            sx={{ display:'flex', gap: 2, alignItems:'center'}}>
              <img src={bagIcon} alt="" />
            </Link>
            {token != null?
            <Button variant="contained" onClick={handleLogout}>Logout</Button>
            :
            <Button component={RouterLink} to='/login' variant="contained">Login / Sign Up</Button>
            }
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
