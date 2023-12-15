import React from 'react'
import logo from '../images/logo.png'
import classes from '../styles/pages/Home.module.css'
import agentsImg from '../images/agentsPreview.png'
import arsenalImg from '../images/arsenalPreview.png'
import mapsImg from '../images/mapsPreview.png'
import esportsImg from '../images/esportsPreview.jpeg'

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.title}>
          Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games
      </div>      
      <div className={classes.decorContainer}>
        <div className={classes.linkDesk}>
          <a href="/arsenal" className={classes.category}>Arsenal</a>
          <a href="/maps" className={classes.category}>Maps</a>
        </div>
        <img src={logo} alt="logo" className={classes.logo}/>
        <div className={classes.linkDesk}>
          <a href="/agents" className={classes.category}>Agents</a>
          <a href="/" className={classes.category}>E-Sports</a>
        </div>
        <div className={classes.categories}>
          <a href='/arsenal' className={classes.imgLink}>
            <img src={arsenalImg} alt="arsenal" className={classes.categoryImg}/>
            </a>
          <a href='/maps' className={classes.imgLink}>
            <img src={mapsImg} alt="maps" className={classes.categoryImg}/>
          </a>
          <div className={classes.gap}></div>
          <a href='/agents' className={classes.imgLink}>
            <img src={agentsImg} alt="agents" className={[classes.categoryImg, classes.agent].join(" ")}/>
          </a>
          <a href='/' className={classes.imgLink}>
            <img src={esportsImg} alt="esports" className={classes.categoryImg}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home