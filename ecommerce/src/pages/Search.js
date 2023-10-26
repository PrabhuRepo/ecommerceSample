// Filter products based on search text
// Align card height to be same across all cards
// Introduce Add to Cart and Buy Now Buttons
// Construct Header and Footer components under layout



import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import ProductGrid from './productGrid'
import ButtonAppBar from './Layout/appBar'

const frequentlyPurchased = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
            'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image:
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description:
            'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: 4,
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description:
            'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: { rate: 2.1, count: 430 }
    }
]

const Search = () => {

    const [searchtext, setSearchText] = useState('');
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        setProdList(frequentlyPurchased)
    }, [])

    const handleSubmit = (event, value) => {
        console.log("value", event.target)
        event.preventDefault();
        setSearchText(value);
        let searchItem = prodList.filter(item => item.id === value)
        setProdList(searchItem)
    }

    const getProductList = (productsList) => {
        setProdList(productsList)
    }




    return (
        <>
            <ButtonAppBar />
            <div style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
                <Stack spacing={2} sx={{ width: '80%' }}>
                    <Autocomplete
                        id='free-solo-demo'
                        freeSolo
                        className='autoComplete'
                        options={prodList && prodList.map(option => option.title)}
                        onChange={handleSubmit()}
                        renderInput={params => <TextField {...params} label='freeSolo' />}
                    />
                </Stack>
            </div>
            <div>Frequently purchased Items</div>
            {prodList.length > 0 && <ProductGrid products={prodList} getProductList={getProductList} />}
        </>
    )
}

export default Search