import { Box, Stack, Typography } from "@mui/material";
import { Answer } from "../components";
import Image from "../assets/image/question.png";

export const FAQ = () => {
  return (
    <Stack direction={"row"} alignItems="center" mt={5} justifyContent="center">
      <Box>
        <img src={Image} alt="question" />
      </Box>
      <Box sx={{ ml: 8 }}>
        <Typography fontWeight={500} fontSize={39} sx={{ marginBottom: 5 }}>
          Түгээмэл асуулт хариулт
        </Typography>
        <Answer
          answer="“Google Techmakers” - ээс таньд тусгай 6 оронтой код имэйл-ээр өгөх бөгөөд түүнийг оруулан шалгана. "
          question=" Хэрхэн сертификатаа шалгах вэ?"
        />
        <Answer answer="helo" question="hi" />
        <Answer answer="helo" question="hi" />
        <Answer answer="helo" question="hi" />
        <Answer answer="helo" question="hi" />
        <Answer answer="helo" question="hi" />
      </Box>
    </Stack>
  );
};
