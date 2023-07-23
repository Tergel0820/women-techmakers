import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ offset }: { offset: number }) => {
  const location = useLocation();
  const hideFooterOnRoutes = ["/questions"];
  const hideHeaderOnRoutes = ["/"];

  const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname);
  const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);

  return (
    <Box>
      {!shouldHideHeader && (
        <Stack width={"100%"} position={"fixed"} top={0} zIndex={1}>
          <Header theme="white" />
        </Stack>
      )}
      <Box>
        <Outlet />
      </Box>
      {!shouldHideFooter && <Footer />}
    </Box>
  );
};
