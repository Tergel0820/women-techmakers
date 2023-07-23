import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { CardItem, Title } from "../components";
import Meeting10 from "../assets/image/meeting10.png";
import WeeklyMeeting9 from "../assets/image/weeklyMeeting9.png";
import WeeklyMeeting8 from "../assets/image/weeklyMeeting8.png";
import WeeklyMeeting7 from "../assets/image/weeklyMeeting7.png";
import Card1 from "../assets/image/card1.png";
import Card2 from "../assets/image/card2.png";
import Card3 from "../assets/image/card3.png";
import OtherEvent1 from "../assets/image/otherEvent1.png";
import OtherEvent2 from "../assets/image/otherEvent2.png";
import OtherEvent3 from "../assets/image/otherEvent3.png";
import { Link } from "react-router-dom";

export const Events = () => {
  const IncomingEventsData = [
    {
      title: "Meeting #10",
      image: Meeting10,
      name: "Namuun Togoobor#8584",
      location: "By our Discord channel",
      date: "2023, march, 19:00",
    },
  ];
  const WeeklyMeetingsData = [
    {
      title: "Монгол залуусын дэлхийд өрсөлдөх боломж",
      image: WeeklyMeeting9,
      meeting: "Weekly_Meeting#9",
      name: " Г.Алтангэрэл",
      location: "Our Discord channel",
      date: "2023, march, 19:00",
    },
    {
      title: "Өөртэйгөө ажиллах боломж",
      image: WeeklyMeeting8,
      meeting: "Weekly_Meeting#8",
      name: "Б.Энхтуяа",
      location: "Our Discord channel",
      date: "2023, march, 19:00",
    },
    {
      title: "What's up",
      image: WeeklyMeeting7,
      meeting: "Weekly_Meeting#7",
      name: "Namuun Togoobor#8584",
      location: "Our Discord channel",
      date: "2023, march, 19:00",
    },
  ];
  const MonthlyMeetingsData = [
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
  const OtherEventsData = [
    {
      title: "Happy New Year",
      image: OtherEvent1,
      meeting: "WTM meeting#1",
      name: "А.Хулангоо & Б.Манд",
      location: "Bilig Vegan Bristro&Dining restaurant",
      date: "2023 Sep 14, 17:00",
    },
    {
      title: "Women Entrepreneur day",
      image: OtherEvent2,
      meeting: "WTM meeting#1",
      name: "А.Хулангоо & Б.Манд",
      location: "Bilig Vegan Bristro&Dining restaurant",
      date: "2023 Sep 14, 17:00",
    },
    {
      title: "Women in startup",
      image: OtherEvent3,
      meeting: "WTM meeting#1",
      name: "А.Хулангоо & Б.Манд",
      location: "Bilig Vegan Bristro&Dining restaurant",
      date: "2023 Sep 14, 17:00",
    },
  ];
  return (
    <Container>
      <Stack alignItems={"center"}>
        {/* ----------------Болох гэж буй арга хэмжээ------------------- */}
        <Stack sx={{ backgroundColor: "#F4F7FB" }} width="100vw" pb={5} pt={12}>
          <Container>
            <Title title="Болох гэж буй арга хэмжээ" />
            <Stack flexWrap="wrap" direction="row">
              {IncomingEventsData.map((el) => (
                <CardItem data={el} />
              ))}
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
          >
            {WeeklyMeetingsData.map((el) => (
              <CardItem data={el} />
            ))}
          </Stack>

          {/* ----------------Carousel------------------- */}
        </Stack>

        {/* ----------------Сар бүрийн уулзалт------------------- */}
        <Stack sx={{ backgroundColor: "#F4F7FB" }} width="100vw" pb={5} mt={10}>
          <Container>
            <Title title="Сар бүрийн уулзалт" />
            <Typography fontSize={20}>
              Технологийн салбар дахь сонирхолтой зочны түүх, туршлагаас сонсож,
              мөн өөрийн хүрээллээ тэлэхийг хүсвэл сар бүр зохион байгуулагдах
              уулзалтанд хүрэлцэн ирэхийг урьж байна. Үйл ажиллагааны мэдээллийг
              коммунитигийн{" "}
              <Link
                style={{ textDecoration: "none", color: "#518FF5" }}
                to={"discord.com"}
              >
                Discord
              </Link>{" "}
              сервер болон{" "}
              <Link
                style={{ textDecoration: "none", color: "#518FF5" }}
                to={"facebook.com"}
              >
                Facebook
              </Link>{" "}
              хуудсуудаас цаг алдалгүй аваарай.
            </Typography>
            <Stack direction={"row"} mt={7} gap={2}>
              {MonthlyMeetingsData.map((el) => (
                <CardItem data={el} />
              ))}
            </Stack>
          </Container>
        </Stack>

        {/* ----------------Бусад эвэнт------------------- */}
        <Stack width={"100%"} mb={10}>
          <Title title="Бусад эвэнт" />

          <Stack direction={"row"} gap={2}>
            {OtherEventsData.map((el) => (
              <CardItem data={el} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
