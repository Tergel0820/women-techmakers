import { Box } from "@mui/material"
import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ offset }: { offset: number }) => {
  const location = useLocation()
  const hideFooterOnRoutes = ["/questions"]
  const BlackHeaderOnRoutes = ["/"]

  const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname)
  const shouldBlackRouter = BlackHeaderOnRoutes.includes(location.pathname)

  return (
    <Box>
      <Header offset={shouldBlackRouter ? offset : 200} />
      <Box>
        <Outlet />
      </Box>
      {!shouldHideFooter && <Footer />}
    </Box>
  )
}
