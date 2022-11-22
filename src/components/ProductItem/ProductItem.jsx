import React from "react";
import classes from './ProductItem.module.css'

const ProductItem = (props) => {

    const getTotalPrice = () => {
        return (props.item.quantity * props.item.price).toFixed(2)
    }

    const addToCart = (item) => {
        props.addToCart(item)
    }

    const removeFromCart = (item) => {
        props.removeFromCart(item)
    }

    return (
        <div className={classes.productItem}>
            <div className={classes.container}>
               <img src={props.item.img1} alt=""/>
                <div className={classes.mainContent}>
                    <div className={classes.itemTitle}>
                        {props.item.title}
                    </div>
                    <div className={classes.itemPrice}>
                        ${props.item.price}
                    </div>
                    <div>
                        {props.item.quantity} x
                    </div>
                </div>
            </div>
            <div className={classes.pricePanel}>
                Total: ${getTotalPrice()}
                <div className={classes.crement}>
                    <button onClick={_ => removeFromCart(props.item)} disabled={props.item.quantity === 1 ? true : false} className={classes.cremButton}>-</button>
                    <button className={classes.cremButton} onClick={_ => addToCart(props.item)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;