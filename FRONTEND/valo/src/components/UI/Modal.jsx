import React from 'react'
import classes from '../../styles/components/Modal.module.css'

const Modal = ({children, isOpen, setModalOpen}) => {



    return (
        <div className={classes.modal} style={isOpen ? {display: "initial"} : {display: "none"}} onClick={() => setModalOpen(false)}>
            <div className={classes.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
  )
}

export default Modal