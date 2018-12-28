import React, {Component} from 'react'

class Editable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false,
			pleaseSelect: false,
			value: props.value
		}
		this.myRef = React.createRef()
	}
	whenBlur = e => {
		this.setState({editing: false})
		this.props.change(e.target.value)
	}
	render() {
		if( this.state.editing )
			return (
				<input
					className="h1"
					type="text"
					value={this.state.value}
					ref={this.myRef}
					onChange={e => this.setState({value: e.target.value})}
					onBlur={this.whenBlur}/>
			)
		else
			return (
				<h1
					onClick={e => this.setState({editing: true, pleaseSelect: true})}
					> {this.props.value} </h1>
			)
	}
	componentDidUpdate() {
		if( this.myRef.current ) {
			if( window.getSelection && this.state.pleaseSelect ) {
				this.setState({pleaseSelect: false})
				this.myRef.current.select()
			} else {
				this.myRef.current.focus()
			}
		}
	}
}

export default Editable
