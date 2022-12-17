import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from './Container'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
export default Layout
