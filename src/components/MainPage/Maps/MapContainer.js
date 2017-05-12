import React, { Component } from 'react';
import {connect} from 'react-redux'
import ZonesMapContainer from './ZonesMap/ZonesMapContainer';
import MapBoxContainer from './MapBox/MapBoxContainer';
import cs from '../../../services/CommunicationService'


export default class MapContainer extends Component {
	
	handleRadioSelect(id, e) {
		cs.store.dispatch({'type':'switchMap', 'id':id});
	}

	render() {
	    return (
	    	<div>
		    	<ZonesMapContainer style={{"minHeight":"400px"}}/>}				    	
	    	</div>
	    )
	}
}

