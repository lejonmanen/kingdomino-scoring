import React, {Component, Fragment} from 'react'
import Emoji from './Emoji.js'

class Player extends Component {
	constructor(props) {
		super(props)
		let {name, areas, castleCentered, allTilesPlaced} = props.data
		this.state = {
			name, areas, castleCentered, allTilesPlaced
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				----<input type="text" value="Player 1"/>
				<div className="areas">
				<div>Terrain</div>
				<div><Emoji symbol="👑" label="crown"/></div>
				<div><Emoji symbol="⬜" label="empty checkbox" /></div>
				<div>Score</div>

				{this.state.areas.map(area => (
					<Area area={area} key={area.terrain+area.crowns+area.tiles}/>
				))}

				{/*<div>
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
				<div className="score">4</div>*/}
				</div>
				<div><label>🗹 Castle centered</label></div>
				<div><label>☐ All tiles placed</label></div>
				Final score: 9
			</div>
		)
	}
}
const TERRAINS = ['Field', 'Forest', 'Sea', 'Meadow', 'Swamp', 'Mine']
class Area extends Component {
	constructor(props) {
		super(props)
		let {terrain, crowns, tiles} = props.area
		this.state = {
			terrain: terrain,
			crowns: crowns,
			tiles: tiles
		}
	}
	render = () => (
		<Fragment>
			<div>
				<select value={this.state.terrain}>
					{TERRAINS.map(t => (<option key={t}>{t}</option>))}
				</select>
			</div>
			<div><input type="text" value={this.state.crowns} /></div>
			<div><input type="text" value={this.state.tiles} /></div>
			<div className="score">{this.state.crowns * this.state.tiles}</div>
		</Fragment>
	)
}

export default Player
