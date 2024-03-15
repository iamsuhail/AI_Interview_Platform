import {Box, Typography} from '@mui/material';
import Stack from "@mui/material/Stack";
import { useContext, useEffect, useState } from "react";
import { interviewContext } from "../interviewContext";
import {reactQuestions, angularQuestions, behavioralQuestions, seniorReactQuestions, seniorAngularQeustions, javaQuestions, seniorJavaQuestions, cQuestions, seniorCQuestions, pythonQuestions, seniorPythonQuestions, dataScientistQuestions, seniorDataScientistQuestions, devOpsQuestions, cyberQuestions, seniorCyberQuestions} from "../data/interviewQuestions";
import { Button, TextField, AppBar, Toolbar, Avatar } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import selfie from "../assets/logo.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import MicIcon from '@mui/icons-material/Mic';
import './css/microphone.css';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';




interface Values {
    answer: string;
}

const validationSchema = yup.object({
    answer: yup.string().max(1000, "answer should be 100 characters max").required("Answer is Required")
});


const Interview = () => {
    const { interviewLevel, interviewJob, questions, setQuestions, setAnswers, answers} = useContext(interviewContext);
    const [questionNumber, setQuestionNumber] = useState(0 as number);
    const navigate = useNavigate();
    const synthesis = window.speechSynthesis;
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(questions[questionNumber]);
        const voice = synthesis.getVoices().filter(function (voice) {
            return voice.lang === 'en';
          })[1];
        utterance.voice = voice;
        utterance.pitch = 1.5;
        utterance.rate = 1.25;
        utterance.volume = 0.8;
        synthesis.speak(utterance);
        resetTranscript();
    }, [questionNumber]);

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(questions[0]);
        const voice = synthesis.getVoices().filter(function (voice) {
            return voice.lang === 'en';
          })[0];
        utterance.voice = voice;
        utterance.pitch = 1.5;
        utterance.rate = 1;
        utterance.volume = 0.8;
        synthesis.speak(utterance);        
    }, [questions]);

    const formik = useFormik({
        initialValues: {
            answer: transcript,
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values: Values) => {
            const newAnswers = [...answers, values.answer]
            setAnswers(newAnswers);
            setQuestionNumber(prevState => prevState + 1);
            formik.resetForm();
        },
    });

    useEffect(() => {
        const questions : string[] = [];
        questions.push(behavioralQuestions[Math.floor(Math.random() * behavioralQuestions.length)]);
        if (interviewJob === "React" && interviewLevel === "Junior") {
            const shuffledQuestions = reactQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
        if (interviewJob === "React" && interviewLevel === "Senior") {
            const shuffledQuestions = reactQuestions.sort(() => Math.random() - 0.5);
            const shuffledSenior = seniorReactQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledSenior[0], shuffledSenior[1], shuffledQuestions[1]);
            setQuestions(questions);
        }
        if (interviewJob === "Angular" && interviewLevel === "Junior") {
            const shuffledQuestions = angularQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
        if (interviewJob === "Angular" && interviewLevel === "Senior") {
            const shuffledQuestions = angularQuestions.sort(() => Math.random() - 0.5);
            const shuffledSenior = seniorAngularQeustions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledSenior[0], shuffledSenior[1], shuffledQuestions[1]);
            setQuestions(questions);
        }
        if (interviewJob === "Java" && interviewLevel === "Junior") {
            const shuffledQuestions = javaQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
        if (interviewJob === "Java" && interviewLevel === "Senior") {
            const shuffledQuestions = javaQuestions.sort(() => Math.random() - 0.5);
            const shuffledSenior = seniorJavaQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledSenior[0], shuffledSenior[1], shuffledQuestions[1]);
            setQuestions(questions);
        }
        if (interviewJob === "C#" && interviewLevel === "Junior") {
            const shuffledQuestions = cQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
        if (interviewJob === "C#" && interviewLevel === "Senior") {
            const shuffledQuestions = cQuestions.sort(() => Math.random() - 0.5);
            const shuffledSenior = seniorCQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledSenior[0], shuffledSenior[1], shuffledQuestions[1]);
            setQuestions(questions);
        }
        if (interviewJob === "Python" && interviewLevel === "Junior") {
            const shuffledQuestions = pythonQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
        if (interviewJob === "Python" && interviewLevel === "Senior") {
            const shuffledQuestions = pythonQuestions.sort(() => Math.random() - 0.5);
            const shuffledSenior = seniorPythonQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledSenior[0], shuffledSenior[1], shuffledQuestions[1]);
            setQuestions(questions);
        }
        if (interviewJob === "Data Scientist" && interviewLevel === "Junior") {
            const shuffledQuestions = dataScientistQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
        if (interviewJob === "Data Scientist" && interviewLevel === "Senior") {
            const shuffledQuestions = dataScientistQuestions.sort(() => Math.random() - 0.5);
            const shuffledSenior = seniorDataScientistQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledSenior[0], shuffledSenior[1], shuffledQuestions[1]);
            setQuestions(questions);
        }
        if (interviewJob === "Cybersecurity" && interviewLevel === "Junior") {
            const shuffledQuestions = cyberQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
        if (interviewJob === "Cybersecurity" && interviewLevel === "Senior") {
            const shuffledQuestions = cyberQuestions.sort(() => Math.random() - 0.5);
            const shuffledSenior = seniorCyberQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledSenior[0], shuffledSenior[1], shuffledQuestions[1]);
            setQuestions(questions);
        }
        if (interviewJob === "DevOps") {
            const shuffledQuestions = devOpsQuestions.sort(() => Math.random() - 0.5);
            questions.push(shuffledQuestions[0], shuffledQuestions[1], shuffledQuestions[2], shuffledQuestions[3]);
            setQuestions(questions);
        }
    }, [interviewJob]); 

    useEffect(() => {
        if (questionNumber > 4) {
            navigate("/interviewAnalysis");
        }
    }, [questionNumber]);

    const openTab = (url:string) => {
        window.open(url);
    };

    if (isMedium) {
        return(
            <Stack sx={{height: '100vh', width: '100vw'}} justifyContent="flex-start" alignItems="center">
            <AppBar position="static" sx={{bgcolor: theme.palette.common.black}}>
                <Toolbar sx={{bgcolor: theme.palette.common.black}}>
                    <Box sx={{fontSize: "large", color: theme.palette.common.white, flexGrow: 1, cursor: 'pointer'}} onClick={() => { window.location.href = 'https://ai-interview-platform.vercel.app'}}>InterviewAI</Box>
                    <Stack direction="row" gap="45px">
                        <Avatar src={selfie} sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail") }}></Avatar>
                        <Stack justifyContent="center" alignItems="center">
                            <GitHubIcon fontSize="large" sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail/AI_Interview_Platform") }}></GitHubIcon>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack sx={{flexGrow: 1, width: '100%', backgroundColor: theme.palette.grey[200], color: theme.palette.common.black}} justifyContent='center' alignItems='center'>
                <Stack sx={{height: '80%', width: '90%', border: '1px solid lightgray', borderRadius: '5px', backgroundColor: theme.palette.common.white}} justifyContent='flex-start' alignItems='center'>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{width: '95%', height: '10%'}}>
                        <Box sx={{fontSize: 'small', fontWeight: 'bold'}}>{interviewLevel} {interviewJob} Interview</Box>
                        <Box sx={{fontSize: 'large', fontWeight: 'bold'}}> {questionNumber + 1} / 5</Box>
                    </Stack>
                    <Stack sx={{height: '20%', width: '80%', textAlign: 'center', fontSize: 'medium', fontWeight: '500'}} justifyContent='center' alignItems='center'>
                    { questions[1] && questionNumber === 0 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null }
                    { questions[1] && questionNumber === 1 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    { questions[1] && questionNumber === 2 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    { questions[1] && questionNumber === 3 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    { questions[1] && questionNumber === 4 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    </Stack>
                    <form onSubmit={formik.handleSubmit} id='myForm' style={{height: '50%', width: '90%', position: 'relative', border: `1px solid ${theme.palette.primary.main}`, borderRadius: '5px'}}>
                        <TextField id="answer" sx={{height: '100%', width: '100%', '> div > fieldset': {border: 'none'}}} name="answer" multiline={true} minRows={10} value={formik.values.answer} onChange={formik.handleChange} error={formik.touched.answer && Boolean(formik.errors.answer)} helperText={formik.touched.answer && formik.errors.answer}></TextField>
                        <Box onClick={transcript == '' ? () => {formik.resetForm()} : () => {resetTranscript()}} sx={{position: 'absolute', top: '5px', right: '5px', zIndex: 111, cursor: 'pointer'}}><RestartAltIcon></RestartAltIcon></Box>
                    </form>
                    <Stack direction='row' justifyContent='center' alignItems='center' sx={{width: '90%', height: "15%"}}>
                        <Stack sx={{width: '67%', height: '90%'}} justifyContent='center' alignItems='center'>
                            <Button sx={{flexGrow: 1, outlineStyle: 'none !important', borderRadius: '20%'}} className={listening ? 'animate' : ''} onTouchStart={() => {SpeechRecognition.startListening({continuous: true })}} onTouchEnd={() => {SpeechRecognition.stopListening()}}>
                                <MicIcon sx={{height: '100%'}}></MicIcon>
                            </Button>
                            <Typography variant='subtitle1' sx={{fontSize: 'small', textAlign: 'center'}}>Hold The Microphone to Start Recording</Typography>
                        </Stack>
                        <Stack sx={{width: '33%'}} justifyContent='flex-end' alignItems='center' direction='row'>
                            <Button type="submit" sx={{fontSize: 'small'}} form='myForm' variant='contained' endIcon={ questionNumber === 4 ? <CheckCircleOutlineIcon></CheckCircleOutlineIcon> : <SendIcon></SendIcon>}> { questionNumber === 4 ? 'Finish' : 'Next' } </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
        )
    }
    
    return(
        <Stack sx={{height: '100vh', width: '100vw'}} justifyContent="flex-start" alignItems="center">
            <AppBar position="static" sx={{bgcolor: theme.palette.primary.main}}>
                <Toolbar sx={{bgcolor: theme.palette.common.black}}>
                    <Box sx={{fontSize: "large", color: theme.palette.common.white, flexGrow: 1, cursor:'pointer'}} onClick={() => { window.location.href = 'https://ai-interview-platform.vercel.app'}}>InterviewAI</Box>
                    <Stack direction="row" gap="45px">
                        <Avatar src={selfie} sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail") }}></Avatar>
                        <Stack justifyContent="center" alignItems="center">
                            <GitHubIcon fontSize="large" sx={{height: "40px", width: "40px", cursor: "pointer"}} onClick={() => { openTab("https://github.com/iamsuhail/AI_Interview_Platform") }}></GitHubIcon>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack sx={{flexGrow: 1, width: '100%', backgroundColor: theme.palette.grey[200]}} justifyContent='center' alignItems='center'>
                <Stack sx={{height: '80%', width: '90%', border: '1px solid lightgray', borderRadius: '5px', backgroundColor: theme.palette.common.white}} justifyContent='flex-start' alignItems='center'>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{width: '95%', height: '10%'}}>
                        <Box sx={{fontSize: 'large', fontWeight: 'bold'}}>{interviewLevel} {interviewJob} Interview</Box>
                        <Box sx={{fontSize: 'large', fontWeight: 'bold'}}> {questionNumber + 1} / 5</Box>
                    </Stack>
                    <Stack sx={{height: '20%', width: '80%', textAlign: 'center', fontSize: 'large', fontWeight: '500'}} justifyContent='center' alignItems='center'>
                    { questions[1] && questionNumber === 0 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null }
                    { questions[1] && questionNumber === 1 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    { questions[1] && questionNumber === 2 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    { questions[1] && questionNumber === 3 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    { questions[1] && questionNumber === 4 ? <TypewriterComponent onInit={(typewriter) => {typewriter.changeDelay(40).typeString(questions[questionNumber]).start()}}/> : null } 
                    </Stack>
                    <form onSubmit={formik.handleSubmit} id='myForm' style={{height: '50%', width: '90%', position: 'relative', border: `1px solid ${theme.palette.primary.main}`, borderRadius: '5px'}}>
                        <TextField id="answer" sx={{height: '100%', width: '100%', '> div > fieldset': {border: 'none'}}} name="answer" multiline={true} minRows={10} value={formik.values.answer} onChange={formik.handleChange} error={formik.touched.answer && Boolean(formik.errors.answer)} helperText={formik.touched.answer && formik.errors.answer}></TextField>
                        <Box onClick={transcript == '' ? () => {formik.resetForm()} : () => {resetTranscript()}} sx={{position: 'absolute', top: '5px', right: '5px', zIndex: 111, cursor: 'pointer'}}><RestartAltIcon></RestartAltIcon></Box>
                    </form>
                    <Stack direction='row' justifyContent='center' alignItems='center' sx={{width: '90%', height: "15%"}}>
                        <Box sx={{width: '33%'}}></Box>
                        <Stack sx={{width: '33%', height: '90%'}} justifyContent='center' alignItems='center'>
                            <Button sx={{flexGrow: 1, outlineStyle: 'none !important', borderRadius: '30%'}} className={listening ? 'animate' : ''} onClick={listening ? () => {SpeechRecognition.stopListening()} : () => {SpeechRecognition.startListening({ continuous: true })}}>
                                <MicIcon sx={{height: '100%'}}></MicIcon>
                            </Button>
                            <Typography variant='subtitle1'>Tap Microphone To { listening ? 'Stop' : 'Start'} Recording</Typography>
                        </Stack>
                        <Stack sx={{width: '33%'}} justifyContent='flex-end' alignItems='center' direction='row'>
                            <Button type="submit" form='myForm' variant='contained' endIcon={ questionNumber === 4 ? <CheckCircleOutlineIcon></CheckCircleOutlineIcon> : <SendIcon></SendIcon>}> { questionNumber === 4 ? 'Finish Interview' : 'Next Question' } </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
};

export {Interview};
