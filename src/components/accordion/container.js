import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const ContainerContext = createContext();
export const { Consumer, Provider } = ContainerContext;

class Container extends Component {
  state = {
    selected: -1
  };
  identifier = 0;

  getIdentifier = () => this.identifier++;

  setSelected = selected => this.setState({ selected });

  getProviderValue = () => ({
    getIdentifier: this.getIdentifier,
    selected: this.state.selected,
    setSelected: this.setSelected
  });

  render = () => (
    <Provider value={this.getProviderValue()}>{this.props.children}</Provider>
  );

  static propTypes = {
    children: PropTypes.any
  };

  static defaultProps = {};
}

export default Container;
