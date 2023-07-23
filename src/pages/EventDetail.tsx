import { Box, Container, Stack, Typography } from "@mui/material";
import { Album, Button, CardItem, TabItem, Title } from "../components";
import React from "react";
import hackethon from "../assets/image/hackathon.png";
export const EventDetail = () => {
  const panelComponent = [
    <Box>panel1</Box>,
    <Box>panel2</Box>,
    <Box>panel3</Box>,
    <Box>panel4</Box>,
  ];
  return (
    <Container>
      <Stack alignItems={"center"} gap={7}>
        <Stack sx={{ backgroundColor: "#F4F7FB" }} width="100vw">
          <Container>
            <Title title="Бидний явуулсан арга хэмжээ" />
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-between"
              width="100%"
              pb={10}
              pt={10}
            >
              <Stack gap={5}>
                <Typography>
                  IWD буюу Олон улсын эмэгтэйчүүдийн эрхийг <br />
                  хамгаалах өдрийн хүрээнд жил бүр, дэлхий <br />
                  дахинаа уламжлал болгон явуулдаг Women <br />
                  Techmakers хөтөлбөрийн томоохон үйл
                  <br /> ажиллагаа энэ жил монголд "Women's Online
                  <br />
                  Safety" сэдэвт хакатон байдлаар амжилттай болж <br />
                  өнгөрлөө.
                </Typography>
                <Button sx={{ width: "170px", backgroundColor: "#518FF5" }}>
                  Дэлгэрэнгүй
                </Button>
              </Stack>

              <img alt="hackothen" src={hackethon} />
            </Stack>
          </Container>
        </Stack>

        <Stack width="100%">
          <Title title="Хаана, Хэзээ" />
          <Stack direction={"row"} justifyContent="space-between" mt={5}>
            <Box />
            <Typography fontSize="25px">Hub Innovation Center</Typography>
            <Typography fontSize="25px">3 сарын (8) - 3 сарын (12)</Typography>
            <Typography fontSize="25px">99892055</Typography>
          </Stack>
        </Stack>

        <Stack width="100%">
          <TabItem panel={panelComponent} />
        </Stack>

        <Stack
          sx={{ pb: 10, backgroundColor: "#F4F7FB", pt: 10 }}
          width={"100vw"}
          alignItems="center"
        >
          <Container>
            <Stack alignItems="center" gap={10}>
              <Stack
                direction="row"
                width={"100%"}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  sx={{
                    backgroundColor: "red",
                    width: "488px",
                    height: "468px",
                  }}
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
  );
};
