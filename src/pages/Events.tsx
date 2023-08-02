import React, { useEffect } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { PaginationCard, Title } from "../components";
import Meeting10 from "../assets/image/meeting10.png";
import WeeklyMeeting9 from "../assets/image/weeklyMeeting9.png";
import WeeklyMeeting8 from "../assets/image/weeklyMeeting8.png";
import WeeklyMeeting7 from "../assets/image/weeklyMeeting7.png";
import WeeklyMeeting6 from "../assets/image/weeklyMeeting6.png";
import WeeklyMeeting5 from "../assets/image/weeklyMeeting5.png";
import WeeklyMeeting3 from "../assets/image/weeklyMeeting3.png";
import WeeklyMeeting2 from "../assets/image/weeklyMeeting2.png";
import WeeklyMeeting1 from "../assets/image/weeklyMeeting1.png";
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
      meeting: "Weekly_Meeting#10",
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
    {
      title: "Little abaout UX/UI",
      image: WeeklyMeeting6,
      meeting: "Weekly_Meeting#6",
      name: "duuuk#1704",
      location: "Our Discord channel",
      date: "2023 Jan 12, 19:00",
    },
    {
      title: "Game Tech",
      image: WeeklyMeeting5,
      meeting: "Weekly_Meeting#5",
      name: "Yesui#5728",
      location: "Our Discord channel",
      date: "2023 Jan 5, 19:00",
    },
    {
      title: "Dijital Nomad",
      image: WeeklyMeeting3,
      meeting: "Weekly_Meeting#3",
      name: "GDG Ulaanbaatar, WTM Mongolia",
      location: "Our Discord channel",
      date: "2022 Dec 1, 19:00",
    },
    {
      title: "Web developer Intro",
      image: WeeklyMeeting2,
      meeting: "Weekly_Meeting#2",
      name: "Zulaa#4221",
      location: "Our Discord channel",
      date: "2022 Nov 24, 19:00",
    },
    {
      title: "Why do we need to be here",
      image: WeeklyMeeting1,
      meeting: "Weekly_Meeting#1",
      name: "Namuun Togoobor#8584",
      location: "Our Discord channel",
      date: "2022 Nov 17, 19:00",
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
      meeting: "Online meeting",
      name: "WTM Mongolia",
      location: "Our Discord channel",
      date: "2022 Dec 29, 19:00",
    },
    {
      title: "Women Entrepreneur day",
      image: OtherEvent2,
      name: "Hub innivation center, ЦойлогсодZ",
      location: "Hub Innivation Center",
      date: "2022 Oct 26, 18:40",
    },
    {
      title: "Devfest 2022 Ulaanbaatar",
      image: OtherEvent3,
      name: "WTM Mongolia, GDG Ulaanbaatar",
      location: "Our Discord channel",
      date: "2022 Jan 26, 19:00",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <Stack alignItems={"center"}>
        {/* ----------------Болох гэж буй арга хэмжээ------------------- */}
        <Stack
          bgcolor={{ xs: "#fff", sm: "#F4F7FB" }}
          width="100vw"
          pb={6}
          pt={{ xs: 12, sm: 14 }}
        >
          <Container>
            <Stack mt={{ xs: 0, sm: "16px" }} gap={{ xs: "20px", sm: "48px" }}>
              <Title title="Болох гэж буй арга хэмжээ" />
              <PaginationCard data={IncomingEventsData} />
            </Stack>
          </Container>
        </Stack>

        {/* ----------------Бидний явуулсан арга хэмжээ------------------- */}
        <Stack width={"100%"} mt={"32px"} mb={"64px"}>
          <Title title="Бидний явуулсан арга хэмжээ" />
        </Stack>

        {/* ----------------7 хоног бүрийн уулзалт------------------- */}
        <Stack width={"100%"} mb={5}>
          <Title title="7 хоног бүрийн уулзалт" />
          <Typography mt={"16px"}>
            Манай Discord групп-д нэгдээд хүссэн сургалт уулзантандаа онлайнаар
            үнэгүй оролцох боломжтой.
          </Typography>
          <Stack mt={6}>
            <PaginationCard data={WeeklyMeetingsData} />
          </Stack>
        </Stack>

        {/* ----------------Сар бүрийн уулзалт------------------- */}
        <Stack sx={{ backgroundColor: "#F4F7FB" }} width="100vw" pb={5} pt={8}>
          <Container>
            <Title title="Сар бүрийн уулзалт" />
            <Typography
              width={{ xs: "100%", sm: "80%" }}
              fontSize={20}
              mt={"24px"}
            >
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
            <Stack mt={7}>
              <PaginationCard data={MonthlyMeetingsData} />
            </Stack>
          </Container>
        </Stack>

        {/* ----------------Бусад эвэнт------------------- */}
        <Stack
          width={"100%"}
          pt={"32px"}
          pb={5}
          gap={{ xs: "16px", sm: "48px" }}
        >
          <Title title="Бусад эвэнт" />
          <PaginationCard data={OtherEventsData} />
        </Stack>
      </Stack>
    </Container>
  );
};
