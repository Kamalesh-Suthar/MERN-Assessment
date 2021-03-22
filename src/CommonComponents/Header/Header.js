import React from 'react'
import classes from './Header.module.css'
import {Link} from "react-router-dom";

const Header = (props) => {

    const generateSessionCode = () => {
        const sessionCode =  Math.floor((Math.random()*1000000)+1)
        return sessionCode
    }

    const DisplaySessionCode = () => {
        const sessionCode = generateSessionCode()
        window.localStorage.setItem('session', JSON.stringify(sessionCode))
        alert('Please Remember Session Code: ' + sessionCode)
    }

    const fetchResults = (e) => {
        let search = e.target.value
        if(search.length > 1) {
            fetch(`http://localhost:3000/teamId/${search}`).then((res) => {
                res.json().then((result) => {
                    props.history.push(`/team-players/${result.team}`)
                }).catch((err) => {
                    console.log(err)
                })
            })
        } else if(search.length <= 1 && e.keyCode === 13) {
            e.target.value = ''
            alert('Please enter a valid team name')
            props.history.push(`/`)
        } else if(search.length == 0) {
            props.history.push(`/`)
        }
    }

    return(
        <div className={classes.MainContainer}>
            <div className={classes.LeftContainer}>
                <Link to={'/'}>
                    <img className={classes.Logo} src={'https://www.theindianwire.com/wp-content/uploads/2020/08/117799520_335388611177621_153617462948510223_n.jpg'} alt={'Logo-IPL'}/>
                </Link>
            </div>
            <div className={classes.RightSection}>
                <div className={classes.FilterContainer}>
                    <input onKeyUp={(e) => {
                        fetchResults(e)
                    }} className={classes.InputField} type={'text'} placeholder={'Search'} name={'search-filter'}/>
                </div>
                <span onClick={() => DisplaySessionCode()} className={classes.CodeGenerator}>
                    <img className={classes.CodeGeneratorImage} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1200px-Question_Mark.svg.png'} alt={''}/>
                </span>
            </div>
        </div>
    )
}

export default Header