import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ offset }: { offset: number }) => {
  const location = useLocation();
  const showFooterOnRoutes = [
    "/",
    "/IWD/2022",
    "/IWD/2023",
    "/event",
    "/team",
    "/certificate",
  ];
  const hideHeaderOnRoutes = ["/"];

  const shouldShowFooter = showFooterOnRoutes.includes(location.pathname);
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
      {shouldShowFooter && <Footer />}
    </Box>
  );
};
