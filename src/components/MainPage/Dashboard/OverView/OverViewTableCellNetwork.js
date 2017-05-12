import React from 'react'
import todoStyle from "./OverView.css"

export default class OverViewTableCellNetwork extends React.Component{

	constructor(props) {
		super(props);
		
	}

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		let IPs = [];
		let list = this.props.dataCenter.zones;
		for (let i=0; i<list.length; i++) {
			IPs.push(list[i].IP);
		}
		return (
			<div style={{"margin":"9px","borderRadius": "25px", "padding":"9px", "backgroundColor":"#E1E1E1","border": "1px solid black"}}>
				<div style={{"backgroundColor":"#E1E1E1"}}>Network Details (IPs):</div>
				<ul>
					{
						IPs.map((pc, index) => {
				            return (	
				            	<li>{pc}</li>
				            )
						})
					}
					
				</ul>
      		</div>
		)
	}
}


