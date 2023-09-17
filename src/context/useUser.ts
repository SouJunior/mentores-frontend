import { useContext } from "react";
import { UserContext } from "./userContext";

export default function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Ocorreu algum erro no provider!");
  }
  return context;
}
