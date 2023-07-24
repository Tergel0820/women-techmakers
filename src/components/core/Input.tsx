import { Box, Typography } from "@mui/material";
import React from "react";

export const Input = ({
  title,
  placeholder,
  value,
  setValue,
}: {
  title: string;
  placeholder: string;
  value: string;
  setValue: () => {};
}) => {
  const inputHandler = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"4px"}>
      <Typography>{title}</Typography>
      <input
        style={{
          width: "100%",
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
