import { Box, Stack, Typography } from "@mui/material";
import { Answer } from "../components";
import Image from "../assets/image/question.png";
import React, { useEffect } from "react";

export const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      mt={{ xs: 6, sm: 18 }}
      mb={8}
    >
      <Box width={{ xs: "100%", sm: "50%" }}>
        <img width={"100%"} src={Image} alt="question" />
      </Box>
      <Box sx={{ ml: 8 }}>
        <Typography fontWeight={500} fontSize={39} sx={{ marginBottom: 5 }}>
          Түгээмэл асуулт хариулт
        </Typography>
        <Answer
          answer="“Google Techmakers” - ээс таньд тусгай 6 оронтой код имэйл-ээр өгөх бөгөөд түүнийг оруулан шалгана. "
          question=" Хэрхэн сертификатаа шалгах вэ?"
        />
        <Answer answer="helo" question="Хэрхэн сертификатаа шалгах вэ?" />
      </Box>
    </Stack>
  );
};
