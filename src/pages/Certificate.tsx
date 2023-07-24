import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Input } from "components";
import { InformationIcon } from "assets";

export const Certificate = () => {
  const [idInput, setIdInput] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <Stack pt={{ xs: 12, sm: 22 }}>
        <Stack width={"100%"}>
          <Box
            display={{ xs: "flex", sm: "none" }}
            height={11}
            width={34}
            bgcolor={"#518FF5"}
            borderRadius={6}
          ></Box>
          <Typography fontSize={{ xs: 25, sm: 31 }} fontWeight={500}>
            Сертификат шалгах
          </Typography>
        </Stack>
      </Stack>
      <Stack display={"flex"} alignItems={"center"} mt={{ xs: 4, sm: 12 }}>
        <Typography fontSize={25}>
          Та өөрийн  ID-гаа оруулан шалгана уу.
        </Typography>
        <Stack width={{ xs: "100%", sm: 438 }} gap={3} mb={8}>
          <Box mt={{ xs: "16px", sm: 4 }}>
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
