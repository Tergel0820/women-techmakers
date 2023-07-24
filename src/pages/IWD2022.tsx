import { Box, Container, Stack, Typography } from "@mui/material";
import { Album, Button, CardItem, Title } from "../components";
import React, { useEffect } from "react";
import devsummit from "../assets/image/devsummit.png";
import Card1 from "../assets/image/card1.png";
import Card2 from "../assets/image/card2.png";
import Card3 from "../assets/image/card3.png";
import Dev1 from "../assets/image/dev1.png";
import Dev2 from "../assets/image/dev2.png";
import Dev3 from "../assets/image/dev3.png";
import Dev4 from "../assets/image/dev4.png";
import Dev5 from "../assets/image/dev5.png";
import Dev6 from "../assets/image/dev6.png";
import { Link } from "react-router-dom";

export const IWD2022 = () => {
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

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <Stack alignItems={"center"}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Stack
          width={"100vw"}
          sx={{
            backgroundColor: "#F4F7FB",
            pt: 10,
            pb: 10,
          }}
        >
          <Container>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Box
                sx={{
                  width: "452px",
                  height: "452px",
                  backgroundColor: "#F5D76E",
                }}
              />
              <Typography width={590} fontSize="20px" fontWeight={300}>
                Дэлхийн 100 гаруй оронд үйл ажиллагаагаа явуулдаг Women
                Techmakers коммунити нь Олон улсын эмэгтэйчүүдийн эрхийг
                хамгаалах өдрийг тохиолдуулан International Women’s Day буюу IWD
                өдрийг жил бүр уламжлал болгон зохион байгуулж, технологи дахь
                болон технологийн салбарт сонирхолтой эмэгтэйчүүдийнхээ ололт
                амжилт, алдаа оноо, түүх туршлагаас хуваалцан өргөнөөр тэмдэглэн
                өнгөрүүлдэг билээ.
              </Typography>
            </Stack>
          </Container>
        </Stack>

        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
          width={"100%"}
          pb={10}
          pt={10}
        >
          <Stack gap={5}>
            <Typography>
              IWD22 арга хэмжээг Монголд анх удаа
              <br />
              <Link
                to={"https://devsummit.mn/"}
                style={{ textDecoration: "none", color: "#518FF5" }}
              >
                “Progress Not Perfection”
              </Link>{" "}
              уриан дор
              <br /> DevSummit 2022 технологийн арга
              <br /> хэмжээтэй хамтран зохион байгууллаа.
            </Typography>
            <Button sx={{ width: "170px", backgroundColor: "#518FF5" }}>
              Дэлгэрэнгүй
            </Button>
          </Stack>
          <Stack
            height={360}
            width={692}
            overflow={"hidden"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img height={"100%"} alt="devsummit" src={devsummit} />
          </Stack>
        </Stack>

        <Stack sx={{ backgroundColor: "#F4F7FB", pb: 8 }} width={"100vw"}>
          <Container>
            <Title title="Холбоотой зургууд" />
            <Album data={albumData} startSmall={true} />
          </Container>
        </Stack>

        <Stack sx={{ mb: 10 }} width={"100%"}>
          <Title title="Сүүлд болсон арга хэмжээ" />
          <Stack direction="row" justifyContent="space-between" gap={2}>
            {LatestEventsData.map((el) => (
              <CardItem data={el} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
