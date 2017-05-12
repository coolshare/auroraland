const OverviewReducer = (state = {"dataCenter":{}}, action) => {
  switch (action.type) {
  	case 'loadDataCenter':
      return Object.assign({}, state, {
    	  dataCenter: action.data
      })
    default:
      return state
  }
}

export default OverviewReducer