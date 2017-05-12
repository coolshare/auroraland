import React from 'react'
import todoStyle from "./OverView.css"

export default class OverViewTableCellNode extends React.Component{

	constructor(props) {
		super(props);
		
	}

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		
		return (
			<div style={{"margin":"9px","borderRadius": "25px", "padding":"9px", "backgroundColor":"#E1E1E1","border": "1px solid black"}}>
				<div style={{"backgroundColor":"#E1E1E1"}}>Node Details:</div>
				<div>
					<li>Number of nodes:{this.props.dataCenter.zones.length}</li>
				</div>
      		</div>
		)
	}
}


