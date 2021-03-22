import React from 'react'
import classes from './TeamDetails.module.css'

const TeamDetails = (props) => {

    const handleTeam = () => {
        props.history.push(`/team/${props.id}`)
    }

    return(
        <div onClick={() => {
            handleTeam()
        }} className={classes.MainContainer}>
            <div className={classes.ImageContainer}>
                <img className={classes.TeamImage} src={props.image} alt={props.name} />
            </div>
            <div className={classes.TeamNameContainer}>
                <span className={classes.TeamName}>{props.name}</span>
                <span className={classes.ShortTeamName}>{props.short}</span>
            </div>
        </div>
    )
}

export default TeamDetails