import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface MarqueeRolagemProps {
  children: ReactNode;
  pauseOnHover: boolean;
  speed: number;
}

export function MarqueeRolagem({
  children,
  pauseOnHover,
  speed,
}: MarqueeRolagemProps) {
  return (
    <Marquee pauseOnHover={pauseOnHover} speed={speed}>
      {children}
    </Marquee>
  );
}
