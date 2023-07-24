import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Navigate, useNavigate } from "react-router-dom";

interface ActivityProps {
  icon: any;
  title: string;
  link: string;
  href: string;
}

export const Activity = ({ data }: { data: ActivityProps }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        ...style.container,
        "&:hover": {
          cursor: "pointer",
          boxShadow: "4px 4px 8px #CCCCCC",
        },
      }}
      border={{ xs: "1px solid #D7DEEA", sm: "0.5px solid #CCCCCC" }}
      bgcolor={{ xs: "#F4F7FB", sm: "#fff" }}
      borderRadius={"10px"}
      height={{ sm: 348 }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={5}
      padding={{ xs: "10px", sm: 3 }}
    >
      <Box
        borderRadius={"50%"}
        overflow={"hidden"}
        height={{ xs: 60, sm: 200 }}
        width={{ xs: 60, sm: 200 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img src={data.icon} alt="picture" height={"100%"} />
      </Box>
      <Stack gap={2}>
        <Typography width={252} fontSize={20} fontWeight={500}>
          {data.title}
        </Typography>
        <Stack
          sx={style.href}
          direction="row"
          alignItems="center"
          onClick={() => navigate(data.href)}
        >
          <Typography> {data.link}</Typography> <ChevronRightIcon />
        </Stack>
      </Stack>
    </Stack>
  );
};

export const ActivityMobile = ({ data }: { data: ActivityProps }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        ...style.containerMobile,
        "&:hover": {
          cursor: "pointer",
          boxShadow: "0px 0px 10px gray",
        },
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={5}
      padding={3}
    >
      <Box>
        <img src={data.icon} alt="picture" width={60} />
      </Box>
      <Stack gap={2}>
        <Typography sx={{ fontSize: "20px", width: "205px" }}>
          {data.title}
        </Typography>
        <Stack
          sx={style.href}
          direction="row"
          alignItems="center"
          gap={1}
          onClick={() => navigate(data.href)}
        >
          <Typography> {data.link}</Typography> <ChevronRightIcon />
        </Stack>
      </Stack>
    </Stack>
  );
};

const style = {
  container: {
    transition: "border-color 0.3s, cursor 0.3s, box-shadow 0.3s", // Add transition for smooth hover effect
  },
  containerMobile: {
    border: "1px solid #D7DEEA",
    borderRadius: "10px",
    width: "95%",
    backgroundColor: "#F4F7FB",
    transition: "border-color 0.3s, cursor 0.3s, box-shadow 0.3s", // Add transition for smooth hover effect
  },
  href: {
    color: "#646E82",
    fontSize: "16px",
  },
};
