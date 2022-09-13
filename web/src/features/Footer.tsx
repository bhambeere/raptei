import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <Container maxWidth='xl' sx={{ backgroundColor: '#ce93d8', marginTop: 10 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Grid item xs={12} md={3}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant="h3">
                                Raptei
                            </Typography>
                            <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                                <LocationOnIcon /> 123 Street, New York, USA
                            </Typography>
                            <Typography variant="subtitle1">
                                <EmailIcon /> info@example.com
                            </Typography>
                            <Typography variant="subtitle1">
                                <CallIcon /> +012 345 67890
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5"> Quick Links</Typography>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Mens" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Women's" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Kids" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5"> Quick Links</Typography>
                        <nav aria-label="secondary mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="Accerssories" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Bags" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#simple-list">
                                        <ListItemText primary="Shoes" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant="h5">Newsletter</Typography>
                            <TextField
                                id="your-name"
                                variant='outlined'
                                placeholder='Your Name' sx={{ mt: 2 }} />

                            <TextField
                                id="your-email"
                                variant='outlined'
                                placeholder='Your Email' sx={{ mt: 2 }} />

                            <Button variant="contained" sx={{ mt: 2, textTransform: 'none' }}>
                                Subscribe Now
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
export default Footer;