import React from "react";
import classes from './ProductCard.module.css'
import { useState } from "react";

const ProductCard = (props) => {

    const [hovered, setHovered] = useState(false)

    return (
        <div className={classes.productCard}>
            {!hovered 
            ? <img src={props.product.img1} alt="1" onMouseOver={_ => setHovered(!hovered)}/>
            : <img src={props.product.img2} alt="1" onMouseLeave={_ => setHovered(!hovered)}/>
            }
            <div className={classes.content}>
                <div className={classes.title}>{props.product.title}</div><div className={classes.decor}></div>
                <div className={classes.price}>${props.product.price}</div>
                <div className={classes.quantity}>In stock: {props.product.quantity}</div>
            </div>
            <button className={classes.add}>Add to card</button>
        </div>
    )
}

export default ProductCard;