import React, { useEffect, useState, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../data/api/products'
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



const ProductGrid = ({ products, getProductList }) => {

    const [productList, setProductList] = useState(products)

    const {
        isLoading,
        data: companies,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        enabled: false
    })

    const handleFetchMore = useCallback(() => {
        refetch()
    })

    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        if (companies && companies.length > 0) {
            setProductList(companies)
            getProductList(companies)
        }
    }, [companies])



    if (isError) {
        return <div>error occurred</div>
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {productList && productList.map(product => (
                        <Grid key={product.id} item xs={3}>
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
                                        {/* {product.description} */}
                                        {showMore
                                            ? product.description
                                            : `${product.description.substring(0, 100)}`}

                                        <a href="#"
                                            onClick={() => setShowMore(!showMore)}
                                        >
                                            {showMore ? 'Show less' : 'Show more'}
                                        </a>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small'>Add to cart</Button>
                                    <Button size='small'>Buy Now</Button>
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
                    borderRightWidth: '1px',
                    paddingTop: '20px'
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