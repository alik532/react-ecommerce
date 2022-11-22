import React from "react";
import classes from "./ProductList.module.css"
import ProductCard from "../ProductCard/ProductCard";

const ProducList = (props) => {

    const addToCart = (product) => {
        props.addToCart(product)
    }

    return (
        <div className={classes.productList}>
            {props.products.map(product => 
                <ProductCard product={product} addToCart={addToCart}/>    
            )}
        </div>
    )
}

export default ProducList;