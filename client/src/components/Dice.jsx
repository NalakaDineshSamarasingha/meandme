import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './DiceAnimation.css'

function Dice({icon1,icon2,icon3,icon4,icon5,icon6}) {
  return (
    <div>
         
            <div className="skill-container">
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={icon1} color="#61dbfb"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={icon2} color="#f06529"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={icon3} color="#28a4d9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={icon4} color="#efd81d"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={icon5} color="#61dbfb"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={icon6} color="#ec4d28"/>
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default Dice