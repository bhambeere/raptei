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
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const categories = [
    {
        text: "Men's dresses",
        imageUrl: "/static/cat-1.jpg",
    },
    {
        text: "Women's dresses",
        imageUrl: "/static/cat-2.jpg",
    },
    {
        text: "Kid's dresses",
        imageUrl: "/static/cat-3.jpg",
    },
    {
        text: "Accerssories",
        imageUrl: "/static/cat-4.jpg",
    },
    {
        text: "Bags",
        imageUrl: "/static/cat-5.jpg",
    },
    {
        text: "Shoes",
        imageUrl: "/static/cat-6.jpg",
    }
]
const CategorySection = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: 10 }}>
            <Grid container rowSpacing={5} spacing={3}>
                {categories.map(item => {
                    return (
                        <Grid item xs={12} sm={12} md={4}>
                            <Card sx={{ maxWidth: 1, width: 1, height: 350, }}>
                                <CardMedia
                                    component="img"
                                    image={item.imageUrl}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container >
    );
};

export default CategorySection;
