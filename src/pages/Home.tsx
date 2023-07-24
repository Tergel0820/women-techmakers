import { Box, Container, Stack, Typography, CardMedia } from "@mui/material";
import React, { useEffect } from "react";
import { AboutUs, Activity, Button, CardItem, Title } from "../components";
import homeback from "../assets/image/background.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import {
  FacebookIcon,
  ArrowDownIcon,
  DiscordIcon,
  InstagramIcon,
} from "../assets";
import home from "../assets/image/home.png";
import Image1 from "../assets/icon/image1.png";
import Image2 from "../assets/icon/image2.png";
import Image3 from "../assets/icon/image3.png";
import Activity1 from "../assets/image/activity1.png";
import Activity2 from "../assets/image/activity2.png";
import Activity3 from "../assets/image/activity3.jpeg";
import Activity4 from "../assets/image/activity4.png";
import Card1 from "../assets/image/card1.png";
import Card2 from "../assets/image/card2.png";
import Card3 from "../assets/image/card3.png";
import "../styles/arrow-down.css";
import { Header, Loading } from "layout";
import { Curve } from "assets/icon/curve";
import { Link } from "react-router-dom";

export const Home = () => {
  const AboutUsData = [
    {
      icon: <CalendarMonthIcon sx={{ color: "#FF6363", fontSize: "110px" }} />,
      text: "оноос хойш",
      number: "2021",
    },
    {
      icon: <PublicIcon sx={{ color: "#FAC543", fontSize: "110px" }} />,
      text: "IWD арга хэмжээ",
      number: "2+",
    },
    {
      icon: (
        <SupervisedUserCircleOutlinedIcon
          sx={{ color: "#2FC9BD", fontSize: "110px" }}
        />
      ),
      text: "Уулзалт, эвэнт",
      number: "20+",
    },
    {
      icon: (
        <PeopleAltOutlinedIcon sx={{ color: "#4D81BD", fontSize: "110px" }} />
      ),
      number: "500+",
      text: "Оролцогчид",
    },
  ];

  const ActivityData = [
    {
      icon: Activity1,
      title: "7 хоног бүр онлайнаар болох үйл ажиллагаа",
      link: "Discord серверт нэгдэх",
      href: "string",
    },
    {
      icon: Activity2,
      title:
        "Сар бүрийн сонирхолтой зочинтой уулзалт, танилын хүрээгээ тэлэх боломж",
      link: "Юу болж байна?",
      href: "string",
    },
    {
      icon: Activity3,
      title:
        "Технологийн салбарт зам гаргаад явж буй эмэгтэйчүүдийн урам зориг өгөх түүхээс",
      link: "Postby нийтлэл унших",
      href: "string",
    },
    {
      icon: Activity4,
      title: "IWD жил бүрийн арга хэмжээ (International Women’s Day)",
      link: "IWD 23 эргэн тойронд",
      href: "string",
    },
  ];

  const CardData = [
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
      <Stack alignItems={"center"} mt={{ xs: "62px", sm: 0 }}>
        <CardMedia
          style={{
            width: "100vw",
            position: "relative",
          }}
          image={homeback}
        >
          <Stack
            width={"100vw"}
            height={{ xs: 271, sm: "100vh", md: "100vh" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            zIndex={1}
            style={{
              background:
                "linear-gradient(180deg, rgba(123, 149, 197, 0.9) 0%, rgba(39, 72, 127, 0.9) 100%)",
            }}
          >
            <Stack
              display={{ xs: "none", sm: "flex", md: "flex" }}
              position={"absolute"}
              top={0}
              width={"100%"}
            >
              <Header theme="transparent" />
            </Stack>
            <Typography
              color={"#FDFEFE"}
              fontSize={{ xs: 24, sm: 24, md: 70 }}
              textAlign={"center"}
            >
              Women Techmakers Mongolia
            </Typography>
            <Typography
              fontSize={{ xs: 18, sm: 32, md: 32 }}
              color="#EAEEF5"
              textAlign={"center"}
            >
              Хүн болгон технологи
              <br /> бүтээж чадна
            </Typography>
            {/* <Button /> */}
            <Link to={"/event"} style={{ zIndex: 1, textDecoration: "none" }}>
              <Button
                sx={{
                  backgroundColor: "white",
                  borderColor: "white",
                  color: "black",
                }}
                variant="secondary"
              >
                Event-д бүртгүүлэх
              </Button>
            </Link>
            <Stack
              display={{ xs: "none", sm: "flex", md: "flex" }}
              position={"absolute"}
              bottom={0}
              className="arrow-down"
            >
              <ArrowDownIcon />
            </Stack>
          </Stack>
          <Box
            position={"absolute"}
            width={"100%"}
            bottom={{ xs: -12, sm: -52 }}
          >
            <Curve />
          </Box>
        </CardMedia>
        <Stack
          width={"100vw"}
          position={{ xs: "fixed", sm: "sticky" }}
          top={0}
          zIndex={1}
        >
          <Header theme="white" />
        </Stack>
        {/* -------------------------------------Бидний тухай--------------------------------- */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          marginTop={{ xs: 4, sm: 12 }}
          justifyContent={"space-between"}
          width="100%"
          gap={3}
        >
          <Typography fontSize={31}>Бидний тухай</Typography>
          <Typography
            width={{ xs: "100%", sm: 500 }}
            fontSize={20}
            fontWeight={400}
            textAlign={{ xs: "center", sm: "start" }}
          >
            Google компанийн дэргэдэх технологийн салбарын эмэгтэйчүүдийг дэмжих
            зорилготой Women Techmakers хөтөлбөрийг Монголд 2021 оноос эхлэн
            Women Techmakers Mongolia коммунити албан ёсоор хүргэж байна.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent={"space-between"}
          width="100%"
          flexWrap={"wrap"}
          mt={20}
          mb={16}
        >
          {AboutUsData.map((data) => {
            return <AboutUs data={data} />;
          })}
        </Stack>

        {/* -------------------------------------picture--------------------------------- */}
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
          width={"100%"}
          mb={12}
        >
          <Box
            width={"45%"}
            overflow={"hidden"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img width={"100%"} src={home} />
          </Box>
          <Typography
            sx={{ width: "40%" }}
            fontSize={{ xs: 16, sm: 20 }}
            fontWeight={400}
          >
            Бид технологийн салбарын болон салбарт сонирхолтой охид
            эмэгтэйчүүдийг дэмжих, олон нийтэд дуу хоолойг нь хүргэх, урам зориг
            өгөх, салбарын хүйсийн тэнцвэрт байдлыг нэмэгдүүлэх зорилготой.
          </Typography>
        </Stack>
        {/* -------------------------------------Зорилго--------------------------------- */}
        <Stack sx={{ backgroundColor: "#F4F7FB", width: "100vw", pb: 10 }}>
          <Container>
            <Title title="Зорилго" />
            <Stack
              width={"100%"}
              direction="row"
              justifyContent={{ xs: "center", sm: "space-between" }}
              alignItems={{ xs: "default", sm: "center" }}
              flexWrap="wrap"
              mt={{ xs: 2, sm: 6 }}
              gap={2}
            >
              <Stack justifyContent={"center"} alignItems="center" gap={2}>
                <Box
                  sx={{
                    backgroundColor: "#EAEEF5",
                    width: "150px",
                    height: "150px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img height={80} width={80} src={Image1} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 300,
                    textAlign: "center",
                  }}
                >
                  Нээлттэй, олныг хамарсан <br /> хүрээлэл бий болгох
                </Typography>
              </Stack>
              <Stack justifyContent={"center"} alignItems="center" gap={2}>
                <Box
                  sx={{
                    backgroundColor: "#EAEEF5",
                    width: "150px",
                    height: "150px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img height={80} width={80} src={Image2} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 300,
                    textAlign: "center",
                  }}
                >
                  Бодит хэрэгцээт мэдээллээр <br /> хангах
                </Typography>
              </Stack>
              <Stack justifyContent={"center"} alignItems="center" gap={3}>
                <Box
                  sx={{
                    backgroundColor: "#EAEEF5",
                    width: "150px",
                    height: "150px",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img height={80} width={80} src={Image3} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 300,
                    textAlign: "center",
                  }}
                >
                  Үйл ажиллагаа арга хэмжээ <br />
                  зохион байгуулах
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Stack>
        {/* -------------------------------------Үйл ажиллагаа--------------------------------- */}
        <Stack mt={10} mb={10} width={"100%"}>
          <Typography fontSize={{ xs: "20px", sm: "31px" }}>
            Үйл ажиллагаа
          </Typography>
          <Stack
            flexDirection={"row"}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
            mt={10}
            width={"100%"}
          >
            {ActivityData.map((data) => (
              <Activity data={data} />
            ))}
          </Stack>
        </Stack>

        {/* -------------------------------------Та биднийг дагаарай--------------------------------- */}
        <Stack
          sx={{ backgroundColor: "#F4F7FB" }}
          width="100vw"
          alignItems={"center"}
        >
          <Stack padding={5}>
            <Container>
              <Typography
                fontSize={{ xs: "20px", sm: "31px" }}
                textAlign={"center"}
              >
                Та биднийг дагаарай
              </Typography>
              <Typography mt={"16px"} textAlign={{ xs: "center", sm: "start" }}>
                Биднийг дагаснаар Womentech Makers-тэй холбоотой шинэ
                мэдээлэлүүдийг авах болно
              </Typography>
              <Stack
                direction="row"
                mt={{ xs: "16px", sm: "64px" }}
                gap={"23.04px"}
                justifyContent="center"
              >
                <Link to={"https://www.facebook.com/wtmmongolia"}>
                  <Box
                    width={{ xs: 48, sm: 83 }}
                    height={{ xs: 48, sm: 83 }}
                    padding={{ xs: 0.6, sm: 1.5 }}
                    sx={{
                      borderRadius: "100%",
                      border: "0.84px solid #518FF5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FacebookIcon fill={"#518FF5"} />
                  </Box>
                </Link>
                <Link to={"https://discord.com/invite/qbCyxqPZ9k"}>
                  <Box
                    width={{ xs: 48, sm: 83 }}
                    height={{ xs: 48, sm: 83 }}
                    padding={{ xs: 0.7, sm: 1.5 }}
                    sx={{
                      borderRadius: "100%",
                      border: "0.84px solid #518FF5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DiscordIcon fill={"#518FF5"} />
                  </Box>
                </Link>
                <Link to={"https://www.instagram.com/wtmmongolia/"}>
                  <Box
                    width={{ xs: 48, sm: 83 }}
                    height={{ xs: 48, sm: 83 }}
                    padding={{ xs: 1.3, sm: 1.5 }}
                    sx={{
                      borderRadius: "100%",
                      border: "0.84px solid #518FF5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <InstagramIcon />
                  </Box>
                </Link>
              </Stack>
            </Container>
          </Stack>
        </Stack>

        {/* -------------------------------------Сүүлд болсон арга хэмжээ--------------------------------- */}
        <Stack width={"100%"} mt={{ xs: 3, sm: 10 }} mb={{ xs: 6, sm: 12 }}>
          <Typography fontSize={{ xs: "20px", sm: "31px" }}>
            Сүүлд болсон арга хэмжээ
          </Typography>
          <Stack
            width={"100%"}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            mt={{ xs: 3, sm: 8 }}
            gap={{ xs: 4, sm: 2 }}
          >
            {CardData.map((el) => (
              <CardItem data={el} />
            ))}
          </Stack>
        </Stack>

        {/* -------------------------------------Та дэлхийн Women Techmakers хөтөлбөрийн талаар илүү ихийг мэдэхийг хүсч байна уу?--------------------------------- */}
        <Stack
          sx={{
            backgroundColor: "#F4F7FB",
            paddingTop: "74px",
            paddingBottom: "74px",
          }}
          width="100vw"
        >
          <Container>
            <Stack
              width={"100%"}
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack gap={2}>
                <Typography
                  fontSize={{ xs: "20px", sm: "22px" }}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Та дэлхийн Women Techmakers хөтөлбөрийн талаар илүү ихийг
                  мэдэхийг хүсч байна уу?
                </Typography>
                <Typography
                  fontSize="13px"
                  display={{ xs: "none", sm: "flex" }}
                >
                  Google компанийн дэргэдэх технологийн салбарын эмэгтэйчүүдийг
                  дэмжих зорилготой Women Techmakers
                </Typography>
              </Stack>
              <Box mt={{ xs: "32px", sm: 0 }}>
                <Button
                  sx={{
                    backgroundColor: "#518FF5",
                    width: "183px",
                    height: "52px",
                  }}
                >
                  Дэлгэрэнгүй
                </Button>
              </Box>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </Container>
  );
};
