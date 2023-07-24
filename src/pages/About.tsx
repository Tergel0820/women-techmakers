import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Avatar, Title } from "../components";
import Khongorzul from "../assets/image/khongorzul.jpeg";
import zulaa from "../assets/image/zulaa.png";
import zaya from "../assets/image/zaya.png";
import hulan1 from "../assets/image/hulan1.png";
import hulan from "../assets/image/hulan.png";
import davaasuren from "../assets/image/davaasuren.png";
import WomenTechmakers from "../assets/image/womenTechmakersLogo.png";

export const About = () => {
  const AboutData = [
    {
      image: Khongorzul,
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
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <Stack alignItems={"center"}>
        <Stack
          sx={{ backgroundColor: "#F4F7FB" }}
          pt={10}
          pb={{ xs: 0, sm: 15 }}
          width="100vw"
        >
          <Container>
            <Typography pt={{ xs: 3, sm: 12 }} fontSize={39} fontWeight={500}>
              Бид хэн бэ?
            </Typography>
            <Stack
              direction={"row"}
              width="100%"
              justifyContent={"space-between"}
              alignItems="center"
              mt={2}
            >
              <Box display={{ xs: "none", sm: "flex" }}>
                <img src={WomenTechmakers} height={357} />
              </Box>
              <Stack width={692}>
                <Typography
                  fontSize={20}
                  fontWeight={400}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Google компанийн дэргэдэх технологийн салбарын эмэгтэйчүүдийг
                  дэмжих зорилготой Women Techmakers хөтөлбөрийг Монголд 2021
                  оноос эхлэн Women Techmakers Mongolia коммунити албан ёсоор
                  хүргэж байна.
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={400}
                  textAlign={{ xs: "center", sm: "start" }}
                >
                  Бид технологийн салбарын болон салбарт сонирхолтой охид
                  эмэгтэйчүүдийг дэмжих, дэлхий нийтэд дуу хоолойг нь хүргэх,
                  урам зориг өгөх, хүйсийн тэнцвэрт байдлыг нэмэгдүүлэх
                  зорилготой.
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Stack>
        <Stack mt={{ xs: 2, sm: 8 }} mb={{ xs: 8, sm: 20 }}>
          <Title title="“Women Techmakers” төлөөлөгчид" />
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap="wrap"
            gap={{ xs: 3, sm: 8 }}
            mt={5}
          >
            {AboutData.map((data) => (
              <Avatar data={data} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
