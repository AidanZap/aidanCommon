import { useMediaQuery } from "@mui/material";

export default class MuiHooks {

    useBreakpointSize = () => {
        if (useMediaQuery((theme: any) => theme.breakpoints.down("sm")))
            return "xs";
        else if (useMediaQuery((theme: any) => theme.breakpoints.down("md")))
            return "sm";
        else if (useMediaQuery((theme: any) => theme.breakpoints.down("lg")))
            return "md";
        else if (useMediaQuery((theme: any) => theme.breakpoints.down("xl")))
            return "lg";
        else
            return "xl";
    }
}