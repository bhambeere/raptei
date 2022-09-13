import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CallIcon from '@mui/icons-material/Call';

const services = [
    {
        ariaLabel: "quality-product",
        text: "Quality Product",
        icon: <CheckIcon fontSize="large" sx={{ color: '#7b1fa2' }} />,
        color: '#7b1fa2'
    },
    {
        ariaLabel: "free-shipping",
        text: "Free Shipping",
        icon: <LocalShippingIcon fontSize="large" sx={{ color: '#7b1fa2' }} />
    },
    {
        ariaLabel: "14-day-return",
        text: "14-Day Return",
        icon: <SyncAltIcon fontSize="large" sx={{ color: '#7b1fa2' }} />
    },
    {
        ariaLabel: "24-7-support",
        text: "24/7 Support",
        icon: <CallIcon fontSize="large" sx={{ color: '#7b1fa2' }} />
    }
]
const ServiceSection = () => {
    return (
        <Container maxWidth="xl" sx={{ marginTop: 10 }}>
            <Grid container rowSpacing={{ xs: 2, sm: 2, md: 1 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {services.map(item => {
                    return (
                        <Grid item xs={12} sm={12} md={3}>
                            <Card sx={{ display: 'flex', padding: 2 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton aria-label={item.ariaLabel}>
                                            {item.icon}
                                        </IconButton>
                                        <Typography variant="h5" textAlign="center">{item.text}</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default ServiceSection;
