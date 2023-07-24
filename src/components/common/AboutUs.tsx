import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface AboutType {
  icon: any;
  text: string;
  number: string;
}

export const AboutUs = ({ data }: { data: AboutType }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
      width={{ xs: 123, sm: 180 }}
    >
      <Box
        height={{ xs: 54, sm: 130 }}
        width={{ xs: 54, sm: 130 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.icon}
      </Box>
      <Stack alignItems={"center"}>
        <Typography
          color={"#518FF5"}
          fontSize={{ xs: 20, sm: 40 }}
          fontWeight={{ xs: 700, sm: 600 }}
        >
          {data.number}
        </Typography>
        <Typography fontSize={{ xs: 15.5, sm: 22 }} fontWeight={300}>
          {data.text}
        </Typography>
      </Stack>
    </Stack>
  );
};
