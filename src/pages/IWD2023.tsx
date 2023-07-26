import { Box, Container, Stack, Typography } from "@mui/material";
import {
  Album,
  Button,
  Corprate,
  PaginationCard,
  TabItem,
  Title,
} from "../components";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HackethonImage from "../assets/image/hackathon.png";
import IWD2023Image from "../assets/image/iwd2023image.png";
import IWD20231Image from "../assets/image/iwd20231.png";
import IWD20232Image from "../assets/image/iwd20232.png";
import IWD20233Image from "../assets/image/iwd20233.png";
import IWD20234Image from "../assets/image/iwd20234.png";
import IWD20235Image from "../assets/image/iwd20235.png";
import speaker1 from "../assets/image/speakers1.png";
import speaker2 from "../assets/image/speakers2.png";
import speaker3 from "../assets/image/speakers3.png";
import speaker4 from "../assets/image/speakers4.png";
import Judge1 from "../assets/image/judge1.jpg";
import Judge3 from "../assets/image/judge3.jpeg";
import Judge4 from "../assets/image/judge4.jpg";
import Judge5 from "../assets/image/judge5.jpg";
import Mentor2 from "../assets/image/mentor2.jpg";
import Mentor3 from "../assets/image/mentor3.jpg";
import IWD2Image from "../assets/image/iwd2.png";
import Corprate1 from "../assets/image/corprate1.png";
import Corprate2 from "../assets/image/corprate2.png";
import Corprate3 from "../assets/image/corprate3.png";
import Corprate4 from "../assets/image/corprate4.png";
import Corprate5 from "../assets/image/corprate5.png";
import Corprate6 from "../assets/image/corprate6.png";
import Corprate7 from "../assets/image/corprate7.png";
import Corprate8 from "../assets/image/corprate8.png";
import Card1 from "../assets/image/card1.png";
import Card2 from "../assets/image/card2.png";
import Card3 from "../assets/image/card3.png";

export const IWD2023 = () => {
  const panelComponent = [
    undefined,
    <Box width={"100%"} overflow={"hidden"} style={{ overflowX: "scroll" }}>
      <Stack direction="row" justifyContent={"space-between"} gap={2}>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={"100%"} src={speaker1} alt="1" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={"100%"} src={speaker2} alt="2" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={"100%"} src={speaker3} alt="3" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={"100%"} src={speaker4} alt="4" />
        </Box>
      </Stack>
    </Box>,
    <Box width={"100%"} overflow={"hidden"} style={{ overflowX: "scroll" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        gap={3}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={speaker4} alt="1" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={speaker1} alt="2" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={Judge3} alt="3" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={Judge4} alt="4" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: 341 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={"100%"} src={Judge5} alt="4" />
        </Box>
      </Stack>
    </Box>,
    <Box width={"100%"} overflow={"hidden"} style={{ overflowX: "scroll" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        gap={3}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={Judge1} alt="1" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={speaker1} alt="2" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={Judge3} alt="3" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={341} src={Judge4} alt="4" />
        </Box>
        <Box
          width={{ xs: 120, sm: 270 }}
          height={{ xs: 168, sm: 341 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
          borderRadius={{ xs: "10px", sm: 0 }}
        >
          <img height={"100%"} src={Judge5} alt="4" />
        </Box>
      </Stack>
    </Box>,
    ,
  ];
  const CorprateData = {
    "Хамтран ажиллагч байгууллагууд": [Corprate1, Corprate2],
    "Дэмжигч байгууллагууд": [Corprate3, Corprate4, Corprate5],
    "Ивээн тэтгэгч байгууллагууд": [Corprate6, Corprate7, Corprate8],
  };
  const LatestEventsData = [
    {
      title: "The Beer Night networking event",
      image: Card1,
      meeting: "WTM meeting#3",
      name: "Beer Night Studio",
      location: "Beer Night Studio",
      date: "2023 Feb 9, 18:40",
    },
    {
      title: "Remote working exprience",
      image: Card2,
      meeting: "WTM meeting#2",
      name: "B, Zolbayar",
      location: "Hub Innovation Center",
      date: "2023 Jan 19, 18:00",
    },
    {
      title: "Women in startup",
      image: Card3,
      meeting: "WTM meeting#1",
      name: "А.Хулангоо & Б.Манд",
      location: "Bilig Vegan Bristro&Dining restaurant",
      date: "2023 Sep 14, 17:00",
    },
  ];

  const albumData = [
    {
      img: IWD20231Image,
    },
    {
      img: IWD20233Image,
    },
    {
      img: IWD2023Image,
    },
    {
      img: IWD20234Image,
    },
    {
      img: IWD20232Image,
    },
    {
      img: IWD20235Image,
    },
  ];

  const TabData = {
    Workshop: [],
    Speaker: [speaker1, speaker2, speaker3, speaker4],
    Mentor: [speaker4, Mentor2, Mentor3, Judge4],
    Judges: [Judge1, speaker4, Judge3, Judge4, Judge5],
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <Stack alignItems="center" gap={{ xs: 3, sm: 7 }}>
        <Stack
          width={"100vw"}
          bgcolor={{ xs: "#fff", sm: "#F4F7FB" }}
          pb={{ xs: 2, sm: 10 }}
          pt={{ xs: 10, sm: 18 }}
          flexWrap="wrap"
        >
          <Container>
            <Stack
              width={"100%"}
              display={"flex"}
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack display={{ xs: "flex", sm: "none" }}>
                <img width={"100%"} alt="iwd2023image" src={IWD2023Image} />
              </Stack>
              <Stack
                gap={5}
                width={{ xs: "100%", sm: 480 }}
                mt={{ xs: 3, sm: 0 }}
              >
                <Typography
                  fontSize={{ xs: 16, sm: 20 }}
                  fontWeight={400}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  IWD буюу Олон улсын эмэгтэйчүүдийн эрхийг хамгаалах өдрийн
                  хүрээнд жил бүр, дэлхи дахинаа уламжлал болгон явуулдаг Women
                  Techmaker хөтөлбөрийн томоохон үйл ажиллагаа энэ жил монголд{" "}
                  <Link
                    to={"/IWD/2023"}
                    style={{ textDecoration: "none", color: "#518FF5" }}
                  >
                    "Women's Online Safety"
                  </Link>{" "}
                  сэдэвт{" "}
                  <Link
                    to={"/IWD/2023"}
                    style={{ textDecoration: "none", color: "#518FF5" }}
                  >
                    хакатон
                  </Link>{" "}
                  байдлаар амжилттай бол өнгөрлөө.
                </Typography>
                <Link
                  to={"https://www.facebook.com/wtmmongolia/events"}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      width: "170px",
                      backgroundColor: "#518FF5",
                    }}
                  >
                    Дэлгэрэнгүй
                  </Button>
                </Link>
              </Stack>
              <Stack display={{ xs: "none", sm: "flex" }}>
                <img
                  height={223}
                  width={586}
                  alt="hackathon"
                  src={HackethonImage}
                />
                <img
                  style={{ position: "relative", top: "-96px" }}
                  height={234}
                  width={488}
                  alt="iwd2023image"
                  src={IWD2023Image}
                />
              </Stack>
            </Stack>
          </Container>
        </Stack>

        <Stack
          width="100%"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
          gap={5}
        >
          <Stack width={"100%"}>
            <Box
              display={{ xs: "flex", sm: "none" }}
              height={11}
              width={34}
              bgcolor={"#518FF5"}
              borderRadius={6}
            ></Box>
            <Typography fontSize={{ width: "100%", xs: "25px", sm: "31px" }}>
              Хаана, Хэзээ
            </Typography>
          </Stack>
          <Stack
            width={"100%"}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            mt={{ xs: 0, sm: 2 }}
            alignItems="center"
            flexWrap="wrap"
          >
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
                Hub Innovation Center
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
            {/* <Stack direction="row">
              <img
                alt=""
                src="https://s3-alpha-sig.figma.com/img/48dd/4593/1ade2c39609251c0499dabd120b3194d?Expires=1690761600&Signature=QNvDR7GdY-wH6brzNFKJizv4krfIorxRZ453Nl7K6sEFlH~COMPQbqi-WCR3RaWX6Qo8jn20fgViEPaiWIAOpMY8cB7YP6rZSXhvUjOdeMdcHafzvmsfpDlWOeRIC9nr3PND2-OcQ-HRAio58ExhAX26S1XkLFsmBTvYBkRxLsbZz2jEjMn9kbacQMoLkmRK7jz6eawAQgA5tl6avgTjHFQ02TPGxhwe38oT0MdfYV9Ha6eVsfWUp3q7XKko6BZ8wgpeocptNnv7T6zszu9Aa0ZAG6Fg4d4TWigzFebcxjEZ~stpvUTs8AbhHMRMVIMMAs0bQAR8GG3UY~Pku9afxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                width="60px"
                height="45px"
              />

              <Typography fontSize={{ xs: "15px", sm: "25px" }}>
                99892055
              </Typography>
            </Stack> */}
          </Stack>
        </Stack>

        <Stack
          bgcolor={{ xs: "#fff", sm: "#F4F7FB" }}
          pt={4}
          pb={{ xs: 3, sm: 10 }}
          width={"100vw"}
          alignItems={"center"}
        >
          <Container>
            <Stack alignItems="center" gap={10}>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={{ xs: 3, sm: 5 }}
              >
                <Stack
                  width={{ xs: "100%", sm: 488 }}
                  direction={"row"}
                  justifyContent={{ xs: "space-between" }}
                >
                  <Box
                    display={{ xs: "flex", sm: "none" }}
                    width={153}
                    height={121}
                    overflow={"hidden"}
                  >
                    <img height={"100%"} src={HackethonImage} />
                  </Box>
                  <Box
                    width={{ xs: "152px", sm: "488px" }}
                    height={{ xs: "136px", sm: "468px" }}
                    borderRadius={"10px"}
                    overflow={"hidden"}
                    mt={{ xs: 8, sm: 0 }}
                  >
                    <img width={"100%"} height={"100%"} src={IWD2Image} />
                  </Box>
                </Stack>
                <Typography
                  fontSize={{ xs: 16, sm: 20 }}
                  fontWeight={400}
                  width={{ xs: "100%", sm: 580 }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Бүх оролцогч, хамтрагч байгууллагууд, шүүгч, менторууддаа
                  дэлхий дахин дахь эмэгтэйчүүдийн цахим орчин дахь аюулгүй
                  байдлыг хамгаалахын тулд нэг алхам хийж, өөрсдийн хувь нэмрээ
                  оруулсанд талархал илэрхийлье.
                </Typography>
              </Stack>
              <Typography
                display={{ xs: "none", sm: "flex" }}
                fontSize={{ xs: 16, sm: 20 }}
              >
                Технологийг дэмжигч, бүтээгч та бүхний цаашдын ажил үйлсэд өндөр
                амжилт хүсье. <br />
                Хүндэтгэсэн, Google-ийн Women Techmakers хөтөлбөрийн Монгол дахь
                баг хамт олон.
              </Typography>
            </Stack>
          </Container>
        </Stack>
        <TabItem panel={panelComponent} data={TabData} />
        <Stack
          sx={{ backgroundColor: "#F4F7FB" }}
          width="100vw"
          alignItems="center"
          pt={6}
          pb={8}
        >
          <Container>
            <Stack gap={2}>
              <Title title="Холбоотой зургууд" />
              <Album data={albumData} />
            </Stack>
          </Container>
        </Stack>
        <Corprate data={CorprateData} />
        <Stack
          sx={{
            width: "100vw",
            backgroundColor: "#F4F7FB",
          }}
          width="100%"
          pt={4}
          pb={10}
        >
          <Container>
            <Stack gap={6}>
              <Title title="Сүүлд болсон арга хэмжээ" />
              <PaginationCard data={LatestEventsData} />
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </Container>
  );
};
