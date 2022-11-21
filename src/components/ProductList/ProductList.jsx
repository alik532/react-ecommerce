import React from "react";
import classes from "./ProductList.module.css"
import ProductCard from "../ProductCard/ProductCard";

const ProducList = (props) => {
    return (
        <div className={classes.productList}>
            {props.products.map(product => 
                <ProductCard product={product}/>    
            )}
        </div>
    )
}

export default ProducList;