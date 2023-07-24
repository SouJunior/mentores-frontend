import { Box, Dialog } from "@mui/material";
import { ReactNode } from "react";
import { ButtonClose } from "./style";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  height: number;
  width?: number;
  showBtn?: boolean;
  bgColor?: string;
}

export const Modal = ({
  open,
  onClose,
  children,
  height,
  width,
  showBtn = false,
  bgColor = "#d7d9d7",
}: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{
        style: {
          boxShadow: "none",
          backgroundColor: "transparent",
          position: "absolute",
          zIndex: "999999",
          overflow: "hidden",
          borderRadius: "8px",
          maxHeight: height + "px",
          ...(width && { maxWidth: width + "px" }),
        },
      }}
    >
      <Box
        sx={{
          borderRadius: "8px 8px 0px 0px",
          background: bgColor,
          padding: "0px",
          paddingTop: "32px",
          boxShadow: "none",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxHeight: height + "px",
          ...(width && { maxWidth: width + "px" }),
        }}
      >
        {children}
        <ButtonClose showBtn={showBtn} onClick={onClose}>
          X
        </ButtonClose>
      </Box>
    </Dialog>
  );
};
