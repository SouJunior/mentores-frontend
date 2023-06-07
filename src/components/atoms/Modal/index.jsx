import React from "react";
import { Dialog, Box } from "@mui/material";
import { ButtonClose } from "./style";
const ModalComponent = ({ open, onClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          boxShadow: "none",
          backgroundColor: "transparent",
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "8px 8px 0px 0px",
          // p: 4,
          background: "#d7d9d7",
          padding: "0px",
          paddingTop: "32px",
          boxShadow: "none",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
        <ButtonClose onClick={onClose}>X</ButtonClose>
      </Box>
    </Dialog>
  );
};

export default ModalComponent;
