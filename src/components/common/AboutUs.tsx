import { Box, Stack, Typography } from "@mui/material"
import React from "react"

interface AboutType {
  icon: any
  text: string
  number: string
}

export const AboutUs = ({ data }: { data: AboutType }) => {
  return (
    <Stack justifyContent={"center"} alignItems="center" gap={1}>
      {data.icon}
      <Stack alignItems={"center"}>
        <Typography
          sx={{
            color: "#518FF5",
            fontSize: "40px",
            fontWeight: 600,
          }}
        >
          {data.number}
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 300,
          }}
        >
          {data.text}
        </Typography>
      </Stack>
    </Stack>
  )
}
