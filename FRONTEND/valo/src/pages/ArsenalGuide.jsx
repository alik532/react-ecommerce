import React from 'react'
import classes from '../styles/pages/ArsenalGuide.module.css'
import { useState } from 'react'
import ArsenalData from '../utils/data/ArsenalData'
import WeaponList from '../components/WeaponList'
import Selector from '../components/UI/Selector'

const ArsenalGuide = () => { 
    
    const [data] = useState(ArsenalData)
    
    const [query, setQuery] = useState("All")

    const selectorOptions = data.weapon_categories_dropdown.weapon_category.map(item => item.weapon_category_name)
    const getFilteredWeapons = () => {
        if (query === 'All') {
            return data.weapons
        }
        else {
            return [...data.weapons.filter(weapon => weapon.weapon_category_machine_name.toLowerCase() === query.toLowerCase())]
        }
    }

    return (
        <div className={classes.arsenal}>
            <div className={classes.selector}>
                <h1 className={classes.title}>Choose your weapon</h1>
                <Selector options={selectorOptions} setQuery={setQuery} query={query}/>
            </div>
            <div className={classes.container}>
                <WeaponList weapons={getFilteredWeapons()}/>
            </div>
        </div>
  )
}

export default ArsenalGuide