const MainRightPaneReducer = (state = {'currentPage':'Topology'}, action) => {
  switch (action.type) {
    case 'switchPage':
      return Object.assign({}, state, {
    	  currentPage: action.pageId
      })
    default:
      return state
  }
}

export default MainRightPaneReducer