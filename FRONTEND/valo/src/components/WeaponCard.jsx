import React from 'react'
import classes from '../styles/components/WeaponCard.module.css'

const WeaponCard = ({weapon}) => {
  return (
    <div className={classes.weaponCard}>
        <div className={classes.mainInfo}>
            <div className={classes.weaponTitle}>
                {weapon.weapon_name}
            </div>
            <div className={classes.category}>
                {weapon.weapon_category_machine_name}
            </div>
        </div>
        <img src={weapon.weapon_asset.url} alt="img" className={classes.img}/>
        <div className={classes.tagline}>
            {weapon.weapon_tagline}
        </div>
        <div className={classes.description}>
            <div className={classes.decor}>+</div>
            <div>
            {weapon.weapon_hover_description}
            </div>
        </div>
    </div>
  )
}

export default WeaponCard