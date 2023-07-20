import { Box } from "@mui/material";
import React from "react";
const CardComponent = ({ children, height, width, backgroundColor, justifyContent }) => {
  const padrao = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    border: "none",
    padding: "0px",
    marginLeft: "30px",
    border: "1px solid #D7D9D7",
    marginTop: "20px",
    marginBottom: "15px"
  };
  return (
    <Box
      sx={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        justifyContent: justifyContent,
        ...padrao,
      }}
    >
      {children}
    </Box>
  );
};

export default CardComponent;
