import React, { Component }  from 'react';

// import Stopwatch from '../components/Stopwatch.js';
import Header from '../components/Header.js';
import AddPlayerForm from '../components/AddPlayerForm.js';
import Player from '../components/Player.js';

const INITIAL_STATE = {
  players: [
    {
      name: 'Jim Hoskins',
      score: 31,
    },
    {
      name: 'Andrew Chalkley',
      score: 20,
    },
    {
      name: 'Alena Holligan',
      score: 50,
    },
  ],
}

export default class Scoreboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign(INITIAL_STATE);

    this.onScoreChange = this.onScoreChange.bind(this);
    this.onAddPlayer = this.onAddPlayer.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);

  }

  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer(name) {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  };

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
};
