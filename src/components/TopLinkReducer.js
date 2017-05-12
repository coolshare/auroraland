	const TopLinkReducer = (state = {'isAdmin':false, 'currentLink':'main'}, action) => {
	  switch (action.type) {
	    case 'switchTopLink':
	      return Object.assign({}, state, {
	    	  currentLink: action.id
	      })
	    case 'updateIsAdmin':
	    	return Object.assign({}, state, {
	    		isAdmin: action.data
	        })
	    default:
	      return state
	  }
	}
	
	export default TopLinkReducer