import { Box, Typography } from "@mui/material";
import React from "react";

interface ButtonProp {
  variant?: "primary" | "secondary" | undefined;
  children: React.ReactNode;
  hover?: string;
  disabled?: boolean;
  sx?: React.CSSProperties;
  onClick?: any;
  width: any;
}

export const Button = ({
  variant = "primary",
  children,
  hover = "#0748B4",
  disabled,
  sx,
  onClick,
  width,
}: ButtonProp) => {
  const baseStyle: React.CSSProperties = {
    border: "1px solid #518FF5",
    borderColor: disabled ? "#B7BECD" : "518FF5",
    color: variant === "primary" ? (disabled ? "#EAEEF5" : "white") : "#518FF5",
    backgroundColor:
      variant === "primary" ? (disabled ? "#B7BECD" : "#518FF5") : "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: width ? width : "260px",
    borderRadius: "4px",
    cursor: disabled ? "default" : "pointer",
    pointerEvents: disabled ? "none" : "auto",
    opacity: disabled ? 0.5 : 1,
    transition: "0.2s color, 0.2s background, 0.2s border",
    ...sx,
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: variant === "primary" ? "#0748B4" : "#C1D7FC",
    color: variant === "primary" ? "white" : "#007BFF",
    borderColor: variant === "primary" ? "#0748B4" : "#C1D7FC",
  };

  const mergedStyle = disabled
    ? baseStyle
    : { ...baseStyle, ":hover": hoverStyle };

  return (
    <Box padding="10px 30px " sx={mergedStyle} onClick={onClick}>
      <Typography>{children}</Typography>
    </Box>
  );
};
