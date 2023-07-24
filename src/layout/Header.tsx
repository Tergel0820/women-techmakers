import { Box, Container, Popover, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../assets";

export const Header = ({ theme }: { theme: string }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        document.body.style.textEmphasisColor = "#000";
      } else {
        document.body.style.textEmphasisColor = "#000";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIWDClick = (year: string) => {
    navigate(`/IWD/${year}`);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container
      maxWidth={false}
      style={{
        color: theme === "transparent" ? "#fff" : "#000",
        backgroundColor: theme,
        transitionDuration: "0s",
        width: "100%",
      }}
    >
      <Container>
        <Stack
          sx={{
            transitionDuration: "1s",
            backgroundColor: theme,
          }}
          pt={{ xs: 0, sm: 3 }}
          pb={{ xs: 0, sm: 3 }}
        >
          <Stack
            direction="row"
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <LogoHeader onClick={() => navigate("/")} />
            <Box sx={{ ...style.navbar }} display={{ xs: "none", sm: "flex" }}>
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
                onClick={() => navigate("/certificate")}
              >
                Certificate
              </Typography>
              {/* <Typography
                variant="body1"
                component="p"
                onClick={() => navigate("/conduct")}
              >
                Code of Conduct
              </Typography> */}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

const style = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    // transitionDuration: "1s",
    "& > p": {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      ml: 3,
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: 0,
        height: "2px",
        backgroundColor: "#518FF5",
        transition: "width 0.2s ease-out",
      },
      "&:hover": {
        "&::before": {
          width: " 100%",
        },
      },
    },
  },
};
