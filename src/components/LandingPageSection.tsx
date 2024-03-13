import { Typography } from '@mui/material';
import Stack from "@mui/material/Stack";

export interface Props {
    section: string;
}

const LandingPageSection = (props: Props) => {
    if (props.section === "interview") {
        return (
            <Stack justifyContent="flex-start" alignItems="center" sx={{width: "80%"}} gap="30px">
                    <Typography variant="h3">Practice Live Interviews</Typography>
                    <Typography sx={{textAlign: "center"}} variant="subtitle1">Interviews are hard! Our Application aims to be the best resource in the world at improving your live interview skills. We have a compilation of the most popular interview questions for various job titles and senioririty levels that will be asked to you.</Typography>
            </Stack>
        )      
    }
    if (props.section === "analysis") {
        return (
            <Stack justifyContent="flex-start" alignItems="center" sx={{width: "80%"}} gap="30px">
                    <Typography variant="h3">Get Instant Analysis On Your Answers</Typography>
                    <Typography sx={{textAlign: "center"}} variant="subtitle1">We use the OpenAI API to analyze your interview answers in real time and provide you with a score for your answer as well as in depth feedback on how you can improve your interview skills.</Typography>
            </Stack>
        )  
    }
        return (
            <Stack justifyContent="flex-start" alignItems="center" sx={{width: "80%"}} gap="30px">
                    <Typography variant="h3">About Me (The Developer)</Typography>
                    <Typography sx={{textAlign: "center"}} variant="subtitle1">I am a Self-Taught Front End Developer with a passion for AI as well as building web applications! I recently completed an internship as a Web Developer and was trying to brush up on my interview skills to land my first full time role. During this process I was frustrated with how hard interview prep really is!</Typography>
            </Stack> 
        )      
};

export {LandingPageSection};