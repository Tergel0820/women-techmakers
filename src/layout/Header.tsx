import { Box, Container, Popover, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoHeader, MenuIcon } from "../assets";
import MobileLogo from "../assets/image/mobileLogo.png";
import { Close } from "@mui/icons-material";

export const Header = ({ theme }: { theme: string }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [menu, setMenu] = useState<boolean>(false);

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
        transitionDuration: "0.2s",
        width: "100%",
      }}
    >
      <Container>
        <Stack pt={{ xs: 0, sm: 3 }} pb={{ xs: 0, sm: 3 }}>
          <Stack
            direction="row"
            width={"100%"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            {window.innerWidth > 500 ? (
              <Box
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Link to={"/"}>
                  <LogoHeader />
                </Link>
              </Box>
            ) : (
              <Box
                height={62}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Link to={"/"} style={{ height: "100%" }}>
                  <img height={"100%"} src={MobileLogo} />
                </Link>
              </Box>
            )}
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
            <Box
              display={{ xs: "flex", sm: "none" }}
              onClick={() => setMenu(true)}
            >
              <MenuIcon />
            </Box>
            <Stack
              direction={"column"}
              height={"100vh"}
              width={280}
              bgcolor={"#fff"}
              position={"fixed"}
              top={0}
              right={menu ? 0 : -280}
              padding={"16px"}
              style={{ transition: "0.2s right" }}
              gap={3}
              pt={2}
            >
              <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Box onClick={() => setMenu(false)}>
                  <Close />
                </Box>
              </Stack>
              <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Link
                  to={"/"}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMenu(false)}
                >
                  <Typography fontSize={20} color={"#000"}>
                    Home
                  </Typography>
                </Link>
              </Stack>
              <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Link
                  to={"/IWD/2022"}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMenu(false)}
                >
                  <Typography fontSize={20} color={"#000"}>
                    IWD 2022
                  </Typography>
                </Link>
              </Stack>
              <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Link
                  to={"/IWD/2023"}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMenu(false)}
                >
                  <Typography fontSize={20} color={"#000"}>
                    IWD 2023
                  </Typography>
                </Link>
              </Stack>
              <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Link
                  to={"/event"}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMenu(false)}
                >
                  <Typography fontSize={20} color={"#000"}>
                    Event
                  </Typography>
                </Link>
              </Stack>
              <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Link
                  to={"/team"}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMenu(false)}
                >
                  <Typography fontSize={20} color={"#000"}>
                    Team
                  </Typography>
                </Link>
              </Stack>
              <Stack
                width={"100%"}
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Link
                  to={"/certificate"}
                  style={{ textDecoration: "none" }}
                  onClick={() => setMenu(false)}
                >
                  <Typography fontSize={20} color={"#000"}>
                    Certificate
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

const style = {
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    transitionDuration: "0.2s",
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
          width: "100%",
        },
      },
    },
  },
};
