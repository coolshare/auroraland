import React from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import cs from '../services/CommunicationService'
/**
* LoginForm
**/
class _Login extends React.Component{
	/**
	* render
	* @return {ReactElement} markup
	*/
	render(){
		return (	
			<div className="form_container" style={{margin:'20px'}}>
				<div className="header_logo"></div>
				<form className="form-login" >
		            <div className="field"  style={{margin:'10px'}}>
    					<input name="email" type="text" tabIndex="1" placeholder="Email Address"/>
		            </div>
		            <div className="field"   style={{margin:'10px'}}>
    					<input name="password" type="password" tabIndex="2" placeholder="Password"/>
		            </div>
		            <div><label><input type="checkbox" onChange={(e) => cs.dispatch({'type':'updateIsAdmin', 'data':e.target.checked})}/>Login as an admin</label></div>
					<Link to="/main" className="login_btn btn-default"   style={{margin:'10px'}}><button>Log In</button></Link>
					<div>This page is only a place holder for a login screen:</div>
					<p>Just click at "Log in" button to continue</p>
    			</form>
			</div> 
		);
	}
}
const Login = connect(
		  store => {
			    return {
			    	isAdmin: store.TopLinkReducer.isAdmin,
			    };
			  }
			)(_Login);
export default Login
