import React from 'react';
import {connect} from 'react-redux'
import cs from '../../services/CommunicationService'
import Footer from './Footer';
import DashboardContainer from './Dashboard/DashboardContainer';
import GoogleMapContainer from './Maps/GoogleMap/GoogleMapContainer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MapContainer from './Maps/MapContainer'

/**
*
*/
class _MainContainer extends React.Component{

	handleSelect(tabId) {
		cs.dispatch({"type":"switchTab", "tabId":tabId})
	}
	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="MainContainer">	
				<Tabs onSelect={this.handleSelect} selectedIndex={this.props.currentTab}>				
					<TabList>
			          <Tab>Dashboard</Tab>
			          <Tab>Zones in Map</Tab>
			        </TabList>
			        <TabPanel>
			        	<DashboardContainer/>
			        </TabPanel>
			        <TabPanel>
			        	<MapContainer/>
			        </TabPanel>
				</Tabs>
				<Footer/>
      		</div>
		)
	}
}

const MainContainer = connect(
		  store => {
			    return {
			    	currentTab: store.MainContainerReducer.currentTab
			    };
			  }
			)(_MainContainer);
export default MainContainer