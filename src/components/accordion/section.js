import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import { ContainerContext } from './container';

export const SectionContext = createContext();
export const { Consumer, Provider } = SectionContext;

class Section extends Component {
  static contextType = ContainerContext;

  state = {
    identifier: this.context.getIdentifier()
  };

  // constructor(props) {}
  // componentWillMount(){} // will be deprecated
  // componentDidMount(){}
  // componentWillReceiveProps(nextProps) {} // will be deprecated
  // static getDerivedStateFromProps(nextProps, prevState) {}
  // shouldComponentUpdate(nextProps, nextState) { return true; }
  // componentWillUpdate(nextProps, nextState) {} // will be deprecated
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // componentDidUpdate(prevProps, prevState, snapshot) {}
  // componentWillUnmount() {}
  // componentDidCatch(error, info) {}

  getProviderValue = () => ({
    selected: this.context.selected,
    setSelected: this.context.setSelected,
    identifier: this.state.identifier
  });

  render = () => (
    <Provider value={this.getProviderValue()}>{this.props.children}</Provider>
  );

  static propTypes = {
    children: PropTypes.any
  };

  static defaultProps = {};
}

export default Section;
