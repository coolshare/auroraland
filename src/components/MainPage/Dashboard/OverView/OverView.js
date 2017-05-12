import React from 'react'
import {connect} from 'react-redux'
import cs from '../../../../services/CommunicationService'
import axios from 'axios'
import todoStyle from "./OverView.css"
import OverViewTableCellNode from "./OverViewTableCellNode"
import OverViewTableCellVolume from "./OverViewTableCellVolume"
import OverViewTableCellNetwork from "./OverViewTableCellNetwork"

const data = {
	"DataCenters":[
		{"name":"GCP", 
			"zones":[
				{"name":"US East Coast", "geo":[42.245193, -72.637846],"IP":"1.2.3.4", "volume":525, "bandwidth":25},
				{"name":"US Wast Coast", "geo":[37.324813, -122.035319],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"US South Coast", "geo":[27.156504, -80.858391],"IP":"1.2.3.4", "volume":225, "bandwidth":25},
				{"name":"Canada", "geo":[51.459170, -107.758015],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"China East Coast", "geo":[31.322285, 121.379234],"IP":"1.2.3.4", "volume":525, "bandwidth":25},
				{"name":"Westen China", "geo":[39.280297, 75.061200],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Southen China", "geo":[39.280297, 75.061200],"IP":"1.2.3.4", "volume":125, "bandwidth":25},
				{"name":"Nothen China", "geo":[40.534210, 103.949299],"IP":"1.2.3.4", "volume":225, "bandwidth":25},
				{"name":"Singapore", "geo":[1.353054, 103.858709],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Central India", "geo":[23.625009, 77.735808],"IP":"1.2.3.4", "volume":525, "bandwidth":25},
				{"name":"Southen India", "geo":[8.929630, 77.365279],"IP":"1.2.3.4", "volume":325, "bandwidth":25}
			]	
		},
		{"name":"AWS", 
			"zones":[
				{"name":"US East Coast", "geo":[42.245293, -72.637846],"IP":"1.2.3.4", "volume":125, "bandwidth":25},
				{"name":"US South Coast", "geo":[27.151504, -80.858391],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Canada", "geo":[51.459270, -107.758015],"IP":"1.2.3.4", "volume":225, "bandwidth":25},
				{"name":"China East Coast", "geo":[31.322385, 121.379234],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Westen China", "geo":[39.280497, 75.061200],"IP":"1.2.3.4", "volume":525, "bandwidth":25},
				{"name":"Southen China", "geo":[39.280497, 75.061200],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Nothen China", "geo":[40.534510, 103.949299],"IP":"1.2.3.4", "volume":225, "bandwidth":25},
				{"name":"Central India", "geo":[23.625309, 77.735808],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Southen India", "geo":[8.929330, 77.365279],"IP":"1.2.3.4", "volume":525, "bandwidth":25}
			]	
		},
		{"name":"LINDODE", 
			"zones":[
				{"name":"US East Coast", "geo":[42.245193, -72.636846],"IP":"1.2.3.4", "volume":225, "bandwidth":25},
				{"name":"US Wast Coast", "geo":[37.324813, -122.036319],"IP":"1.2.3.4", "volume":125, "bandwidth":25},
				{"name":"Canada", "geo":[51.459170, -107.757015],"IP":"1.2.3.4", "volume":525, "bandwidth":25},
				{"name":"China East Coast", "geo":[31.322285, 121.379834],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Westen China", "geo":[39.280297, 75.061800],"IP":"1.2.3.4", "volume":225, "bandwidth":25},
				{"name":"Singapore", "geo":[1.353054, 103.858809],"IP":"1.2.3.4", "volume":125, "bandwidth":25},
				{"name":"Central India", "geo":[23.625009, 77.738808],"IP":"1.2.3.4", "volume":325, "bandwidth":25},
				{"name":"Southen India", "geo":[8.929630, 77.365289],"IP":"1.2.3.4", "volume":225, "bandwidth":25}
			]	
		}
	]
}
class _OverView extends React.Component{

	constructor(props) {
		super(props);
		
	}

	componentDidMount () {
	    this.count = 0;
	    var self = this;
	    
	    axios.get("../fixtures/data.json").then(function(res){
			  cs.store.dispatch({'type':'loadDataCenter', 'data':data.DataCenters});
		});
	}

	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		if (this.props.dataCenter==undefined || this.props.dataCenter.map===undefined) {
			return null;
		}
		let header = this.props.dataCenter.map((td, index) => {
            return (		                                    
               <th key={index} style={{"textAlign":"center", "width":"33%", "border": "1px solid black", "background":"#E1E1E1"}}>{td.name}</th>               
            )
        });
		
		let tds = this.props.dataCenter.map((dc, index) => {
            return (	
            	<td key={index} style={{"verticalAlign": "top"}}>
            		<div>
	               		<OverViewTableCellNode dataCenter={dc}/>
	               		<OverViewTableCellVolume dataCenter={dc}/>
	               		<OverViewTableCellNetwork dataCenter={dc}/>
               		</div>
               	</td>
            )
        });
		return (
			<div id="OverView" style={{backgroundColor:'#b0e0e6', width:'100%', minHeight:'500px', minWidth:'800px', marginTop:'-10px', marginLeft:'-20px'}}>
				<h4 style={{"textAlign":"center", "paddingTop":"5px"}}>Data Centers</h4>
				<table style={{'width':'100%',"border": "1px solid black", "backgroundColor":"white"}}>
					<thead>
						<tr style={{"border": "1px solid black"}}>
							{header}
						</tr>
					</thead>
					<tbody>
						<tr>
							{tds}
						</tr>
					</tbody>
				</table>

      		</div>
		)
	}
}

const OverView = connect(
		  store => {
			    return {
			    	dataCenter: store.OverviewReducer.dataCenter
			    };
			  }
			)(_OverView);
export default OverView
