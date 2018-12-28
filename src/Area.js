import React, {Component, Fragment} from 'react'

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
	render = () => {
		return (
			<Fragment>
				<div>
					<select value={this.state.terrain}
						onChange={e => this.setState({terrain: e.target.value})}>
						{TERRAINS.map(t => (<option key={t}>{t}</option>))}
					</select>
				</div>

				<div><input type="text" value={this.state.crowns}
				 	onChange={e => this.setState( {crowns: e.target.value},
						this.props.update((e.target.value - this.state.crowns) * this.state.tiles) )}/></div>

				<div><input type="text" value={this.state.tiles}
				 	onChange={e => this.setState({tiles: e.target.value},
						this.props.update((e.target.value - this.state.tiles) * this.state.crowns) )} /></div>

				<div className="score">{this.state.crowns * this.state.tiles}</div>
			</Fragment>
		)
	}
}

export default Area
