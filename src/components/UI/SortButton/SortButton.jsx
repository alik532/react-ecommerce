import React from "react";
import classes from './SortButton.module.css'

const SortButton = ({children} , props) => {


    return (
        <button className={classes.sortButton}>
            {children}
        </button>
    )
}

export default SortButton;