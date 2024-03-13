import { useContext } from "react";
import {useTheme} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { interviewContext } from "../interviewContext";
import useMediaQuery from '@mui/material/useMediaQuery';


const Dropdown = () => {
    const { interviewJob, setInterviewJob } = useContext(interviewContext);
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    const handleChangeJob = (event: SelectChangeEvent) => {
        setInterviewJob(event.target.value as string);
    }
    return(
            <FormControl sx={{width: isMedium ? '80%' : "50%"}}>
                <Select labelId="jobInput" notched={false} label="Job Title" id="jobSelector" value={interviewJob} onChange={handleChangeJob} sx={{backgroundColor: theme.palette.common.white}}>
                    <MenuItem value={"React"}>React Developer</MenuItem>
                    <MenuItem value={"Angular"}>Angular Developer</MenuItem>
                    <MenuItem value={"Java"}>Java Developer</MenuItem>
                    <MenuItem value={"C#"}>C# Developer</MenuItem>
                    <MenuItem value={"Python"}>Python Developer</MenuItem>
                    <MenuItem value={"Data Scientist"}>Data Scientist</MenuItem>
                    <MenuItem value={"Cybersecurity"}>Cybersecurity Engineer</MenuItem>
                    <MenuItem value={"DevOps"}>DevOps Engineer</MenuItem>
                </Select>
            </FormControl>
    )
};

export {Dropdown};