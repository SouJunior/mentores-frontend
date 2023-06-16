import { Box } from "@mui/material";
import React from "react";
const CardComponent = ({ children, height, width, backgroundColor }) => {
  const padrao = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "none",
    border: "none",
    padding: "0px",
  };
  return (
    <Box
      sx={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        ...padrao,
      }}
    >
      {children}
    </Box>
  );
};

export default CardComponent;
