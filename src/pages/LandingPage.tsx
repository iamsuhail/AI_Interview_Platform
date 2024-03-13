import {useState} from "react";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Paper }from "@mui/material";
import Stack from "@mui/material/Stack";
import { PreInterview } from "../components/PreInterview";
import { Avatar, Typography } from "@mui/material";
import selfie from "../assets/logo.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import Carousel from "react-material-ui-carousel";
import useMediaQuery from '@mui/material/useMediaQuery';

const Item = (props:any) => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Paper sx={{height: "550px"}}>
            <Typography variant="h5" sx={{textAlign: "center", borderBottom: "1px solid lightgray", padding: isMedium ? "10px" : "20px", fontSize: isMedium ? "large" : null}}>{props.item.name}</Typography>
            <Typography variant="subtitle1" sx={{textAlign: "center", padding: isMedium ? "20px" : "50px", fontSize: isMedium ? 'small' : null}}>{props.item.description}</Typography>
        </Paper>
    )
}


const LandingPage = () => {
    const [modalDisplay, setModalDisplay] = useState(false);
    const theme = useTheme()

    const openTab = (url:string) => {
        window.open(url);
    };

    const items = [
        {
            name: "Practice Live Interviews",
            description: "Interviews can be tough. The pressure to perform well can be overwhelming, and the uncertainty of what lies ahead can be daunting. But fear not, because our innovative application is here to provide you with the ultimate AI interview practice experience. Powered by cutting-edge artificial intelligence, our platform creates realistic simulations of real-world interviews. You'll face a diverse range of common interview questions, and our advanced AI algorithms will analyze your responses, offering valuable feedback and insights. This invaluable tool enables you to pinpoint areas where you can improve, boost your confidence, and equip you with the skills needed to confidently conquer your next interview. Say goodbye to uncertainty and hello to interview success with our AI interview practice platform."
        },
        {
            name: "Get Instant Analysis On Your Answers",
            description: "Leveraging the OpenAI API, our platform provides real-time, in-depth analysis of your interview responses. This advanced technology evaluates your content, delivery, and presentation, giving comprehensive feedback to hone your interview skills. Our AI system scrutinizes behavioral and technical responses, focusing on problem-solving abilities and field-specific expertise. The process includes one behavioral and four technical questions, equipping you with the knowledge and confidence to excel in interviews. Boost your interview skills with our AI-driven platform and unlock your potential."
        },
        {
            name: "Gain Interviewing Confidence",
            description: "Confidence is pivotal to interview success, and our AI platform is geared to help you build it. We provide real-time feedback on your performance, empowering you to refine your skills and gain self-assuredness. As you practice, you'll understand your strengths and weaknesses better, boosting your confidence in your abilities. This confidence, reflecting in your body language and delivery, will impress interviewers. Notably, confidence also fosters a personal connection with interviewers, raising your chances of landing the job. With our AI-assisted interview training, prepare to ace any interview with confidence, opening doors to a successful career."
        },
        {
            name: "Why we built this Application",
            description: "we're a bunch of developers with a passion for AI, recognized the need for better interview preparation tools. Struggling to find user-friendly resources, we decided to use our skills to create an innovative application that makes interview preparation easier and more effective. This platform, a fusion of web development expertise and AI interest, aims to help individuals tackle interview challenges with confidence. It's a testament to my dedication to simplifying the interview preparation process for job seekers globally."
        }
    ]

    return(
        <Stack direction="column" justifyContent="flex-start" alignItems="center" sx={{minHeight: "100vh", width: "100vw", gap: "60px"}}>
            <AppBar position="static" sx={{bgcolor: theme.palette.common.black}}>
                <Toolbar sx={{bgcolor: theme.palette.common.black}}>
                    <Box sx={{fontSize: "large", color: theme.palette.common.white, flexGrow: 1, cursor: 'pointer'}} onClick={() => { window.location.href = 'https://interview-with-ai.vercel.app'}}>Interview With AI</Box>
                    <Stack direction="row" gap="45px">
                        <Avatar src={selfie} sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail") }}></Avatar>
                        <Stack justifyContent="center" alignItems="center">
                            <GitHubIcon fontSize="large" sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail/AI_Interview_Platform") }}></GitHubIcon>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Carousel sx={{width: "80%",height: "25rem"}} animation="slide" interval={20000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Button onClick={() => {setModalDisplay(!modalDisplay)}} variant="contained">Get Started</Button>
            <PreInterview display={modalDisplay} setDisplay={setModalDisplay}></PreInterview>
        </Stack>
    )
};

export {LandingPage};
