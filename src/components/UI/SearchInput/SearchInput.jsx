import React from "react";      
import classes from './SearchInput.module.css'

const SearchInput = (props) => {

    return (
        <div className={classes.searchInput}>
            <input 
                className={classes.input} 
                {...props}
            />
        </div>
    )
}

export default SearchInput; 