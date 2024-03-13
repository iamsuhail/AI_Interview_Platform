import { useContext } from "react";
import { interviewContext } from "../interviewContext";
import { Avatar, Typography, Box, AppBar, Toolbar, Paper, Stack, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from "react-material-ui-carousel";
import selfie from "../assets/logo.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactLoading from 'react-loading';



const FeedbackItem = (props:any) => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    const capitalizeFirstLetter = (input: string): string => {
        return input.charAt(0).toUpperCase() + input.slice(1);
      }
      

    return (
        <Paper sx={{height: "550px"}}>
            <Stack sx={{width: '100%', height: '100%'}} direction='row' justifyContent='center' alignItems='flex-start' flexWrap='wrap'>
                <Stack sx={{width: '49%', height: '40%'}} justifyContent='flex-start' alignItems='center' gap={isMedium ? '2px' : '10px'}>
                    <Typography variant="h5" sx={{paddingTop: isMedium ? '5px' : '10px', borderBottom: '1px solid lightgray', fontSize: isMedium ? 'medium' : null}}>Question</Typography>
                    <Typography variant="subtitle1" textAlign='center' sx={{padding: isMedium ? '5px' : '10px', fontSize: isMedium ? 'small' : null}}>{props.question}</Typography>
                </Stack>
                <Stack sx={{width: '49%', height: '40%', borderLeft: '1px solid lightgray'}} justifyContent='flex-start' alignItems='center' gap={isMedium ? '2px' : '10px'}>
                    <Typography variant="h5" sx={{paddingTop: isMedium ? '5px' : '10px', borderBottom: '1px solid lightgray', fontSize: isMedium ? 'medium' : null}}>Your Answer</Typography>
                    <Typography variant="subtitle1" textAlign='center' sx={{padding: isMedium ? '5px' : '10px', fontSize: isMedium ? 'small' : null}}>{capitalizeFirstLetter(props.answer)}</Typography>
                </Stack>                
                <Stack gap={isMedium ? '2px' : '10px'} sx={{width: '100%', height: '60%', backgroundColor: props.item.grade === 'good' ? theme.palette.success.light : theme.palette.error.light, borderRadius: '5px'}} justifyContent='flex-start' alignItems='center'>
                    <Typography variant="h5" sx={{color: theme.palette.common.white, paddingTop: isMedium ? '5px' : '10px', fontSize: isMedium ? 'medium' : null, borderBottom: '1px solid white'}}>Feedback</Typography>
                    <Typography variant="subtitle1" textAlign='center' sx={{color: theme.palette.common.white, padding: isMedium ? '5px' : '10px', fontSize: isMedium ? 'small' : null}} >{props.item.aiFeedback}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}


const PostInterview = () => {
    const {  questions,  answers, feedback } = useContext(interviewContext);
    const theme = useTheme();
    
    const openTab = (url:string) => {
        window.open(url);
    };
    
    if (feedback.length < 5) {
        return(
            <Stack direction="column" justifyContent="flex-start" alignItems="center" sx={{minHeight: "100vh", width: "100vw", gap: "60px", bgcolor: theme.palette.grey[200]}}>
            <AppBar position="static" sx={{bgcolor: theme.palette.primary.main}}>
                <Toolbar sx={{bgcolor: theme.palette.common.black}}>
                    <Box sx={{fontSize: "large", color: theme.palette.common.white, flexGrow: 1, cursor: 'pointer'}} onClick={() => { openTab('https://interview-with-ai.vercel.app')}}>Interview With AI</Box>
                    <Stack direction="row" gap="45px">
                        <Avatar src={selfie} sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail") }}></Avatar>
                        <Stack justifyContent="center" alignItems="center">
                            <GitHubIcon fontSize="large" sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail/AI_Interview_Platform") }}></GitHubIcon>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack sx={{height: '100%', width: '100%', flexGrow: 1}} justifyContent='center' alignItems='center' gap='60px'>
                <ReactLoading color={theme.palette.primary.main} width={100} height={100} type="spin"></ReactLoading>
                <Stack sx={{height: '20px', width: '200px', backgroundColor: 'white', borderRadius: '20px'}} justifyContent='flex-start' direction='row' alignItems='center'>
                    <Box sx={{height: '20px', width: `${(feedback.length / 5) * 100}%`, backgroundColor: theme.palette.primary.main, zIndex: 111, borderRadius: '20px'}}></Box>
                </Stack>
                <Typography variant="h6">Our AI is analyzing your answers...</Typography>
            </Stack>
        </Stack>
            )
        }
        
        const items:any[] = [
            {
                grade: feedback[0].grade,
                aiFeedback: feedback[0].yourFeedback
            },
            {
                grade: feedback[1].grade,
                aiFeedback: feedback[1].yourFeedback
            },
            {
                grade: feedback[2].grade,
                aiFeedback: feedback[2].yourFeedback
            },
            {
                grade: feedback[3].grade,
                aiFeedback: feedback[3].yourFeedback
            },
            {
                grade: feedback[4].grade,
                aiFeedback: feedback[4].yourFeedback
            }
        ]

    return(
        <Stack direction="column" justifyContent="flex-start" alignItems="center" sx={{minHeight: "100vh", width: "100vw", gap: "60px", bgcolor: theme.palette.grey[200]}}>
            <AppBar position="static" sx={{bgcolor: theme.palette.primary.main}}>
                <Toolbar>
                    <Box sx={{fontSize: "large", color: theme.palette.common.white, flexGrow: 1}} onClick={() => { window.location.href = 'https://interview-with-ai.vercel.app'}}>Interview With AI</Box>
                    <Stack direction="row" gap="45px">
                        <Avatar src={selfie} sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://laykenv.github.io/portfolio/") }}></Avatar>
                        <Stack justifyContent="center" alignItems="center">
                            <GitHubIcon fontSize="large" sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/LaykenV/interviewWithAI") }}></GitHubIcon>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Carousel sx={{width: "80%"}} animation="slide" autoPlay={false}>
            {
                items.map( (item, i) => <FeedbackItem key={i} item={item} question={questions[i]} answer={answers[i]}/> )
            }
            </Carousel>
            <Button onClick={() => {window.location.href = 'https://interview-with-ai.vercel.app'}} variant="contained">Return Home</Button>
        </Stack>
    )
};

export {PostInterview};
