import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LocationIcon } from "assets";

export const CardItem = ({ data }: { data?: any }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: window.innerWidth > 500 ? "380px" : "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => navigate(`/event/${data?.meeting || "questions"}`)}
    >
      <CardActionArea>
        <Box
          height={191}
          width={"100%"}
          overflow={"hidden"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CardMedia
            component="img"
            image={data.image}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
        </Box>
        <CardContent
          style={{ margin: 6, padding: 0, marginLeft: 16, marginRight: 16 }}
        >
          <Box height={"18px"}>
            <Typography
              sx={{ fontSize: "13px", color: "#8690A2" }}
              lineHeight={"140%"}
            >
              {data.meeting}
            </Typography>
          </Box>
          <Typography
            color={"#518FF5"}
            fontSize={20}
            fontWeight={600}
            lineHeight={"150%"}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
          >
            “{data.title}”
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            lineHeight={"140%"}
            mt={"12px"}
            mb={"12px"}
          >
            {data.name}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{
                fontSize: "10px",
                color: "#02C0A6",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <LocationIcon />
              {data.location}
            </Typography>
            <Typography
              sx={{ fontSize: "10px", color: "var(--gray-60, #8690A2)" }}
            >
              {data.date}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
