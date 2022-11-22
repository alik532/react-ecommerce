import React from "react";
import classes from './SideBar.module.css'
import ProductItem from "../ProductItem/ProductItem";

const SideBar = (props) => {

    function getUniqueItems() {
        let uniqItems = [...new Set(props.items)]
        uniqItems.forEach(uItem => {
            let quantity = 0
            for(let i = 0; i < props.items.length; i++) {
                if (uItem === props.items[i])
                    quantity++           
            }
            uItem['quantity'] = quantity
            return uItem
        })
        return uniqItems
    }

    const getPaycheckPrice = () => {
        return props.items.reduce((a, b) => a + b.price, 0).toFixed(2)
        
    }

    const addToCart = (item) => {
        props.addToCart(item)
    }

    const removeFromCart = (item) => {
        props.removeFromCart(item)
    }

    return (
        <div className={classes.sideBar}>
            <div className={classes.cartButton} onClick={_ => props.setCartIsOpen(!props.cartIsOpen)} style={props.cartIsOpen ? {right: "450px", transition: "0.2s", backgroundImage: "none"} : {display: "initial", transition: "0.2s"} }>
                {props.cartIsOpen ? <h6>X</h6> : <div></div>}
            </div>
            <div className={classes.cartPanel} style={props.cartIsOpen ? {right: "0px", transition: "0.2s"} : {display: "initial", transition: "0.2s", animationDelay: "0.2s"} }>
                <div className={classes.cartHeader}>
                    <h3>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwwQEgYn7+gWAAABQklEQVRIx9WTsUoDQRRF72xMYSFokcRCjBFESGWRwtZe8AtEFFNrI1bB0tLGQuzs/AJB8AO2kZRCxBiRQNKIoIYoyLFwCZuss9nNgpBXzc7be3j3zow09mU48321zVF8gNtbZ5Q1UwmGYQPIxFU5vnVdUuHfARO+OD5oa9GzM6NcbICkem+CLZ0kA1zKHQ2w6tlpqRUN4AwA5knFiTAISGsuHqDfwoOkgp4kUkoP1WI+Azt02ZYk9hle3cAEBh69c7iKEOJ30IJU/71KpqbaKCH6b0LEGgTcaYXpeIj+GJf54pyI70CSTACxq1M5ehmqvDCHfwIkFrQW4S1WzXUCq+E5lNhkMqSfo0ze3t7hlWeqIfJ3GnQo2n644ZhZYMnSL9OQcKnYAHs0ueUeY+nn6eDyRskGcFjngGxIBkUqVvk41g+oBJ136GBf8AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xMlQxNjoxODowNiswMTowMEVm3zEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTJUMTY6MTg6MDYrMDE6MDA0O2eNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==' alt='1'/>
                        Cart
                    </h3>
                    <div className={classes.countItems}>{props.items.length}</div>
                </div>
                <div className={classes.cartContent}>
                    {props.items.length ? getUniqueItems().map(item =>
                        <ProductItem item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>    
                    ) : <h4> </h4>}
                </div>
                <div className={classes.cartFooter}>
                    <div>
                        <div className={classes.subtotal}>
                            SUBTOTAL:
                        </div>
                        <div className={classes.paycheckPrice}>
                            $ {props.items.length ? getPaycheckPrice() : 0}
                        </div>
                    </div>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;