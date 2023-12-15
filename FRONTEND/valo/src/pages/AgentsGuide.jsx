import React from 'react'
import classes from '../styles/pages/AgentsGuide.module.css'
import AgentCard from '../components/AgentCard'
import AgentsData from '../utils/data/AgentsData'
import { useState } from 'react'
import arrow from '../images/arrow.png'

const AgentsGuide = () => {
  const [indx, setIndx] = useState(0)
  const data = useState(AgentsData)
  const [currentAgent, setCurrentAgent] = useState(data[0].agents[indx])

  const getSlideValue = () => {
    let slide = 0
    for(let i = 0; data[0].agents[i] !== currentAgent; i++) {
      slide += 1106
    }
    return slide
  }

  const handleInc = () => {
    if (indx !== 19) {
      setIndx(indx+1)
      setCurrentAgent(data[0].agents[indx+1])
    }
    else {
      setIndx(0)
      setCurrentAgent(data[0].agents[0])
    }
  }

  const handleDecr = () => {
    if (indx !== 0) {
      setIndx(indx-1)
      setCurrentAgent(data[0].agents[indx-1])
    }
    else {
      setIndx(19)
      setCurrentAgent(data[0].agents[19])
    }
  }

  const handleDotSelect = (agent, i) => {
    setCurrentAgent(agent)
    setIndx(i)
  }

  return (
    <div className={classes.agentsGuide}>
        <div className={classes.agentList} style={{position: "absolute", left: `-${getSlideValue()}px`, transition: "0.3s"}}>
          {data[0].agents.map((agent, i) => 
            <AgentCard agent={agent} key={i}/>  
          )}
        </div>
        <div className={classes.panel}>
          <div className={classes.dots}>
            {data[0].agents.map((agent, i) => 
              (<div 
                key={i}
                className={agent === currentAgent ? [classes.dot, classes.active].join(" ") : classes.dot} 
                onClick={() => handleDotSelect(agent, i)}
              ></div>)  
            )}
          </div>
          <div className={classes.arrows}>
              <img src={arrow} alt="1" className={classes.leftArr} onClick={handleDecr}/>
              <img src={arrow} alt="1" className={classes.rigthArr} onClick={handleInc}/>
          </div>
        </div>
    </div>
  )
}

export default AgentsGuide