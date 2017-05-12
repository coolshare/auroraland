import { combineReducers } from 'redux'
import OverviewReducer from './MainPage/Dashboard/Overview/OverviewReducer'
import MainRightPaneReducer from './MainPage/Dashboard/MainRightPaneReducer'
import MainContainerReducer from './MainPage/MainContainerReducer'
import TopLinkReducer from './TopLinkReducer'
import ZonesMapReducer from './MainPage/Maps/ZonesMap/ZonesMapReducer'
import PatternsRightPaneReducer from './Patterns/RightPane/PatternsRightPaneReducer'
const todoApp = combineReducers({
  OverviewReducer,
  MainRightPaneReducer,
  MainContainerReducer,
  TopLinkReducer,
  ZonesMapReducer,
  PatternsRightPaneReducer
})

export default todoApp