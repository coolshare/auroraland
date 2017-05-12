import React, { Component } from 'react';
import Map from 'google-map-react';
import axios from 'axios'
import Marker from './Marker'
import {connect} from 'react-redux'
import cs from '../../../../services/CommunicationService'
import ZoneDetail from './ZoneDetail'

const colors = ["red", "green", "blue", "yellow", "orange", "black"]
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


class _ZonesMapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				busRoutes:null	
		}
	}
	  static defaultProps = {
	    center: {lat: 37.773972, lng: -122.431297},
	    zoom: 3
	  };

	  componentDidMount() {
		  var self = this;

		  cs.store.dispatch({'type':'loadZonesMap', 'data':data.DataCenters});
	  }
	  handleFilter(data) {
		  cs.store.dispatch({'type':'updateFilter', 'data':data});
	  }
	  render() {
		 var self = this;	
		if (self.props.busRoutes===null) {
			return null;
		}
		
		const style = {
			      width: '100vw',
			      height: '100vh'
			    }
		
		if (self.props.dataCenter===undefined || self.props.dataCenter.length<1) {
    		return null;
    	}
		let dataCenters = self.props.dataCenter;
		let markers = []
		let dcs = [];
		for (let i=0; i<dataCenters.length; i++) {			
			let dc = dataCenters[i];
			let color = colors[i]
			dcs.push([dc, color, this.props.dataCenterFilter[i]])
			if (!this.props.dataCenterFilter[i]) {
				continue;
			}
			for (let j=0; j<dc.zones.length; j++) {
				markers.push([dc.zones[j], color])
			}
			
		}
	    return (
	    	
	    	<div>
	    		<div style={{"height":"50px", "width":"100%"}}>
	    			{
	    				dcs.map((dc, idx)=>{
	    					let style = {"marginLeft":"15px", "color":dc[1]}
	    					return (
	    							<label key={idx} style={style}><input type="checkbox" checked={dc[2]} onChange={(e)=>this.handleFilter([idx, e.target.checked])}/>{dc[0].name}</label>
	    					)
	    				})
	    			}
	    		</div>
	    		<div>
	    			<div style={{"float":"left", "width":"70vw", "height":"100vh"}}>
					    <Map defaultCenter={this.props.center} defaultZoom={this.props.zoom} >
					       {
					    	   markers.map( function (zone, idx) {
			                        return (
			                        		<Marker key={idx} lat={zone[0].geo[0]} lng={zone[0].geo[1]} text={zone[0].name} color={zone[1]} zone={zone[0]}/>
			                            )
			                    })
					       }
					       
					    </Map>
					</div>
					<div style={{"float":"left","width":"25vw", "height":"100vh", "border": "1px solid black"}}>
						<ZoneDetail zone={this.props.selectedZone}/>
					</div>
					<br style={{"clear":"both"}}/>
			    </div>
			</div>
	    );
	  }
	}
	
const ZonesMapContainer = connect(
		  store => {
			    return {
			    	dataCenter: store.ZonesMapReducer.dataCenter,
			    	dataCenterFilter: store.ZonesMapReducer.dataCenterFilter,
			    	selectedZone: store.ZonesMapReducer.selectedZone
			    };
			  }
			)(_ZonesMapContainer);
export default ZonesMapContainer
	