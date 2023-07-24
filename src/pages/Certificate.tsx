import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button, Input } from "components";
import { InformationIcon } from "assets";

export const Certificate = () => {
  const [idInput, setIdInput] = useState("");

  return (
    <Container>
      <Stack pt={22}>
        <Typography fontSize={31} fontWeight={500}>
          Сертификат шалгах
        </Typography>
      </Stack>
      <Stack display={"flex"} alignItems={"center"} mt={12}>
        <Typography fontSize={25}>
          Та өөрийн  ID-гаа оруулан шалгана уу.
        </Typography>
        <Stack width={438} gap={3} mb={8}>
          <Box mt={4}>
            <Input
              title={"ID дугаараа оруулна уу"}
              placeholder={"ID дугаар"}
              value={idInput}
              setValue={setIdInput}
            />
          </Box>
          <Button disabled={idInput === "" ? true : false} width={"100%"}>
            Шалгах
          </Button>
          <Stack
            style={{ cursor: "pointer" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={1}
            mt={1}
            height={24}
          >
            <InformationIcon />
            <Typography
              color={"#646E82"}
              fontWeight={400}
              fontSize={16}
              style={{ textDecoration: "underline" }}
            >
              Тусламж
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
