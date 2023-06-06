import React from "react";
import { Dialog, Box } from "@mui/material";
import { ButtonClose } from "./style";
const ModalComponent = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box
        sx={{
          borderRadius: 8,
          p: 4,
        }}
      >
        {children}
        <ButtonClose onClick={onClose}>X</ButtonClose>
      </Box>
    </Dialog>
  );
};

export default ModalComponent;
