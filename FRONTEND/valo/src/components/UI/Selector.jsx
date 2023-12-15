import React from 'react'
import classes from '../../styles/components/Selector.module.css'

const Selector = ({options, setQuery, query}) => {

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <select className={classes.selector} onChange={handleChange} value={query}>
        <option className={classes.option} value="All">All</option>
        {options.map((option, indx) => (
          <option 
            key={indx} 
            className={classes.option} 
            value={option}
          >
            {option}
          </option>
        ))}
    </select>
  )
}

export default Selector