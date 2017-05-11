import React from 'react'
import { Accordion, Panel,PanelGroup } from 'react-bootstrap';
import styles from './Dashboard.css';
import {connect} from 'react-redux'
import cs from '../../../services/CommunicationService'
/**
*
*/
class _LeftPane extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			activeKey: '2'
		};
		this.handleSelect = this.handleSelect.bind(this)
	}
	handleink(pageId, e) {
		e.preventDefault();
		cs.store.dispatch({'type':'switchPage', 'pageId':pageId});
	}

	handleSelect(activeKey) {
	    this.setState({ activeKey });
	  }
	/**
    * render
    * @return {ReactElement} markup
    */
	render(){
		return (
			<div id="leftPane" style={{minHeight:'500px', backgroundColor:'#e1e1e1'}}>
				<li><a href="#" onClick={(evt) => this.handleink('Overview', evt)} className={this.props.currentPage=="Overview"?"selectedAccordionLink":"unselectedAccordionLink"}>ToDo List</a></li>
		        <li><a href="#" onClick={(evt) => this.handleink('Topology', evt)} className={this.props.currentPage=="Topology"?"selectedAccordionLink":"unselectedAccordionLink"}>Housing Info</a></li>
	        </div>
		)
	}
}

const LeftPane = connect(
		  store => {
			    return {
			    	currentPage: store.MainRightPaneReducer.currentPage
			    };
			  }
			)(_LeftPane);
export default LeftPane