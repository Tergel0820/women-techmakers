import { Box, Container, Stack, Typography } from "@mui/material";
import {
  Album,
  Button,
  CardItem,
  Corprate,
  TabItem,
  Title,
} from "../components";
import React from "react";
import { Link } from "react-router-dom";
import HackethonImage from "../assets/image/hackathon.png";
import IWD2023Image from "../assets/image/iwd2023image.png";
import speaker1 from "../assets/image/speakers1.png";
import speaker2 from "../assets/image/speakers2.png";
import speaker3 from "../assets/image/speakers3.png";
import speaker4 from "../assets/image/speakers4.png";
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
    <Box></Box>,
    <Stack flexDirection="row" justifyContent="space-between" width={"100%"}>
      <img width={270} src={speaker1} alt="1" />
      <img width={270} src={speaker2} alt="2" />
      <img width={270} src={speaker3} alt="3" />
      <img width={270} src={speaker4} alt="4" />
    </Stack>,
    <Box></Box>,
    <Box></Box>,
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
  return (
    <Container>
      <Stack alignItems="center" gap={7}>
        <Stack
          sx={{ backgroundColor: "#F4F7FB", width: "100vw" }}
          pb={10}
          pt={18}
          flexWrap="wrap"
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack gap={5} width={480}>
              <Typography fontSize={20} fontWeight={400}>
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
            <Stack>
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
          </Container>
        </Stack>

        <Stack
          width="100%"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
          gap={5}
        >
          <Typography fontSize={{ width: "100%", xs: "20px", sm: "31px" }}>
            Хаана, Хэзээ
          </Typography>
          <Stack
            width={"100%"}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            mt={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <Stack direction="row" alignItems="center" flexWrap="wrap">
              <img
                alt=""
                src="https://s3-alpha-sig.figma.com/img/3a7d/3a7d/a00b013573376e1245f208a45d95f63a?Expires=1690761600&Signature=qz~BpmuiPgdkvwM4cJK-KTEATKX6Sh-CAi0FFoxuFvOVpCTNEsrIVsyBbHCpkvNKqUEYG5KtPaMIwuYm0ckwVlOlrwZZdeYKHbGot7EJsFwjCXGGevwEsvsmLmvgDd1QUJfzwTHqIYLnOcNUMsc2RoknxwkB6xHgRaoQkofXI5DyFJ8P4D1uTizraWB7GnFh2yQaFDWCXg5p1wDxaV41DkMkdxgAxjX1LsTeOgz1U177FFroJDLedNAhgVn7iHIX3k~SQFvec7YWTRqSE6Xb8tnUC4jP1FUkQ8l3OacRSfAbKordfefo7SONE3zBJA3zVwv7qlpsTysOITVUKomNnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                width="60px"
                height="60px"
              />
              <Typography fontSize={{ xs: "15px", sm: "25px" }}>
                Hub Innovation Center
              </Typography>
            </Stack>
            <Stack
              direction="row"
              flexWrap="wrap"
              alignItems="center"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <img
                alt=""
                src="https://s3-alpha-sig.figma.com/img/88d0/c7e9/1cf605c82e878025bb81091a95886ed1?Expires=1690761600&Signature=Kni8j4sv1xy~BeBpc4gkfsMd5z2E01aIVw9Ng519wgvaO4IarJTqqT9B2lCQkgkCTplH~8zNP5~cj-XUlErujj3i5Zj8tB1DFozD-55yyl5QwAcZcBZaCg~1t9B64t2qoRKSxW2-1WJfvVJxwduwRQz72pZIrP1Kq8QYQR53WD76i7atAftA-F1UJ7TMq8WWTG0hYwI~tPkkdBqkfDJjlHcG3QC7C0~2IdNf0v~HcEff1gWaZSO6EPQXIrvjdBYCahcyRFCoNhjCs5IG9r2wUwXyku3lf3G7d~rXzq1kkVbKSHlL8Y5x831YfvG2qyggTcNBRuDe5fYlW3-cDD2BZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                width="100px"
                height="50px"
              />

              <Typography fontSize={{ xs: "15px", sm: "25px" }}>
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
          sx={{ pb: 10, backgroundColor: "#F4F7FB", pt: 4, width: "100vw" }}
          width="100%"
          alignItems="center"
        >
          <Container>
            <Stack alignItems="center" gap={10}>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={5}
              >
                <img
                  width={"488px"}
                  height={"468px"}
                  style={{ borderRadius: "10px" }}
                  src={IWD2Image}
                />
                <Typography fontSize="20px">
                  Бүх оролцогч, хамтрагч байгууллагууд, шүүгч,
                  <br /> менторууддаа дэлхий дахин дахь эмэгтэйчүүдийн цахим{" "}
                  <br />
                  орчин дахь аюулгүй байдлыг хамгаалахын тулд нэг алхам
                  <br /> хийж, өөрсдийн хувь нэмрээ оруулсанд талархал
                  <br /> илэрхийлье.
                </Typography>
              </Stack>
              <Typography fontSize="20px">
                Технологийг дэмжигч, бүтээгч та бүхний цаашдын ажил үйлсэд өндөр
                амжилт хүсье. <br />
                Хүндэтгэсэн, Google-ийн Women Techmakers хөтөлбөрийн Монгол дахь
                баг хамт олон.
              </Typography>
            </Stack>
          </Container>
        </Stack>
        <TabItem panel={panelComponent} />
        <Stack
          sx={{ backgroundColor: "#F4F7FB", pb: 8 }}
          width="100vw"
          alignItems="center"
        >
          <Container>
            <Title title="Холбоотой зургууд" />
            <Album />
          </Container>
        </Stack>
        <Corprate data={CorprateData} />
        <Stack
          sx={{
            width: "100vw",
            backgroundColor: "#F4F7FB",
            pb: "120px",
          }}
          width="100%"
        >
          <Container>
            <Title title="Сүүлд болсон арга хэмжээ" />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              gap={2}
              mt={6}
            >
              {LatestEventsData.map((el) => (
                <CardItem data={el} />
              ))}
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </Container>
  );
};
