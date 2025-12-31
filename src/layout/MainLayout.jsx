import { Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ pt: 5, pb: 7 }}>
        <Stack spacing={6}>
          <Outlet />
        </Stack>
      </Container>
      <Footer />
    </>
  )
}
