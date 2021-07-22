const getTabindex = (() => {
	let index = 0;
	return (reset=false) => {
		if( reset ) index = 0;
		return index++
	}
})();


export default getTabindex
