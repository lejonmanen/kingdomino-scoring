import React, { Component } from 'react';
import './App.css';
import Player from './Player.js'


class App extends Component {
	state = {
		players: [
			{
				name: 'Player 1',
				areas: [
					{
						terrain: 'Meadow',
						crowns: 0,
						tiles: 3
					},
					{
						terrain: 'Forest',
						crowns: 2,
						tiles: 2
					}
				],
				castleCentered: false,
				allTilesPlaced: false
			},
			{
				name: 'Player 2',
				areas: [
					{
						terrain: 'Meadow',
						crowns: 1,
						tiles: 1
					}
				],
				castleCentered: false,
				allTilesPlaced: false
			}
		]
	}
	makeNewPlayer = () => ({
		name: 'Player ' + (this.state.players.length + 1),
		areas: [],
		castleCentered: false,
		allTilesPlaced: false
	})
	render() {
		const handleClick = e => this.setState({ players: [...this.state.players, this.makeNewPlayer()] })
		const maybeButton = this.state.players.length < 4 ?
			<button onClick={handleClick}>Add new player</button> : null

		return (
			<div className="app">
				{this.state.players.map(p => (<Player data={p} key={p.name} />))}

				{maybeButton}
			</div>
		);
	}
}

export default App;
