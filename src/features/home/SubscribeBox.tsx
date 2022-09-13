import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { margin } from '@mui/system';

const SubscribeBox = () => {
    return (
        <Box
            display="flex"
            flexDirection='column'
            justifyContent="center"
            alignItems="center"
            minHeight="40vh"
            sx={{
                backgroundColor: "#f3e5f5",
                marginTop: 10,
                padding: 2
            }}
        >
            <Typography variant="h2" textAlign='center'>Stay Updated</Typography>
            <Typography variant="h6" textAlign='center'>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</Typography>
            <TextField
                id="standard-name"
                variant='outlined'
                placeholder='Email Goes Here'
                sx={{ width: 1 / 3, display: { xs: 'none', md: 'flex' } }}
                InputProps={{
                    endAdornment: <Button
                        sx={{ textTransform: 'none', width: 150 }}
                        size="large">Subscribe</Button>
                }}
            />
            <Box display="flex"
                flexDirection='column'
                sx={{ display: { xs: 'flex', md: 'none' }, width: 1, mt: 2 }}>
                <TextField
                    id="standard-name"
                    label="Name"
                    variant='outlined'
                    placeholder='Email Goes Here'

                />
                <Button
                    sx={{ textTransform: 'none' }}
                    size="large">Subscribe</Button>
            </Box>
        </Box>
    );
}

export default SubscribeBox;
