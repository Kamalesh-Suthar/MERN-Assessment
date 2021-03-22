import React from 'react'
import { useState } from 'react'
import classes from './Team.module.css'
import TeamDescription from "../../Components/TeamDescription/TeamDescription";
import PlayerListings from "../../Components/PlayerListings/PlayerListings";


const Team = (props) => {

    const [visible, changeVisibility] = useState(false)

    const handleBtnClick = () => {
        changeVisibility(!visible)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const uniqueCode = window.localStorage.getItem('session')
        let sessionCodeEntered = document.forms[0].elements.sessionCode[0]
        console.log(sessionCodeEntered)
        if(uniqueCode == sessionCodeEntered) {
            console.log('same')
        }
    }

    return(
        <>
            { visible ?
                <div className={classes.FormMainContainer}>
                    <form onSubmit={(e) => {
                            handleSubmit(e)
                        }
                    } name={'newForm'} className={classes.FormContainer} >
                        <input className={classes.FormInputFields} type="text" name="sessionCode" placeholder="Session Code" required/>
                        <input className={classes.FormInputFields} type="text" name="playerName" placeholder="Enter Player Name" required/>
                        <input className={classes.FormInputFields} type="number" name="price" placeholder="Player Price min:1cr max: 18cr" min="1" max="18" required/>
                        <label className={classes.label}>
                            <span>Playing Status</span>
                            <input type="radio" name="isPlaying" value="true" required/> yes
                            <input type="radio" name="isPlaying" value="false" required/> No
                        </label>
                        <input className={classes.FormInputFields} type="text" name="position" placeholder="position"required/>
                        <input className={classes.FormInputFields} type="text" name="role" placeholder="Player Role"required/>
                        <input className={classes.FormInputFields} type="text" name="image" placeholder="Enter player Image Url"required/>
                        <input className={classes.FormInputFields} type="submit" name="add player" value="Add Player"/>
                    </form>
                </div>
            :
                <div className={classes.MainContainer}>
                    <TeamDescription {...props.match.params} />
                    <PlayerListings {...props.match.params} {...props} />
                </div>
            }
            { !visible ?
                <button onClick={() => handleBtnClick()} className={classes.AddPlayerBtn} type={'none'}>Add Player</button> : ''
            }
        </>
    )
}

export default Team