import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Collapsible from "../components/collapsible";

class ReactPage extends Component {
  state = {};

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

  toggleCollapse = event => {
    event.preventDefault();
    console.log("Toggle collapse!");

    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    return (
      <Layout>
        <button onClick={this.toggleCollapse}>Toggle Collapse</button>
        <Collapsible collapsed={this.state.collapsed}>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras
          mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec id elit non mi porta gravida
          at eget metus.
        </Collapsible>

        <div className="react">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    );
  }

  static propTypes = {};

  static defaultProps = {};
}

export default ReactPage;
