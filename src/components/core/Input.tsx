import { Box, Typography } from "@mui/material";
import React from "react";

export const Input = ({
  title,
  placeholder,
  value,
  setValue,
  width = 438,
}: {
  title: string;
  placeholder: string;
  value: string;
  setValue: () => {};
  width: number;
}) => {
  const inputHandler = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Box width={width} display={"flex"} flexDirection={"column"} gap={"4px"}>
      <Typography>{title}</Typography>
      <input
        style={{
          width: width,
          height: 56,
          border: "none",
          backgroundColor: "#F4F7FB",
          padding: 16,
          outlineColor: "#518FF5",
          fontSize: 16,
        }}
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
      />
    </Box>
  );
};
