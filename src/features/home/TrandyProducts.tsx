import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const categories = [
    {
        id: 1,
        text: "Women Pleated White Dress",
        imageUrl: "/static/product-1.jpg",
        price: '$60.00',
        offerPrice: '$50.00'
    },
    {
        id: 2,
        text: "Kid Denim Shirt",
        imageUrl: "/static/product-2.jpg",
        price: '$45.00',
        offerPrice: '$40.00'
    },
    {
        id: 3,
        text: "Men Leather Black Jacket",
        imageUrl: "/static/product-3.jpg",
        price: '$120.00',
        offerPrice: '$110.00'
    },
    {
        id: 4,
        text: "Women Western Black Dress",
        imageUrl: "/static/product-4.jpg",
        price: '$150.00',
        offerPrice: '$130.00'
    },
    {
        id: 5,
        text: "Kid Printed White TShirt",
        imageUrl: "/static/product-5.jpg",
        price: '$40.00',
        offerPrice: '$35.00'
    },
    {
        id: 6,
        text: "Men Western Black Blazer",
        imageUrl: "/static/product-6.jpg",
        price: '$180.00',
        offerPrice: '$150.00'
    },
    {
        id: 7,
        text: "Women Long Winter Jocket",
        imageUrl: "/static/product-7.jpg",
        price: '$130.00',
        offerPrice: '$115.00'
    },
    {
        id: 8,
        text: "Kid Blut Shirt",
        imageUrl: "/static/product-8.jpg",
        price: '$50.00',
        offerPrice: '$40.00'
    }
]
const TrendyProducts = () => {
    return (
        <Container maxWidth="xl" sx={{ marginTop: 10 }}>
            <Grid container rowSpacing={5} spacing={3}>
                {categories.map(item => {
                    return (
                        <Grid key={item.id} item xs={12} sm={12} md={3}>
                            <Card sx={{ maxWidth: 1, width: 1, height: 500, }}>
                                <CardMedia
                                    component="img"
                                    image={item.imageUrl}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.text}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">

                                        <Typography component="span">
                                            {item.offerPrice}
                                        </Typography>
                                        <Typography component="span" sx={{ marginLeft: 2, textDecoration: 'line-through' }}>
                                            {item.price}
                                        </Typography>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex' }}>
                                    <Box sx={{ flexGrow: 1 }}><Button size="small">View Details</Button></Box>
                                    <Box><Button size="small">Add to Cart</Button></Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container >
    );
};

export default TrendyProducts;
