import { Box } from "@mui/material";
import React from "react";
const CardComponent = ({ children, height, width, backgroundColor }) => {
  const padrao = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    border: "none",
    padding: "10px",
    marginLeft: "40px",
    border: "1px solid #D7D9D7",
    marginTop: "20px"
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
