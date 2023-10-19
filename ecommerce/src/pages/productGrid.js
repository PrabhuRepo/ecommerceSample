import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
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


async function fetchProducts() {
    return await fetch(`https://fakestoreapi.com/products`).then(response =>
        response.json()
    )
}

const ProductGrid = ({ products }) => {
    const [productList, setProductList] = useState(products)
    const {
        isLoading,
        data: companies,
        isError,
        error,
        refetch
    } = useQuery({ queryKey: ['products'], queryFn: fetchProducts, enabled: false })

    useEffect(() => {
        if (companies && companies.length > 0) {
            setProductList(companies)
        }
    }, [companies])

    if (isError) {
        return <div>error occurred</div>
    }

    const handleFetchMore = () => {
        refetch()
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {productList.map(product => (
                        <Grid key={product.id} item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
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
                                    <Button size='small'>Share</Button>
                                    <Button size='small'>Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div
                style={{
                    textAlignLast: 'center',
                    borderRadius: '12px 12px 0px 0px',
                    borderLeftWidth: '1px',
                    borderRightWidth: '1px'
                }}
            >
                <Button onClick={() => handleFetchMore()} variant='contained'>
                    Load more ...
                </Button>
            </div>
        </>
    )
}

export default ProductGrid