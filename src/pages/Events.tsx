import React from "react"
import { Box, Container, Stack, Typography } from "@mui/material"
import { CardItem, Title } from "../components"

export const Events = () => {
  return (
    <Container>
      <Stack alignItems={"center"}>
        {/* ----------------Болох гэж буй арга хэмжээ------------------- */}
        <Stack sx={{ backgroundColor: "#F4F7FB" }} width="100vw" pb={5}>
          <Container>
            <Title title="Болох гэж буй арга хэмжээ" />
            <Stack flexWrap="wrap" direction="row">
              <Box width="365px">
                <CardItem />
              </Box>
            </Stack>
          </Container>
        </Stack>

        {/* ----------------Бидний явуулсан арга хэмжээ------------------- */}
        <Stack width={"100%"}>
          <Title title="Бидний явуулсан арга хэмжээ" />
        </Stack>

        {/* ----------------7 хоног бүрийн уулзалт------------------- */}
        <Stack width={"100%"}>
          <Title title="7 хоног бүрийн уулзалт" />
          <Typography>
            Манай Discord групп-д нэгдээд хүссэн сургалт уулзантандаа онлайнаар
            үнэгүй оролцох боломжтой.
          </Typography>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            mt={5}
            gap={2}
            flexWrap="wrap"
          >
            <CardItem />
            <CardItem />
            <CardItem />
          </Stack>

          {/* ----------------Carousel------------------- */}
        </Stack>

        {/* ----------------Сар бүрийн уулзалт------------------- */}
        <Stack sx={{ backgroundColor: "#F4F7FB" }} width="100vw" pb={5} mt={10}>
          <Container>
            <Title title="Сар бүрийн уулзалт" />
            <Typography>
              Манай WTM Mongolia-ынхан сар бүр коммунитигийн гишүүдтэйгээ
              биечлэн уулзаж, туршлагтай expert-үүдтэй уулзаж хамтдаа сурсан
              мэдсэнээ хуваалцдаг билээ. Энэ талаарх мэдээллийг та манай
              Facebook хуудас болон Discord-д нэгдсэнээр цаг алдалгүй авах
              болно.
            </Typography>
            <Stack direction={"row"} mt={7}>
              <CardItem />
            </Stack>
          </Container>
        </Stack>

        {/* ----------------Бусад эвэнт------------------- */}
        <Stack width={"100%"} mb={10}>
          <Title title="Бусад эвэнт" />

          <Stack direction={"row"}>
            <CardItem />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
