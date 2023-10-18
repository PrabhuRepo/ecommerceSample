import React from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useQuery } from "@tanstack/react-query";
import { Card } from "@mui/material";

async function fetchProducts() {
    return await fetch(`https://fakestoreapi.com/products`).then((response) =>
        response.json()
    );
}

type propsType = {
    name: String,
    cartItems: Number,
    profile: object
}

function Search(props: propsType) {


    const top100Films = [
        { title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", productId: 15 },
        { title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", productId: 16 },
        { title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats", productId: 17 }
    ]

    const { isLoading, data: companies, isError, error } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })

    if (isError) {
        return <div>error occurred</div>;
    }


    return (
        <>
            <div style={{ height: '800px', display: 'flex', alignItems: 'center' }}>
                <Stack spacing={2} sx={{ width: '80%' }}>
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        className='autoComplete'
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => <TextField {...params} label="freeSolo" />}
                    />
                </Stack>
            </div>
            <div>Frequently purchased Items</div>
            {isLoading ? <div>loading...</div> :
             <div>
            // use map to loop over all products
            // Use MaterialUI card to display 20 products
            // Product view should be 4 X 5 Grid

            // Include a button named "Fetch More products" on click invoke "fetchProducts" API and get the details
                // Now the fetchProducts is being invoked at the intial render but it should be invoked only on button click
            </div>
            }
        </>
    )
}

export default Search