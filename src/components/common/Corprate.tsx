import React from "react"
import { Box, Stack } from "@mui/material"

import { Title } from "./Title"

export const Corprate = ({ data }: { data?: any }) => {
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      justifyContent="space-between"
      gap={3}
    >
      {Object.keys(data).map((item, index) => (
        <Box key={index}>
          <Title title={item} />
          <Stack
            direction="row"
            spacing={2}
            flexWrap={"wrap"}
            gap={3}
            justifyContent="center"
          >
            {data[item].map((picture: any, index: number) => (
              <img key={index} src={picture} alt={`Image ${index}`} />
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  )
}
