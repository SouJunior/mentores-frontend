import { Box } from "@mui/material";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  height: number;
  width?: number;
  backgroundColor?: string;
  justifyContent:
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "center"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
}

export const Card = ({
  children,
  height,
  width,
  backgroundColor,
  justifyContent,
}: CardProps) => {
  const propsDefault = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    padding: "0px",
    marginBottom: "5px",
    border: "1px solid #D7D9D7",
  };

  return (
    <Box
      sx={{
        height: height,
        ...(width && { width: width }),
        backgroundColor: backgroundColor || "transparent",
        justifyContent: justifyContent,
        ...propsDefault,
      }}
    >
      {children}
    </Box>
  );
};
