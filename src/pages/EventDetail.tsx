import { Box, Container, Stack, Typography } from "@mui/material";
import { Album, Button, Title } from "../components";
import React, { useEffect } from "react";
import { Footer } from "layout";
import { Player } from "@lottiefiles/react-lottie-player";
import hackathon from "../assets/image/hackathon.png";
import Dev1 from "../assets/image/dev1.png";
import Dev2 from "../assets/image/dev2.png";
import Dev3 from "../assets/image/dev3.png";
import Dev4 from "../assets/image/dev4.png";
import Dev5 from "../assets/image/dev5.png";
import Dev6 from "../assets/image/dev6.png";
import WomenTechmakersLogo from "../assets/image/womenTechmakersMongoliaLogo.png";
import BeerNightStudioLogo from "../assets/image/beerNightStudio.png";
import LocationLottie from "../assets/image/locationLottie.json";
import CalendarLottie from "../assets/image/calendarLottie.json";

const albumData = [
  {
    img: Dev1,
  },
  {
    img: Dev2,
  },
  {
    img: Dev3,
  },
  {
    img: Dev4,
  },
  {
    img: Dev5,
  },
  {
    img: Dev6,
  },
];

export const EventDetail = () => {
  const panelComponent = [<Box></Box>, <Box></Box>, <Box></Box>, <Box></Box>];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Container>
        <Stack alignItems={"center"} gap={{ xs: 0, sm: 7 }}>
          <Stack bgcolor={{ xs: "#fff", sm: "#F4F7FB" }} width="100vw">
            <Container>
              <Stack mt={{ xs: 12, sm: 16 }}>
                <Title title="Бидний явуулсан арга хэмжээ" />
              </Stack>
              <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                alignItems={"center"}
                justifyContent="space-between"
                width="100%"
                pb={10}
                pt={{ xs: 4, sm: 10 }}
                gap={2}
              >
                <Stack width={{ xs: "100%", sm: "42%" }}>
                  <Typography
                    fontSize={25}
                    fontWeight={500}
                    lineHeight={"140%"}
                  >
                    Meeting #9, “Монгол залуус дэлхийд өрсөлдөх боломж”
                  </Typography>
                  <Typography mt={"12px"}>
                    IWD буюу Олон улсын эмэгтэйчүүдийн эрхийг хамгаалах өдрийн
                    хүрээнд жил бүр, дэлхий дахинаа уламжлал болгон явуулдаг
                    Women Techmakers хөтөлбөрийн томоохон үйл ажиллагаа энэ жил
                    монголд "Women's Online Safety" сэдэвт хакатон байдлаар
                    амжилттай болж өнгөрлөө.
                  </Typography>
                  <Stack mt={{ xs: "16px", sm: "78px" }}>
                    <Button sx={{ width: "170px", backgroundColor: "#518FF5" }}>
                      Дэлгэрэнгүй
                    </Button>
                  </Stack>
                </Stack>
                <Box
                  width={{ xs: "100%", sm: 590 }}
                  overflow={"hidden"}
                  borderRadius={{ xs: "10px", sm: 0 }}
                >
                  <img width={"100%"} alt="hackathon" src={hackathon} />
                </Box>
              </Stack>
            </Container>
          </Stack>

          <Stack width="100%">
            <Title title="Хаана, Хэзээ" />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              mt={5}
            >
              <Stack
                direction="row"
                alignItems="center"
                gap={"20px"}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box
                  width={"60px"}
                  height={"60px"}
                  overflow={"hidden"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Player
                    style={{ height: "100%", width: "100%" }}
                    src={LocationLottie}
                    autoplay
                    loop
                  />
                </Box>
                <Typography
                  fontSize={{ xs: "16px", sm: "25px" }}
                  fontWeight={500}
                >
                  By our Discord channel
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                gap={"20px"}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Box
                  width={"60px"}
                  height={"60px"}
                  overflow={"hidden"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Player
                    style={{ height: "100%", transform: "scale(1.6)" }}
                    src={CalendarLottie}
                    autoplay
                    loop
                  />
                </Box>
                <Typography
                  fontSize={{ xs: "16px", sm: "25px" }}
                  fontWeight={500}
                >
                  3 сарын (8) - 3 сарын (12)
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* <Stack width="100%" mt={2}>
            <TabItem panel={panelComponent} />
          </Stack> */}

          <Stack
            sx={{ backgroundColor: "#F4F7FB", pb: 8 }}
            width={"100vw"}
            pt={8}
          >
            <Container>
              <Stack gap={6}>
                <Title title="Холбоотой зургууд" />
                <Album data={albumData} startSmall />
              </Stack>
            </Container>
          </Stack>

          <Stack width={"100%"} pt={{ xs: 4 }}>
            <Title title="Хамтран зохион байгуулсан" />
            <Stack
              height={96}
              direction={"row"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={{ xs: 2, sm: 6 }}
              mt={{ xs: 0, sm: 4 }}
              mb={{ xs: 2, sm: 6 }}
            >
              <Box height={{ xs: "40px", sm: "70%" }}>
                <img height={"100%"} src={WomenTechmakersLogo} />
              </Box>
              <Box height={{ xs: "50px", sm: "100%" }}>
                <img height={"100%"} src={BeerNightStudioLogo} />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};
