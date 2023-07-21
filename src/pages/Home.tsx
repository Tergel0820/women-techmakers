import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import {
  AboutUs,
  Activity,
  ActivityMobile,
  Button,
  CardItem,
  Title,
} from "../components"
import background from "../assets/image/background.png"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import PublicIcon from "@mui/icons-material/Public"
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined"
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"
import activity1 from "../assets/image/activity1.png"
import activity2 from "../assets/image/activity2.png"
import activity3 from "../assets/image/activity3.png"
import activity4 from "../assets/image/activity4.png"
import { useTheme } from "@mui/material/styles"
import {
  CommunityIcon,
  DestributeIcon,
  CalendarIcon,
  FacebookIcon,
  DiscordIcon,
  IG,
} from "../assets"
import home from "../assets/image/home.png"
export const Home = () => {
  const AboutUsData = [
    {
      icon: <CalendarMonthIcon sx={{ color: "#FF6363", fontSize: "150px" }} />,
      text: "оноос хойш",
      number: "2021",
    },
    {
      icon: <PublicIcon sx={{ color: "#FAC543", fontSize: "150px" }} />,
      text: "IWD арга хэмжээ",
      number: "2+",
    },
    {
      icon: (
        <SupervisedUserCircleOutlinedIcon
          sx={{ color: "#2FC9BD", fontSize: "150px" }}
        />
      ),
      text: "Уулзалт, эвэнт",
      number: "20+",
    },
    {
      icon: (
        <PeopleAltOutlinedIcon sx={{ color: "#4D81BD", fontSize: "150px" }} />
      ),
      number: "500+",
      text: "Оролцогчид",
    },
  ]

  const ActivityData = [
    {
      icon: activity1,
      title: "7 хоног бүр онлайнаар болох үйл ажиллагаа",
      link: "Discord link",
      href: "Discord link",
    },
    {
      icon: activity2,
      title:
        "Сар бүрийн сонирхолтой зочинтой уулзалт, танилын хүрээгээ нэмэх боломж",
      link: "Event жагсаалт",
      href: "Event жагсаалт",
    },
    {
      icon: activity3,
      title:
        "Технологийн салбарт зам гаргаад явж буй эмэгтэйчүүдийн урам зориг өгөх түүхээс",
      link: "Postby article ",
      href: "Postby article ",
    },
    {
      icon: activity4,
      title: "IWD (International Women’s Day) арга хэмжээ",
      link: "IWD 2023 ",
      href: "IWD/2023 ",
    },
  ]

  const theme = useTheme()

  const isSmallScreen = useMediaQuery(() => theme.breakpoints.down("sm"))
  return (
    <Container>
      <Stack alignItems={"center"} gap={15}>
        <Stack alignItems={"center"} gap={3}>
          <Typography fontSize={"70px"}>Women Techmakers Mongolia</Typography>
          <Typography fontSize={"32px"} color="#EAEEF5" textAlign={"center"}>
            Хүн болгон технологи
            <br /> бүтээж чадна
          </Typography>
          {/* <Button /> */}
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
        </Stack>
        {/* -------------------------------------Бидний тухай--------------------------------- */}
        <Stack
          direction={"row"}
          justifyContent="space-between"
          width="100%"
          flexWrap="wrap"
        >
          <Title title="Бидний тухай" />
          <Typography>
            Google компанийн дэргэдэх технологийн салбарын <br />
            эмэгтэйчүүдийг дэмжих зорилготой Women Techmakers
            <br /> хөтөлбөрийг албан ёсоор Women Techmakers Mongolia <br />
            коммунитигийн хүрээнд нь Монголд 2021 оноос эхлэн
            <br /> хүргэж байна.
          </Typography>
        </Stack>

        <Stack
          width="100%"
          flexWrap={"wrap"}
          mt={10}
          direction={isSmallScreen ? "column" : "row"}
          justifyContent={isSmallScreen ? "center" : "space-between"}
        >
          {AboutUsData.map((data) => {
            return <AboutUs data={data} />
          })}
        </Stack>

        {/* -------------------------------------picture--------------------------------- */}
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
          width={"100%"}
          flexWrap="wrap"
        >
          <Box
            sx={{
              backgroundSize: "contain",
            }}
          >
            <img src={home} width="100%" />
          </Box>
          <Typography sx={{ width: "488px" }}>
            Бид технологийн салбарын болон салбарт сонирхолтой охид
            эмэгтэйчүүдийг дэмжих, олон нийтэд дуу хоолойг нь хүргэх, урам зориг
            өгөх, хүйсийн тэнцвэрт байдлыг нэмэгдүүлэх зорилготой.
          </Typography>
        </Stack>
        {/* -------------------------------------Зорилго--------------------------------- */}
        <Stack sx={{ backgroundColor: "#F4F7FB", width: "100vw", pb: 10 }}>
          <Container>
            <Title title="Зорилго" />
            <Stack
              direction="row"
              justifyContent={"space-between"}
              flexWrap="wrap"
            >
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
                  <CommunityIcon />
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
                  <DestributeIcon />
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
                  <CalendarIcon />
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
        <Stack>
          <Box>
            <Title title={" Үйл ажиллагаа"} />
          </Box>
          <Stack
            flexDirection={!isSmallScreen ? "row" : "column"}
            flexWrap="wrap"
            justifyContent="center"
            gap={5}
          >
            {ActivityData.map((data) =>
              !isSmallScreen ? (
                <Activity data={data} />
              ) : (
                <ActivityMobile data={data} />
              )
            )}
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
              <Box sx={{ textAlign: "center" }}>
                <Title title={"Та биднийг дагаарай"} />
              </Box>
              <Typography>
                Биднийг дагаснаар Womentech Makers-тэй холбоотой шинэ
                мэдээлэлүүдийг авах болно
              </Typography>
              <Stack
                direction="row"
                mt={"64px"}
                gap={"23.04px"}
                justifyContent="center"
              >
                <Box
                  sx={{
                    borderRadius: "100%",
                    border: "0.84px solid #518FF5",
                    padding: 2,
                  }}
                >
                  <FacebookIcon />
                </Box>
                <Box
                  sx={{
                    borderRadius: "100%",
                    border: "0.84px solid #518FF5",
                    padding: 2,
                  }}
                >
                  <IG />
                </Box>
                <Box
                  sx={{
                    borderRadius: "100%",
                    border: "0.84px solid #518FF5",
                    padding: 2,
                  }}
                >
                  <DiscordIcon />
                </Box>
              </Stack>
            </Container>
          </Stack>
        </Stack>

        {/* -------------------------------------Сүүлд болсон арга хэмжээ--------------------------------- */}
        <Stack>
          <Title title={"Сүүлд болсон арга хэмжээ"} />
          <Stack
            direction={"row"}
            justifyContent="space-between"
            gap={3}
            flexWrap="wrap"
          >
            <CardItem />
            <CardItem />
            <CardItem />
          </Stack>
        </Stack>

        {/* -------------------------------------Та дэлхийн Women Techmakers хөтөлбөрийн талаар илүү ихийг мэдэхийг хүсч байна уу?--------------------------------- */}
        <Stack
          sx={{ backgroundColor: "#F4F7FB", padding: "74px" }}
          width="100vw"
        >
          <Container>
            <Stack
              justifyContent="center"
              direction="row"
              gap={3}
              alignItems="center"
            >
              <Stack gap={1}>
                <Typography fontSize="22px">
                  Та дэлхийн Women Techmakers хөтөлбөрийн талаар илүү ихийг
                  мэдэхийг хүсч байна уу?
                </Typography>
                <Typography fontSize="13px">
                  Google компанийн дэргэдэх технологийн салбарын эмэгтэйчүүдийг
                  дэмжих зорилготой Women Techmakers
                </Typography>
              </Stack>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#518FF5",
                    maxWidth: "123px",
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
  )
}