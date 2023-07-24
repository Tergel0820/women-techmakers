import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Title = ({ title }: { title: string }) => {
  return (
    <Stack width={"100%"}>
      <Box
        display={{ xs: "flex", sm: "none" }}
        height={11}
        width={34}
        bgcolor={"#518FF5"}
        borderRadius={6}
      ></Box>
      <Typography fontWeight={500} fontSize={{ xs: 25, sm: 31 }}>
        {title}
      </Typography>
    </Stack>
  );
};
