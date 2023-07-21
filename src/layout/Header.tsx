import { Box, Container, Grid, Popover, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LogoHeader } from "../assets"

export const Header = ({ offset }: { offset: number }) => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.textEmphasisColor =
        window.pageYOffset > 100 ? "#0d2a16" : "#ffffff"
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleIWDClick = (year: string) => {
    navigate(`/IWD/${year}`)
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <Container>
      <Box
        sx={{
          transitionDuration: "1s",
          backgroundColor: offset > 100 ? "white" : "transparent",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <LogoHeader />
          </Grid>
          <Grid item>
            <Box sx={{ ...style.navbar }}>
              <Typography
                variant="body1"
                component="p"
                onClick={() => navigate("/")}
              >
                Home
              </Typography>
              <Typography
                variant="body1"
                component="p"
                onClick={(event: any) => setAnchorEl(event.currentTarget)}
              >
                IWD
              </Typography>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography
                  sx={{ p: 2, cursor: "pointer" }}
                  onClick={() => handleIWDClick("2023")}
                >
                  IWD 2023
                </Typography>
                <Typography
                  sx={{ p: 2, cursor: "pointer" }}
                  onClick={() => handleIWDClick("2022")}
                >
                  IWD 2022
                </Typography>
              </Popover>
              <Typography
                variant="body1"
                component="p"
                onClick={() => navigate("/event")}
              >
                Event
              </Typography>
              <Typography
                variant="body1"
                component="p"
                onClick={() => navigate("/team")}
              >
                Team
              </Typography>
              <Typography
                variant="body1"
                component="p"
                onClick={() => navigate("/about")}
              >
                Certificate
              </Typography>
              <Typography
                variant="body1"
                component="p"
                onClick={() => navigate("/conduct")}
              >
                Code of Conduct
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const style = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    transitionDuration: "1s",
    "& > p": {
      cursor: "pointer",
      ml: 3,
      "&:hover": {
        textDecoration: "underline",
        textDecorationColor: "#518FF5",
        textDecorationThickness: "2px",
      },
    },
  },
}
