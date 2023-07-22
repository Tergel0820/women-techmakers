import { Box, Container, Stack, Typography } from "@mui/material"
import { LogoDefault } from "../assets"
import React from "react"
import { Avatar, Title } from "../components"
import Hongorzul from "../assets/image/avatar1.png"
import zulaa from "../assets/image/zulaa.png"
import zaya from "../assets/image/zaya.png"
import hulan1 from "../assets/image/hulan1.png"
import hulan from "../assets/image/hulan.png"
import davaasuren from "../assets/image/davaasuren.png"

export const About = () => {
  const AboutData = [
    {
      image: Hongorzul,
      name: "Хонгорзул",
      role: "Machine Learning Engineer",
    },
    {
      image: zulaa,
      name: "Мөнхзул",
      role: "Software Engineer",
    },
    {
      image: hulan,
      name: "Хулан",
      role: "Human Resources ",
    },
    {
      image: zaya,
      name: "Түвшинзаяа",
      role: "UI/UX designer",
    },
    {
      image: davaasuren,
      name: "Даваасүрэн",
      role: "",
    },

    {
      image: hulan1,
      name: "Хулан",
      role: "",
    },
  ]
  return (
    <Container>
      <Stack alignItems={"center"}>
        <Stack
          sx={{ backgroundColor: "#F4F7FB" }}
          pt={10}
          pb={15}
          width="100vw"
        >
          <Container>
            <Box>
              <br />
              <br />
              <br />
              <br />
              <Typography fontSize={"39px"}>
                Бид хэн бэ? “Women Techmakers”
              </Typography>
            </Box>
            <Stack
              direction={"row"}
              width="100%"
              justifyContent={"space-between"}
              alignItems="center"
              mt={10}
            >
              <LogoDefault />
              <Typography fontSize="20px">
                Google компанийн дэргэдэх технологийн салбарын эмэгтэйчүүдийг
                <br /> дэмжих зорилготой Women Techmakers хөтөлбөрийг албан
                ёсоор
                <br /> Women Techmakers Mongolia коммунитигийн хүрээнд нь
                Монголд
                <br /> 2021 оноос эхлэн хүргэж байна. <br />
                Бид технологийн салбарын болон салбарт сонирхолтой охид
                <br />
                эмэгтэйчүүдийг дэмжих, дэлхий нийтэд дуу хоолойг нь хүргэх, урам
                <br /> зориг өгөх, хүйсийн тэнцвэрт байдлыг нэмэгдүүлэх
                зорилготой.
              </Typography>
            </Stack>
          </Container>
        </Stack>
        <Stack mt={10} mb={20}>
          <Title title="“Women Techmakers” төлөөлөгчид" />
          <Stack flexDirection={"row"} flexWrap="wrap" gap={10} mt={5}>
            {AboutData.map((data) => (
              <Avatar data={data} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
