import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const SessionSection = () => {
    return (
        <Container maxWidth='xl' sx={{ marginTop: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ display: 'flex', background: '#e1bee7', height: 250 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 200, }}
                            image="/static/offer-1.png"
                            alt="Spring Collection"
                        />
                        <CardContent sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, flexDirection: 'column' }}>
                            <Typography variant="h5" textAlign="right">
                                20% OFF THE ALL ORDER
                            </Typography>
                            <Typography variant="h2" textAlign="right">
                                Spring Collection
                            </Typography>
                            <Typography textAlign="right">
                                <Button
                                    sx={{ background: '#fff', textTransform: 'none', padding: 1 }}
                                    size="large">Shop Now</Button>
                            </Typography>
                        </CardContent>

                        <CardContent sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, flexDirection: 'column' }}>
                            <Typography variant="h6" textAlign="center">
                                20% OFF THE ALL ORDER
                            </Typography>
                            <Typography variant="h4" textAlign="center">
                                Spring Collection
                            </Typography>
                            <Typography textAlign="center">
                                <Button
                                    sx={{ background: '#fff', textTransform: 'none', padding: 1 }}
                                    size="large">Shop Now</Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ display: 'flex', background: '#e1bee7', height: 250 }}>
                        <CardContent sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, flexDirection: 'column' }}>
                            <Typography variant="h5" textAlign="left">
                                20% OFF THE ALL ORDER
                            </Typography>
                            <Typography variant="h2" textAlign="left">
                                Winter Collection
                            </Typography>
                            <Typography textAlign="left">
                                <Button
                                    sx={{ background: '#fff', textTransform: 'none', padding: 1 }}
                                    size="large">Shop Now</Button>
                            </Typography>
                        </CardContent>
                        <CardContent sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                            <Typography variant="h6" textAlign="center">
                                20% OFF THE ALL ORDER
                            </Typography>
                            <Typography variant="h4" textAlign="center">
                                Winter Collection
                            </Typography>
                            <Typography textAlign="center">
                                <Button
                                    sx={{ background: '#fff', textTransform: 'none', padding: 1 }}
                                    size="large">Shop Now</Button>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 200 }}
                            image="/static/offer-2.png"
                            alt=" Winter Collection"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SessionSection;