import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionContext } from './section';

class Controller extends Component {
  static contextType = SectionContext;

  onClick = event => {
    const { selected, identifier, setSelected } = this.context
    if(selected === identifier) {
      setSelected(-1)
    }else {
      setSelected(identifier)
    }
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <div {...rest} onClick={this.onClick}>
        {children}
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.any
  };

  static defaultProps = {};
}

export default Controller;
