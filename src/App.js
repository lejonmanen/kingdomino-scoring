import React, { Component } from 'react';
import './App.css';
import Player from './Player.js'


class App extends Component {
	state = {
		players: [
			{
				name: 'Player 1',
				areas: makeAreas(),
				castleCentered: false,
				allTilesPlaced: false
			},
			{
				name: 'Player 2',
				areas: makeAreas(),
				castleCentered: false,
				allTilesPlaced: false
			}
		]
	}
	makeNewPlayer = () => ({
		name: 'Player ' + (this.state.players.length + 1),
		areas: makeAreas(),
		castleCentered: false,
		allTilesPlaced: false
	})
	render() {
		const handleClick = e => this.setState({ players: [...this.state.players, this.makeNewPlayer()] })
		const maybeButton = this.state.players.length < 4 ?
			<button onClick={handleClick}>Add new player</button> : null

		return (
			<div className="app">
				<div className="grid">
					{this.state.players.map(p => (<Player data={p} key={p.name} />))}
				</div>
				<div>
					{maybeButton}
				</div>
			</div>
		);
	}
}

function makeAreas() {
	return ['Field', 'Forest', 'Sea', 'Meadow', 'Swamp', 'Mine'].map(t => ({
		terrain: t, crowns: 0, tiles: 0
	}))
}


export default App;
