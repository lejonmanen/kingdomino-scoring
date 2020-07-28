import React, {Component} from 'react'
import Emoji from './Emoji.js'
import Editable from './Editable.js'
import Area from './Area.js'

class Player extends Component {
	constructor(props) {
		super(props)
		let {name, areas, castleCentered, allTilesPlaced} = props.data
		let score = areas.reduce( (acc, cur) => acc + cur.crowns*cur.tiles, 0 )
		this.state = {
			name, areas, castleCentered, allTilesPlaced,
			finalScore: score
		}
	}
	// componentDidUpdate(prevProps, prevState) {
	// 	if( this.nameRef.current !== null ) this.nameRef.current.focus()
	// }
	updateScore = scoreDiff => this.setState({finalScore: this.state.finalScore + scoreDiff})

	render() {
		// const pName = <Fragment> {editName} {displayName} </Fragment>
		const pName = <Editable
			value={this.state.name}
			change={value => this.setState({name: value})} />

		return (
			<div>
				{pName}

				<div className="areas">
					<div>Terrain</div>
					<div><Emoji symbol="👑" label="crown"/></div>
					<div><Emoji symbol="⬜" label="empty checkbox" /></div>
					<div>Score</div>

				{this.state.areas.map((area, i) => (
						<Area area={area}
							key={area.terrain+area.crowns+area.tiles+i}
						 	update={this.updateScore} />
					))}
					<button onClick={e => this.setState({areas: [...this.state.areas, {terrain: 'Field', crowns: 0, tiles: 0} ]})}>Add area</button>
				</div>

				<div>
					<label> <input type="checkbox"
							onChange={e => this.updateCastleScore(e.target.checked)} />
						Castle centered +{this.castleBonus}p </label>
				</div>

				<div>
					<label> <input type="checkbox"
						onChange={e => this.updateTilesScore(e.target.checked)} />
					All tiles placed +{this.tilesBonus}p </label>
				</div>

				<div>Final score: {this.state.finalScore}</div>
			</div>
		)
	}
	castleBonus = 10
	tilesBonus = 5
	//🗹☐
	updateCastleScore = on => {
		let newScore = this.state.finalScore + (on ? 1 : -1) * this.castleBonus
		this.setState({castleCentered: on, finalScore: newScore})
	}
	updateTilesScore = on => {
		let newScore = this.state.finalScore + (on ? 1 : -1) * this.tilesBonus
		this.setState({allTilesPlaced: on, finalScore: newScore})
	}
}


export default Player
