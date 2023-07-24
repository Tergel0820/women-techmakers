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
        maxWidth: "380px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={() => navigate(`/event/${data?.meeting || "questions"}`)}
    >
      <CardActionArea>
        <Box width={"100%"} height={221} overflow={"hidden"}>
          <CardMedia component="img" image={data.image} />
        </Box>
        <CardContent>
          <Typography sx={{ fontSize: "13px", color: "#8690A2" }}>
            {data.meeting}
          </Typography>
          <Typography color={"#518FF5"} fontSize={20} fontWeight={600}>
            “{data.title}”
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
