import React from 'react';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    if (playerName.length > 0 && playerName.length < 30) {
      e.target.playerName.value = '',
      Players.insert({
        name: playerName,
        score: 0
      });
    } else {
      alert('Name must be greater than 0 characters, or less than 20.');
    }
  };
  render () {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}
