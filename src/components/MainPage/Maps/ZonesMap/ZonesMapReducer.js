const ZonesMapReducer = (state = {'selectedZone':null, 'dataCenter':[],'dataCenterFilter':[true, true, true, true, true, true, true, true]}, action) => {
  switch (action.type) {
    case 'loadZonesMap':
      return Object.assign({}, state, {
    	  dataCenter: action.data
      })
    case 'updateFilter':
    	let res = Object.assign({}, state.dataCenterFilter)
    	res[action.data[0]] = action.data[1];
    	return Object.assign({}, state, {
    		dataCenterFilter: res
        })
    case 'selectZone':
    	return Object.assign({}, state, {
    		selectedZone: action.data
        })
    default:
      return state
  }
}

export default ZonesMapReducer