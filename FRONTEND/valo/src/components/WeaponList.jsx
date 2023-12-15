import React from 'react'
import classes from '../styles/components/WeaponList.module.css'
import WeaponCard from './WeaponCard'

const WeaponList = ({weapons}) => {
  return (
    <div className={classes.weaponList}>
        {weapons.map((weapon, indx) => <WeaponCard key={indx} weapon={weapon}/>)}
    </div>
  )
}

export default WeaponList