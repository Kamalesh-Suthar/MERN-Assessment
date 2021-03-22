import React from 'react'
import classes from './PlayerDetails.module.css'


class PlayerDetails extends React.Component {

    state = {
        data: undefined
    }

    getDetails = (id) => {
        fetch(`http://localhost:3000/player/${this.props.match.params.id}`)
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
            <>
                {this.state.data ?
                    <div className={classes.MainContainer}>
                        <div className={classes.ImageContainer}>
                            <img className={classes.PlayerImage} src={this.state.data[1].playerDetails.photo} alt={this.state.data[1].playerDetails.name} />
                        </div>
                        <div className={classes.RightSection}>
                            <div className={classes.PlayerName}>{this.state.data[1].playerDetails.playerName}</div>
                            <div className={classes.TeamName}>{this.state.data[0].teamName} - {this.state.data[0].shortName}</div>
                            <div className={classes.PlayerPrice}>Price: Rs. {this.state.data[1].playerDetails.price}</div>
                            <div className={classes.PlayingStatus}>{this.state.data[1].playerDetails.description}</div>
                            <div className={classes.PlayerPosition}>{this.state.data[1].playerDetails.position}</div>
                        </div>
                    </div>
                : null}
            </>
        )
    }
}

export default PlayerDetails