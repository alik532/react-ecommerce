import React from 'react'
import classes from '../styles/components/MapCard.module.css'

const MapCard = (props) => {
  return (
    <div {...props} className={classes.mapCard} style={{backgroundImage: `url(${props.map.gallery_images[0].map_image.url})`}}>
        <h1 className={classes.title}>
            {props.map.map_name}
        </h1>
    </div>
  )
}

export default MapCard