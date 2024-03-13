import { useContext, useState, useEffect } from "react";
import {Stack, useTheme, Chip} from "@mui/material";
import { interviewContext } from "../interviewContext";
import useMediaQuery from '@mui/material/useMediaQuery';

const Chips = () => {
    const { setInterviewLevel } = useContext(interviewContext);
    const [selectedChip, setSelectedChip] = useState("Junior");
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        setInterviewLevel(selectedChip);
    }, [selectedChip])

    return(
        <Stack direction="row" sx={{width: isMedium ? '80%' : "50%", flexGrow: 1}} justifyContent="space-around" alignItems="center">
            <Chip label="Junior" onClick={() => {setSelectedChip("Junior")}} sx={{width: "25%", backgroundColor: selectedChip === "Junior" ? theme.palette.primary.dark : theme.palette.common.white, color: selectedChip === "Junior" ? theme.palette.common.white : theme.palette.common.black}}></Chip>
            <Chip label="Senior" onClick={() => {setSelectedChip("Senior")}} sx={{width: "25%", backgroundColor: selectedChip === "Senior" ? theme.palette.primary.dark : theme.palette.common.white, color: selectedChip === "Senior" ? theme.palette.common.white : theme.palette.common.black}}></Chip>
        </Stack>

    )
}

export {Chips};
