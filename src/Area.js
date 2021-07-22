import React, { useState, useRef } from 'react'
import getTabindex from './tabindex.js'

const TERRAINS = ['Field', 'Forest', 'Sea', 'Meadow', 'Swamp', 'Mine']
const Area = ({ area, update }) => {
	const [terrain, setTerrain] = useState(area.terrain)
	const [crowns, setCrowns] = useState(area.crowns)
	const [tiles, setTiles] = useState(area.tiles)
	const ref1 = useRef(null)
	const ref2 = useRef(null)

	return (
		<>
			<div>
				<select value={terrain}
					onChange={e => setTerrain(e.target.value)}>
					{TERRAINS.map(t => (<option key={t}>{t}</option>))}
				</select>
			</div>

			<div><input type="number" value={crowns} min="0"
				tabIndex={getTabindex()}
				ref={ref1}
				onFocus={() => ref1.current.select()}
			 	onChange={e => {
					setCrowns(e.target.value);
					update((e.target.value - crowns) * tiles);
				}}/></div>

			<div><input type="number" value={tiles} min="0"
				tabIndex={getTabindex()}
				ref={ref2}
				onFocus={() => ref2.current.select()}
			 	onChange={e => {
					setTiles(e.target.value)
					update((e.target.value - tiles) * crowns)
				}} /></div>

			<div className="score">{crowns * tiles}</div>
		</>
	)
}

export default Area
