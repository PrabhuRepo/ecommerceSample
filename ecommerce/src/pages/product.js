import React, { useEffect } from "react";
import './css/product.scss'

function Product({ userName }) {

    useEffect(() => {
        console.log("products useEffect rerender")
    }, [])

    return (
        <div>
          
            <div>
                <div className="title">Product page {userName}</div>

            </div>
            <div>

            </div>
        </div>)
}

export default Product