import React, { useEffect,useLayoutEffect, useState, useCallback } from 'react'
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
import Product from '../components/Product'



const ProductGrid = ({ products }) => {
    const [productList, setProductList] = useState([])
    const [showMore, setShowMore] = useState(false)

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

    useEffect(() => {
        if (companies && companies.length > 0) {
            setProductList(companies)
        } else {
            setProductList(products)
        }
    }, [companies, products])

    if (isError) {
        return <div>error occurred</div>
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {productList && productList.map(product => (
                        <Grid key={product.id} item xs={3}>
                            <Product product={product} />
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