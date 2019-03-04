import React, { Component } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import "../js/collapsible";
import "../css/collapsible.css";

class Static extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <div className="static">
          <div>
            <button
              data-jevin-component="collapsible-controller"
              data-jevin-target=".toggle1.superfriend"
            >
              Toggle 1
            </button>
            <div className="toggle1 superfriend jevin_collapse jevin_expand">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Nullam quis risus
              eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget
              urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius
              blandit sit amet non magna. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </div>
            <button
              data-jevin-component="collapsible-controller"
              data-jevin-target="#number-3"
            >
              Toggle 3
            </button>
            <div data-div-toggle-target="2" className="jevin_collapse">
              <h3>I'm element 2 but the above button is pointed at 3</h3>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Nullam quis risus
              eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget
              urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius
              blandit sit amet non magna. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </div>
            <button
              data-jevin-component="collapsible-controller"
              data-jevin-target={`[data-div-toggle-target="2"]`}
            >
              Toggle 2
            </button>
            <div id="number-3" className="jevin_collapse">
              <h3>I'm element 3</h3>
              <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Sed posuere consectetur est at lobortis. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec id elit non mi porta gravida
                at eget metus. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </div>
          </div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    );
  }

  static propTypes = {};

  static defaultProps = {};
}

export default Static;
