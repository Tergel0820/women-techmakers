import { Box, Typography } from "@mui/material"
import React from "react"

export const Title = ({ title }: { title: string }) => {
  return (
    <Box sx={{ mt: 5, mb: 4 }}>
      <Typography sx={{ fontSize: "31px", fontWeight: 500 }}>
        {title}
      </Typography>
    </Box>
  )
}
