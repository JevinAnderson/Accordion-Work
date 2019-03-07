import React, { Component } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import {
  Container,
  Content,
  Controller,
  Section
} from "../components/accordion";

class Accordion extends Component {
  state = {};

  render() {
    return (
      <Layout>
        <Container>
          <Section>
            <Controller>Section 1</Controller>
            <Content>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Maecenas sed
                diam eget risus varius blandit sit amet non magna. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante venenatis dapibus posuere velit aliquet. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed
                diam eget risus varius blandit sit amet non magna. Curabitur
                blandit tempus porttitor.
              </p>
            </Content>
          </Section>
          <Section>
            <Controller>Section 2</Controller>
            <Content>
              <Controller>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur blandit tempus porttitor. Aenean lacinia bibendum
                  nulla sed consectetur. Etiam porta sem malesuada magna mollis
                  euismod.
                </p>
              </Controller>
            </Content>
          </Section>
          <Section>
            <Controller>Section 3</Controller>
            <Content>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id
              dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Nulla vitae elit
              libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus.
            </Content>
          </Section>
        </Container>
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
