import { Stack, Typography } from "@mui/material";
import React from "react";
import "../styles/loading.css";

export const Loading = () => {
  return (
    <Stack
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 2,
        backgroundColor: "#fff",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
    >
      <Stack
        width={"132px"}
        height={"78px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <div
          className="loading-bar"
          style={{ backgroundColor: "#80C1F1" }}
        ></div>
        <div
          className="loading-bar"
          style={{ backgroundColor: "#80C1F1", animationDelay: "0.4s" }}
        ></div>
        <div
          className="loading-bar"
          style={{ backgroundColor: "#80C1F1", animationDelay: "0.8s" }}
        ></div>
        <div
          className="loading-bar"
          style={{ backgroundColor: "#80C1F1", animationDelay: "1.2s" }}
        ></div>
        <div
          className="loading-bar"
          style={{ backgroundColor: "#80C1F1", animationDelay: "1.6s" }}
        ></div>
        <div
          className="loading-bar"
          style={{ backgroundColor: "#80C1F1", animationDelay: "2s" }}
        ></div>
      </Stack>
      <Typography>Түр хүлээнэ үү...</Typography>
    </Stack>
  );
};
