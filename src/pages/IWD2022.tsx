import { Box, Container, Stack, Typography } from "@mui/material"
import { Album, Button, CardItem, Title } from "../components"
import React from "react"
import devsummit from "../assets/image/devsummit.png"
export const IWD2022 = () => {
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
              <Typography fontSize="20px" fontWeight={300}>
                Дэлхийн 100 гаруй оронд үйл ажиллагаагаа явуулдаг <br />
                Women Techmakers, Олон улсын эмэгтэйчүүдийн эрхийг <br />
                хамгаалах өдөртэй зэрэгцэн International Women's Day (IWD)
                <br /> өдрийг уламжлал болгон зохион байгуулж, технологи дахь
                <br /> болон технологид сонирхолтой эмэгтэйчүүдийнхээ ололт
                <br /> амжилт, алдаа оноо, туршлагыг хуваалцан өргөнөөр
                <br /> тэмдэглэн өнгөрүүлдэг билээ.
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
              Монголд анх удаа IWD22 арга хэмжээ <br />
              "Progress Not Perfection" уриан дор <br />
              DevSummit2022 технологийн арга <br />
              хэмжээтэй хамтран зохион
              <br />
              байгуулагдаж байна
            </Typography>
            <Button sx={{ width: "170px", backgroundColor: "#518FF5" }}>
              Дэлгэрэнгүй
            </Button>
          </Stack>
          <img alt="devsummit" src={devsummit} />
        </Stack>

        <Stack sx={{ backgroundColor: "#F4F7FB", pb: 8 }} width={"100vw"}>
          <Container>
            <Title title="Холбоотой зургууд" />
            <Album />
          </Container>
        </Stack>

        <Stack sx={{ mb: 10 }} width={"100%"}>
          <Title title="Сүүлд болсон арга хэмжээ" />
          <Stack
            direction="row"
            flexWrap={"wrap"}
            justifyContent="space-between"
          >
            <CardItem />
            <CardItem />
            <CardItem />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
