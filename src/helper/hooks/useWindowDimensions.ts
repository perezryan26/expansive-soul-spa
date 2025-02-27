import { useEffect, useState } from "react";
import { WindowSize } from "../Types";
import { MOBILE_WIDTH_DIMENSIONS } from "@/base/Constants";

export default function useWindowDimensions() {
    const [size, setSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const isMobile = size.width <= MOBILE_WIDTH_DIMENSIONS;

    return { size, isMobile }
}