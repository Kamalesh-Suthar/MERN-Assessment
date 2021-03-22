import React from 'react'
import classes from './PlayerCards.module.css'


class PlayerCards extends React.Component {

    state = {
        data : undefined
    }

    getDetails = () => {
        console.log(this.props.id)
        fetch(`http://localhost:3000/team-details/${this.props.id}`)
            .then((res) => {
                res.json().then((result) => {
                    this.setState({
                        data: result
                    })
                })
            }).catch(err => console.log(err))
    }

    handleDetailsPage = (data) => {
        this.props.history.push(`/player/${data._id}`)
    }

    listPlayers = (data) => {
        return (
            <div onClick={() => {
                this.handleDetailsPage(data)
            }} className={classes.PlayerContainer}>
                <div className={classes.PlayerImage}>
                    <img className={classes.Image} src={data.photo} alt={data.playerName} />
                </div>
                <div className={classes.PlayerDescription}>
                    <div className={classes.PlayerName}>{data.playerName}</div>
                    <span className={classes.PlayerType}>{data.description}</span>
                    <span className={classes.PlayerPrice}>Rs. {data.price}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getDetails()
    }

    render() {
        return(
            <div className={classes.MainContainer}>
                {this.state.data ? <>
                    {
                        this.state.data[1].playerDetails.map((data) => this.listPlayers(data))
                    }
                </> : null}
            </div>
        )
    }
}

export default PlayerCards