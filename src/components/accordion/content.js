import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from '../collapsible';
import { SectionContext } from './section';

class Content extends Component {
  static contextType = SectionContext;

  render = () => (
    <Collapsible collapsed={this.context.identifier !== this.context.selected}>
      {this.props.children}
    </Collapsible>
  );

  static propTypes = {
    children: PropTypes.any
  };

  static defaultProps = {};
}

export default Content;
