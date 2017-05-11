import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Overview from './Overview/Overview'
import Topology from './Topology/Topology'


function ChildPane(children) {
	return children(id)
}

class _RightPane extends React.Component{
	render(){
		let ChildPane = ({ children  }) => children (this.props.currentPage)
		return (
			 <div>
			 	<ChildPane>
			 		{id=>id==="Overview"?<Overview/>:id==="Topology"?<Topology/>:null}
			 	</ChildPane>
			 </div>
		)
	}
}

const RightPane = connect(
		  store => {
			    return {
			    	currentPage: store.MainRightPaneReducer.currentPage
			    };
			  }
			)(_RightPane);
export default RightPane