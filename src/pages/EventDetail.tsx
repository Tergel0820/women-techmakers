import { Box, Container, Stack, Typography } from "@mui/material";
import { Album, Button, CardItem, TabItem, Title } from "../components";
import React, { useEffect } from "react";
import hackathon from "../assets/image/hackathon.png";
import Dev1 from "../assets/image/dev1.png";
import Dev2 from "../assets/image/dev2.png";
import Dev3 from "../assets/image/dev3.png";
import Dev4 from "../assets/image/dev4.png";
import Dev5 from "../assets/image/dev5.png";
import Dev6 from "../assets/image/dev6.png";
import WomenTechmakersLogo from "../assets/image/womenTechmakersMongoliaLogo.png";
import BeerNightStudioLogo from "../assets/image/beerNightStudio.png";
import { Footer } from "layout";

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
        <Stack alignItems={"center"} gap={7}>
          <Stack sx={{ backgroundColor: "#F4F7FB" }} width="100vw">
            <Container>
              <Stack mt={16}>
                <Title title="Бидний явуулсан арга хэмжээ" />
              </Stack>
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
                width="100%"
                pb={10}
                pt={10}
                gap={2}
              >
                <Stack width={"42%"}>
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
                  <Stack mt={"78px"}>
                    <Button sx={{ width: "170px", backgroundColor: "#518FF5" }}>
                      Дэлгэрэнгүй
                    </Button>
                  </Stack>
                </Stack>

                <img width={590} alt="hackathon" src={hackathon} />
              </Stack>
            </Container>
          </Stack>

          <Stack width="100%">
            <Title title="Хаана, Хэзээ" />
            <Stack direction={"row"} justifyContent="space-between" mt={5}>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
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
                  <img
                    alt=""
                    src="https://s3-alpha-sig.figma.com/img/3a7d/3a7d/a00b013573376e1245f208a45d95f63a?Expires=1690761600&Signature=qz~BpmuiPgdkvwM4cJK-KTEATKX6Sh-CAi0FFoxuFvOVpCTNEsrIVsyBbHCpkvNKqUEYG5KtPaMIwuYm0ckwVlOlrwZZdeYKHbGot7EJsFwjCXGGevwEsvsmLmvgDd1QUJfzwTHqIYLnOcNUMsc2RoknxwkB6xHgRaoQkofXI5DyFJ8P4D1uTizraWB7GnFh2yQaFDWCXg5p1wDxaV41DkMkdxgAxjX1LsTeOgz1U177FFroJDLedNAhgVn7iHIX3k~SQFvec7YWTRqSE6Xb8tnUC4jP1FUkQ8l3OacRSfAbKordfefo7SONE3zBJA3zVwv7qlpsTysOITVUKomNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="60px"
                    height="60px"
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
                flexWrap="wrap"
                alignItems="center"
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
                  <img
                    alt=""
                    src="https://s3-alpha-sig.figma.com/img/88d0/c7e9/1cf605c82e878025bb81091a95886ed1?Expires=1690761600&Signature=Kni8j4sv1xy~BeBpc4gkfsMd5z2E01aIVw9Ng519wgvaO4IarJTqqT9B2lCQkgkCTplH~8zNP5~cj-XUlErujj3i5Zj8tB1DFozD-55yyl5QwAcZcBZaCg~1t9B64t2qoRKSxW2-1WJfvVJxwduwRQz72pZIrP1Kq8QYQR53WD76i7atAftA-F1UJ7TMq8WWTG0hYwI~tPkkdBqkfDJjlHcG3QC7C0~2IdNf0v~HcEff1gWaZSO6EPQXIrvjdBYCahcyRFCoNhjCs5IG9r2wUwXyku3lf3G7d~rXzq1kkVbKSHlL8Y5x831YfvG2qyggTcNBRuDe5fYlW3-cDD2BZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="100px"
                    height="50px"
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

          <Stack width="100%" mt={2}>
            <TabItem panel={panelComponent} />
          </Stack>

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

          <Stack width={"100%"}>
            <Title title="Хамтран зохион байгуулсан" />
            <Stack
              height={96}
              direction={"row"}
              alignItems={"center"}
              gap={6}
              mt={4}
              mb={6}
            >
              <img height={"70%"} src={WomenTechmakersLogo} />
              <img height={"100%"} src={BeerNightStudioLogo} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};
