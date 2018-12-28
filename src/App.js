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
	render() {
		return (
			<div className="app">
				{this.state.players.map(p => (<Player data={p} key={p.name} />))}
			  	{/*<div>
			  		<h1>Player 1</h1>
			  		<input type="text" value="Player 1"/>
			  		<div className="areas">
			  			<div>Terrain</div>
			  			<div><Emoji symbol="👑" label="crown"/></div>
			  			<div><Emoji symbol="⬜" label="empty checkbox" /></div>
			  			<div>Score</div>

			  			<div>
			  				<select>
			  					<option selected>Meadow</option>
			  					<option>Forest</option>
			  				</select>
			  			</div>
			  			<div><input type="text" value="0" /></div>
			  			<div><input type="text" value="3" /></div>
			  			<div className="score">0</div>

			  			<div>
			  				<select>
			  					<option>Meadow</option>
			  					<option selected>Forest</option>
			  				</select>
			  			</div>
			  			<div><input type="text" value="2" /></div>
			  			<div><input type="text" value="2" /></div>
			  			<div className="score">4</div>
			  		</div>
			  		<div><label>🗹 Castle centered</label></div>
			  		<div><label>☐ All tiles placed</label></div>
			  		Final score: 9
			  	</div>
			  	<div>
			  		<h1>Player 2</h1>

			  		<div className="areas">
			  			<div>Terrain</div>
			  			<div><Emoji symbol="👑" label="crown"/></div>
			  			<div><Emoji symbol="⬜" label="empty checkbox" /></div>
			  			<div>Score</div>

			  			<div>
			  				<select>
			  					<option selected>Meadow</option>
			  					<option>Forest</option>
			  				</select>
			  			</div>
			  			<div><input type="text" value="1" /></div>
			  			<div><input type="text" value="1" /></div>
			  			<div className="score">1</div>
			  		</div>
			  		Final score: 1
			  		<button className="btn-light">Add new scoring area</button>
			  	</div>
			  	<div>
			  		<h1>Player 3</h1>
			  	</div>
			  	<div>
			  		<h1>Player 4</h1>
			  	</div>*/}
			</div>
		);
	}
}

export default App;
