import { Box, Stack, Typography } from "@mui/material"
import React from "react"
import avatar1 from "../../assets/image/avatar1.png"
interface AvatarType {
  image: string
  name: string
  role: string
}

export const Avatar = ({ data }: { data: AvatarType }) => {
  return (
    <Stack justifyContent={"center"} alignItems="center" gap={3}>
      <Box>
        <img src={data.image} />
      </Box>
      <Stack alignItems="center" gap={1}>
        <Typography fontWeight={600}>{data.name}</Typography>
        <Typography>{data.role}</Typography>
      </Stack>
    </Stack>
  )
}
