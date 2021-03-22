import React from 'react'
import classes from './Home.module.css'

import TeamDetails from "../../Components/TeamDetails/TeamDetails";


class Home extends React.Component {

    state = {
        data: [],
        players: false
    }

    getData = () => {
        fetch('http://localhost:3000/')
            .then((res) => {
                res.json().then((array) => {
                    this.setState({
                        data: array
                    })
                })
            })
    }

    componentWillMount() {
        this.getData()
    }

    render() {
        return(
            <div className={classes.MainContainer}>
                {
                    this.state.data.map((data) => {
                        return <TeamDetails {...data} {...this.props} />
                    })
                }
            </div>
        )
    }
}


export default Home
