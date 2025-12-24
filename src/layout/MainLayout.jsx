import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Container } from '@mui/material'

export default function MainLayout() {
  return (
    <>
    <Navbar />
    <Container maxWidth="xl">
      <Outlet />
    </Container>
    <Footer />
    </>
  )
}
