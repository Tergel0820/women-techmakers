import { Box, Container, Popover, Stack, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LogoHeader } from "../assets"

export const Header = ({ offset } : { offset: number }) => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        document.body.style.textEmphasisColor = "#000000";
      } else {
        document.body.style.textEmphasisColor = "#000000";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <Container style={{
      color: offset > 100 ? "#000000" : "#ffffff",
      backgroundColor: offset > 100 ? "transparent" : "transparent",
      transitionDuration: "0s",
      position: "fixed",
      left: "50%",
      transform: "translate(-50%)",
      zIndex: "100",
    }}>
      <Stack
        sx={{
          transitionDuration: "1s",
          backgroundColor: offset > 100 ? "white" : "transparent",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <Stack
          direction="row"
          width={"100%"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <LogoHeader />
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
        </Stack>
      </Stack>
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
