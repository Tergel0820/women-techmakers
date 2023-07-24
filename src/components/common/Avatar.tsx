import { Box, Stack, Typography } from "@mui/material";
import { DiscordIcon, FacebookIcon, LinkedinIcon } from "assets";
import React from "react";
import { Link } from "react-router-dom";
interface AvatarType {
  image: string;
  name: string;
  role: string;
}

export const Avatar = ({ data }: { data: AvatarType }) => {
  const baseStyle: React.CSSProperties = {
    backgroundColor: "#000000b3",
    opacity: 0,
  };

  const hoverStyle: React.CSSProperties = {
    opacity: 1,
  };

  const mergedStyle = { ...baseStyle, ":hover": hoverStyle };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} gap={3}>
      <Box
        width={{ xs: 153, sm: 300 }}
        height={{ xs: 153, sm: 300 }}
        borderRadius={"50%"}
        overflow={"hidden"}
        position={"relative"}
      >
        <img width={"100%"} height={"100%"} src={data.image} />
        <Stack
          position={"absolute"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          style={{ transition: "0.3s opacity" }}
          sx={mergedStyle}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link
            to={"/team"}
            style={{
              width: 59,
              height: 59,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DiscordIcon fill={"white"} />
          </Link>
          <Link
            to={"/team"}
            style={{
              width: 59,
              height: 59,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FacebookIcon fill={"white"} />
          </Link>
          <Link
            to={"/team"}
            style={{
              width: 59,
              height: 59,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LinkedinIcon fill={"white"} />
          </Link>
        </Stack>
      </Box>
      <Stack alignItems={"center"} gap={1} height={{ xs: 84 }}>
        <Typography fontWeight={600}>{data.name}</Typography>
        <Typography width={{ xs: 153, sm: "100%" }} textAlign={"center"}>
          {data.role}
        </Typography>
      </Stack>
    </Stack>
  );
};
