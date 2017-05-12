import React, { Component } from 'react';

export default class ZoneDetail extends React.Component {

	  render() {
		var self = this;	
		let zone = this.props.zone;
		if (zone==null) {
			return null;
		}
	    return (
	    	<ul>
	    		<li>Name: {zone.name}</li>
	    		<li>GEO: {zone.geo}</li>
	    		<li>IP: {zone.IP}</li>
	    		<li>Volume: {zone.volume}</li>
	    		<li>Bandwidth: {zone.bandwidth}</li>
	    	</ul>
	    	
	    );
	  }
	}

	