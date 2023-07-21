import { Box, Grid, Stack, Typography } from "@mui/material"
import { DiscordIcon, FacebookIcon, IG, LogoDefault, LogoWhite } from "../assets"
import React from "react"

export const Footer = () => {
  return (
    <Grid container sx={{ backgroundColor: "#0748B4" }} justifyContent="center">
      <Grid item xs={12} md={6} lg={4} sx={{ padding: 4 }}>
        <Stack gap={6}>
          <LogoDefault />
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Google компанийн дэргэдэх технологийн <br /> салбарын эмэгтэйчүүдийг
            дэмжих <br />
            зорилготой Women Techmakers
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ padding: 4 }}>
        <Stack gap={3}>
          <Typography
            sx={{
              color: "#D7D7D7",
              fontSize: "14px",
              fontWeight: 600,
              mb: 5,
            }}
          >
            Үндсэн цэс
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            IWD
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Event
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Team
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Certificate
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Code of Conduct
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ padding: 4 }}>
        <Stack gap={3}>
          <Typography
            sx={{
              color: "#D7D7D7",
              fontSize: "14px",
              fontWeight: 600,
              mb: 5,
            }}
          >
            Туслах цэс
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Хамтран ажиллах
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Холбоо барих
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ padding: 4 }}>
        <Stack gap={3}>
          <Typography
            sx={{
              color: "#D7D7D7",
              fontSize: "14px",
              fontWeight: 600,
              mb: 5,
            }}
          >
            Бидэнтэй холбогдох
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Монгол улс, Улаанбаатар хот
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            Утас
          </Typography>
          <Typography sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1 }}>
            И-мэйл хаяг
          </Typography>
          <Stack direction="row" gap={2} mt={5}>
            <Box
              sx={{
                borderRadius: "100%",
                border: "0.53px solid white",
                padding: 2,
              }}
            >
              <FacebookIcon fill="white" />
            </Box>
            <Box
              sx={{
                borderRadius: "100%",
                border: "0.53px solid white",
                padding: 2,
              }}
            >
              <DiscordIcon fill="white" />
            </Box>
            <Box
              sx={{
                borderRadius: "100%",
                border: "0.53px solid white",
                padding: 2,
              }}
            >
              <IG fill="white" />
            </Box>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} sx={{ padding: 2 }}>
        <Typography sx={{ color: "#496AC0", textAlign: "center" }}>
          Copyright 2021-2023 | Women Techmakers | All Right Reserved | Powered
          by Google
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
