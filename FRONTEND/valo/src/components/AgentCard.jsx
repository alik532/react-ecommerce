import React from 'react'
import classes from '../styles/components/AgentCard.module.css'

const AgentCard = ({agent}) => {
  return (
    <div className={classes.card}>
        <div>
            <img src={agent.agent_image.url} alt="1" className={classes.image}/>
        </div>
        <div className={classes.info}>
            <div className={classes.main}>
                <div className={classes.title}>
                    {agent.title}
                </div>
                <div className={classes.role}>
                    {agent.role}
                </div>
            </div>
            <div className={classes.description}>
                {agent.description}
            </div>
            <button className={classes.button}>Explore</button>
        </div>
    </div>
  )
}

export default AgentCard