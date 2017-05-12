import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import ReactTooltip from 'react-tooltip'
import cs from '../../../../services/CommunicationService'

export default class Marker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }
  handleOnclick(e) {
	  cs.store.dispatch({'type':'selectZone', 'data':this.props.zone});
  }
  render() {
	let style = {"position":"absolute", "width":"5px", "height":"5px", "left":"2.5px", "top":"2.5px", "textAlign":"center", "color":"#3f51b5","fontSize":"8px", "fontWeight":"bold","padding":"4px", "cursor":"pointer", "backgroundColor":this.props.color};
    return (
       <div style={style} data-tip={this.props.text} onClick={this.handleOnclick}>
       <ReactTooltip />
       </div>
    );
  }
}