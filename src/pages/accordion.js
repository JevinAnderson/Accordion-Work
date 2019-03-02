import React, { Component } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

class Accordion extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <div className="accordion">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    );
  }

  static propTypes = {};

  static defaultProps = {};
}

export default Accordion;
