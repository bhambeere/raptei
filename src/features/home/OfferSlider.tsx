import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Fashionable Dress',
        simpleText: '10% OFF YOUR FIRST ORDER',
        imgPath: '/static/carousel-1.jpg',
    },
    {
        label: 'Reasonable Price',
        simpleText: '10% OFF YOUR FIRST ORDER',
        imgPath: '/static/carousel-2.jpg',
    },
];

const OfferSlider = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Card sx={{ maxWidth: 1, width: 1, height: 500, }}>
                                <Box sx={{ position: "relative" }}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            overflow: 'hidden',
                                            opacity: 1,
                                        }}
                                        image={step.imgPath}
                                        alt={step.label}
                                        loading="lazy"
                                    />
                                    <Box
                                        style={{
                                            position: "absolute",
                                            color: "white",
                                            top: 150,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                        }}
                                    >
                                        <Typography variant="h5" textAlign="center">{step.simpleText}</Typography>
                                        <Typography variant="h2" textAlign="center">{step.label}</Typography>
                                        <Typography textAlign="center">
                                            <Button
                                                sx={{ background: '#fff', textTransform: 'none', padding: 1 }}
                                                size="large">Shop Now</Button>
                                        </Typography>

                                    </Box>
                                </Box>
                            </Card>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default OfferSlider;
