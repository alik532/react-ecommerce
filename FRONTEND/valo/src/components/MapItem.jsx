import React from 'react'
import classes from '../styles/components/MapItem.module.css'

const MapItem = ({map}) => {
  return (
    <div className={classes.mapItem}>
        <h1 className={classes.title}>
            {map.map_name}
        </h1>
        <div className={classes.pictures}>
            {map.gallery_images.map(map => 
                <img className={classes.img} src={map.map_image.url} alt="imag" />    
            )}
        </div>
        <div className={classes.description}>
            {map.map_description}
        </div>
    </div>
  )
}

export default MapItem