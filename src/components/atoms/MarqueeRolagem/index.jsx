import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeRolagem({children , pauseOnHover , speed}) {
    return (
        <Marquee
            pauseOnHover={pauseOnHover}
            speed={speed}
            >
            {children}
        </Marquee>
    )
}
