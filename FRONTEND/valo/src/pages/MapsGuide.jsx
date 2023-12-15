import React from 'react'
import classes from '../styles/pages/MapsGuide.module.css'
import { useState } from 'react'
import MapsData from '../utils/data/MapsData'
import MapCard from '../components/MapCard'
import Modal from '../components/UI/Modal'
import MapItem from '../components/MapItem'

const MapsGuide = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [data] = useState(MapsData)
    const [openedMap, setOpenedMap] = useState(null)

    const openMap = (map) => {
        setModalOpen(true)
        setOpenedMap(map)
    }

    return (
        <div className={classes.maps}>
            <div className={classes.container1}>
                {data.maps.slice(4, 8).map((map, i) => 
                    <MapCard map={map} key={i} onClick={() => openMap(map)}/>    
                )}
            </div>
            <div className={classes.container2}>
                {data.maps.slice(0, 4).map((map, i) => 
                    <MapCard map={map} key={i} onClick={() => openMap(map)}/>    
                )}
            </div>
            <Modal isOpen={modalOpen} setModalOpen={setModalOpen}>
                {openedMap ? <MapItem map={openedMap}/> : null}
            </Modal>
        </div>
    )
}

export default MapsGuide