import React from 'react'
import classes from './TeamPlayers.module.css'
import PlayerCards from "../../Components/PlayerCards/PlayerCards";


class TeamPLayers extends React.Component {

    state = {
        data : undefined
    }

    getDetails = () => {
        console.log(this.props)
        fetch(`http://localhost:3000/team-details/${this.props.match.params.id}`)
            .then((res) => {
                res.json().then((result) => {
                    this.setState({
                        data: result
                    })
                })
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        this.getDetails()
    }

    render() {
        return(
            <div>
                {this.state.data ? <div className={classes.MainContainer}>
                    <PlayerCards  id={this.props.match.params.id} {...this.props}/>
                </div> : null}
            </div>
        )
    }
}



export default TeamPLayers