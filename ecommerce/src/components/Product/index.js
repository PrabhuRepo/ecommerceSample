import React, { useEffect } from "react";
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material'
import './product.scss'

function Product({product}) {

    return (
            <Card sx={{ maxWidth: 345, height: 350 }}>
                <CardMedia
                    component='img'
                    alt={product.title}
                    height='140'
                    image={product.image}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {product.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Add to cart</Button>
                    <Button size='small'>Buy Now</Button>
                </CardActions>
            </Card>
        )
}

export default Product