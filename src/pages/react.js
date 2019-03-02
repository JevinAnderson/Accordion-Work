import React, { Component } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Collapsible from "../components/collapsible";

let collapsed = false;
class ReactPage extends Component {
  state = {
    collapsed
  };

  toggleCollapse = event => {
    event.preventDefault();

    this.setState(
      prevState => ({
        collapsed: !prevState.collapsed
      }),
      () => {
        collapsed = this.state.collapsed;
      }
    );
  };

  render() {
    return (
      <Layout>
        <button onClick={this.toggleCollapse}>Toggle Collapse</button>
        <Collapsible
          collapsed={this.state.collapsed}
          onClick={this.toggleCollapse}
        >
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
