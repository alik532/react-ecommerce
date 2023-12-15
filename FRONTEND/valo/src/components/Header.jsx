import React from 'react'
import logo from '../images/headLogo.png'
import classes from '../styles/components/Header.module.css'
import titleLogo from '../images/titleLogo.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <a href='/'><img src={logo} alt="logo" className={classes.logo}/></a>
      <a href='/' className={classes.headerLink}>Home</a>
      <a href="/" className={classes.headerLink}>Quiz</a>
      <img src={titleLogo} alt="title" className={classes.titleLogo}/>
    </div>
  )
}

export default Header