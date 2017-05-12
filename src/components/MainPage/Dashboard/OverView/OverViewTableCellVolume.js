import React from 'react'
import todoStyle from "./OverView.css"

export default class OverViewTableCellVolume extends React.Component{

	constructor(props) {
		super(props);
		
	}

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		let totalVolume = 0;
		let list = this.props.dataCenter.zones;
		for (let i=0; i<list.length; i++) {
			totalVolume += list[i].volume;
		}
		return (
			<div style={{"margin":"9px","borderRadius": "25px", "padding":"9px", "backgroundColor":"#E1E1E1","border": "1px solid black"}}>
				<div style={{"backgroundColor":"#E1E1E1"}}>Volume Details:</div>
				<div>
					<li>Volume:{totalVolume}</li>
				</div>
      		</div>
		)
	}
}


