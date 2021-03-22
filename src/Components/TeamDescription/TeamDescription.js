import React from 'react'
import classes from './TeamDescription.module.css'


class TeamDescription extends React.Component {

    state = {
        data: undefined
    }

    getDetails = () => {
        fetch(`http://localhost:3000/team-details/${this.props.id}`)
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
                            <img className={classes.TeamImage} src={this.state.data[0].teamDetails.image} alt={this.state.data[0].teamDetails.name} />
                        </div>
                        <div className={classes.RightContainer}>
                            <span className={classes.TeamName}>{this.state.data[0].teamDetails.name} - {this.state.data[0].teamDetails.short}</span>
                            <span className={classes.PLayerCount}>Player Count: {this.state.data[1].playerDetails.length}</span>
                            <span className={classes.TopBatsman}>Top Batsman: {this.state.data[0].teamDetails.topBatsman}</span>
                            <span className={classes.TopBowler}>Top Bowler: {this.state.data[0].teamDetails.topBowler}</span>
                        </div>
                    </div> : null}
            </>
        )
    }
}

export default TeamDescription