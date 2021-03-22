import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';


import Header from "./CommonComponents/Header/Header";
import Footer from "./CommonComponents/Footer/Footer";
import Home from "./Containers/Home/Home";
import Team from "./Containers/Team/Team";
import PlayerDetails from "./Containers/PlayerDetails/PlayerDetails";
import TeamPLayers from "./Containers/TeamPlayers/TeamPLayers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Route path={'/'} component={Header}/>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/team/:id'} render={(props) => <Team {...props}/>}/>
          <Route exact path={'/player/:id'} render={(props) => <PlayerDetails {...props}/>}/>
          <Route exact path={'/team-players/:id'} render={(props) => <TeamPLayers {...props}/>}/>
          <Route path={'/'} component={Footer}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
