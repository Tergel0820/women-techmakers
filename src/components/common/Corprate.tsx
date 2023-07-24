import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const Corprate = ({ data }: { data?: any }) => {
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      justifyContent="space-between"
      gap={2}
    >
      {Object.keys(data).map((item, index) => (
        <Box key={index} gap={2}>
          <Typography fontSize={20} fontWeight={500}>
            {item}
          </Typography>
          <Stack
            direction="row"
            flexWrap={"wrap"}
            gap={8}
            mb={5}
            justifyContent="center"
          >
            {data[item].map((picture: any, index: number) => (
              <img
                height={60}
                key={index}
                src={picture}
                alt={`Image ${index}`}
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};
