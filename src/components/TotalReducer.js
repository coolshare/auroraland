import { combineReducers } from 'redux'
import OverviewReducer from './MainPage/Dashboard/Overview/OverviewReducer'
import MainRightPaneReducer from './MainPage/Dashboard/MainRightPaneReducer'
import MainContainerReducer from './MainPage/MainContainerReducer'
import TopologyReducer from './MainPage/Dashboard/Topology/TopologyReducer'
import TopLinkReducer from './TopLinkReducer'
import MapContainerReducer from './MainPage/Maps/MapContainerReducer'
import GoogleMapReducer from './MainPage/Maps/GoogleMap/GoogleMapReducer'
import PatternsRightPaneReducer from './Patterns/RightPane/PatternsRightPaneReducer'
const todoApp = combineReducers({
  OverviewReducer,
  MainRightPaneReducer,
  MainContainerReducer,
  TopLinkReducer,
  TopologyReducer,
  MapContainerReducer,
  GoogleMapReducer,
  PatternsRightPaneReducer
})

export default todoApp