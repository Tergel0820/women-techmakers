import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NotFoundImage from "../assets/image/404.png";
import { Button } from "components";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Stack gap={16} zIndex={1}>
          <Stack>
            <Typography fontSize={49} fontWeight={500}>
              Хуудас олдсонгүй
            </Typography>
            <Typography fontSize={20} fontWeight={500}>
              Та зөв бичсэн эсэхээ дахин нягтлаад хайж үзээрэй
            </Typography>
          </Stack>
          <Link to={"/"} style={{ textDecoration: "none", width: 254 }}>
            <Button width={"100%"}>Нүүр хуудас руу шилжих</Button>
          </Link>
        </Stack>
        <img
          style={{ position: "absolute", right: 0 }}
          width={"60%"}
          src={NotFoundImage}
        />
      </Stack>
    </Container>
  );
};
