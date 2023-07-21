import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea, Stack } from "@mui/material"
import beerNight from "../../assets/image/beernight.png"
import { useNavigate } from "react-router-dom"

export const CardItem = ({ data }: { data?: any }) => {
  const navigate = useNavigate()
  return (
    <Card
      sx={{ maxWidth: "100%" }}
      onClick={() => navigate(`/${data?.name || "questions"}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={beerNight}
          alt="green iguana"
          height={210}
        />
        <CardContent>
          <Typography sx={{ fontSize: "13px", color: "#8690A2" }}>
            WTM meeting#3
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#518FF5" }}>
            “The Beer Night networking event”
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Beer Night Studio
          </Typography>
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Typography sx={{ fontSize: "10px", color: "#02C0A6" }}>
              Beer Night Studio
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#8690A2" }}>
              2023 Feb 9, 18:40
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
