import { Header } from "@/components/molecules/Header";
import { ReactNode, useContext } from "react";
import { ContainerLayoyt } from "./styled";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <ContainerLayoyt>
        <Header />
      </ContainerLayoyt>
      {children}
    </>
  );
};
