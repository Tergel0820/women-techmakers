import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { FacebookIcon, InstagramIcon, DiscordIcon } from "../assets";
import React from "react";
import WomenTechLogo from "../assets/image/womenTechLogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container
      maxWidth={false}
      style={{ width: "100vw", margin: 0, padding: 0 }}
    >
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "#0748B4",
          paddingTop: 12,
          paddingBottom: 10,
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack gap={6}>
            <img width={142} height={142} src={WomenTechLogo} />
            <Typography
              sx={{ color: "#D7D7D7", fontSize: "14px", mb: 1, width: "286px" }}
            >
              Google компанийн дэргэдэх технологийн салбарын эмэгтэйчүүдийг
              дэмжих зорилготой Women Techmakers
            </Typography>
          </Stack>

          <Grid item xs={6} sm={4} md={3} lg={2} sx={{ padding: 4 }}>
            <Stack gap={1}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  mb: 4,
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
            <Stack gap={1}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  mb: 4,
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
            <Stack gap={1}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  mb: 4,
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
              <Stack direction="row" gap={2} mt={2}>
                <Link to={"https://www.facebook.com/wtmmongolia"}>
                  <Box
                    sx={{
                      width: "52.7px",
                      height: "52.7px",
                      borderRadius: "50%",
                      border: "0.53px solid #fff",
                      padding: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FacebookIcon fill="#fff" />
                  </Box>
                </Link>
                <Link to={"https://discord.com/invite/qbCyxqPZ9k"}>
                  <Box
                    sx={{
                      width: "52.7px",
                      height: "52.7px",
                      borderRadius: "50%",
                      border: "0.53px solid #fff",
                      padding: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DiscordIcon fill="#fff" />
                  </Box>
                </Link>
                <Link to={"https://www.instagram.com/wtmmongolia/"}>
                  <Box
                    sx={{
                      width: "52.7px",
                      height: "52.7px",
                      borderRadius: "50%",
                      border: "0.53px solid #fff",
                      padding: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <InstagramIcon fill="#fff" />
                  </Box>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Container>
      </Container>
      <Container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Typography
          color={"#496AC0"}
          fontSize={14}
          fontWeight={500}
          style={{ display: "flex", gap: "12px" }}
        >
          <Typography>Copyright 2021-2023</Typography>
          <Typography>|</Typography>
          <Typography>Women Techmakers|All Right Reserved</Typography>
          <Typography>|</Typography>
          <Typography>Powered by Google</Typography>
        </Typography>
      </Container>
    </Container>
  );
};

export default Footer;
