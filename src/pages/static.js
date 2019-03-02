import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import { Link } from "gatsby";

class Static extends Component {
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

  render() {
    return (
      <Layout>
        <div className="static">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    );
  }

  static propTypes = {};

  static defaultProps = {};
}

export default Static;
