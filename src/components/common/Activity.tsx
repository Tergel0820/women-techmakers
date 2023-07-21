import { Box, Stack, Typography } from "@mui/material"
import React from "react"
import discord from "../../assets/image/discord.png"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Navigate, useNavigate } from "react-router-dom"

interface ActivityProps {
  icon: any
  title: string
  link: string
  href: string
}

export const Activity = ({ data }: { data: ActivityProps }) => {
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        ...style.container,
        "&:hover": {
          cursor: "pointer",
          boxShadow: "0px 0px 10px gray",
        },
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={5}
      padding={3}
    >
      <Box>
        <img src={data.icon} alt="picture" width={200} />
      </Box>
      <Stack gap={2}>
        <Typography sx={{ fontSize: "20px", width: "252px" }}>
          {data.title}
        </Typography>
        <Stack
          sx={style.href}
          direction="row"
          alignItems="center"
          gap={1}
          onClick={() => navigate(data.href)}
        >
          <Typography> {data.link}</Typography> <ChevronRightIcon />
        </Stack>
      </Stack>
    </Stack>
  )
}

export const ActivityMobile = ({ data }: { data: ActivityProps }) => {
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        ...style.containerMobile,
        "&:hover": {
          cursor: "pointer",
          boxShadow: "0px 0px 10px gray",
        },
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={5}
      padding={3}
    >
      <Box>
        <img src={data.icon} alt="picture" width={60} />
      </Box>
      <Stack gap={2}>
        <Typography sx={{ fontSize: "20px", width: "205px" }}>
          {data.title}
        </Typography>
        <Stack
          sx={style.href}
          direction="row"
          alignItems="center"
          gap={1}
          onClick={() => navigate(data.href)}
        >
          <Typography> {data.link}</Typography> <ChevronRightIcon />
        </Stack>
      </Stack>
    </Stack>
  )
}

const style = {
  container: {
    border: "1px solid #CCC",
    borderRadius: "10px",
    height: "348px",
    transition: "border-color 0.3s, cursor 0.3s, box-shadow 0.3s", // Add transition for smooth hover effect
  },
  containerMobile: {
    border: "1px solid #D7DEEA",
    borderRadius: "10px",
    width: "95%",
    backgroundColor: "#F4F7FB",
    transition: "border-color 0.3s, cursor 0.3s, box-shadow 0.3s", // Add transition for smooth hover effect
  },
  href: {
    color: "#646E82",
    fontSize: "16px",
  },
}
