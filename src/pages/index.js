import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import linkStyles from "./link.module.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/static/" className={linkStyles.block}>
      See static javascript
    </Link>
    <Link to="/react/" className={linkStyles.block}>
      See react components
    </Link>
    <Link to="/accordion/" className={linkStyles.block}>
      See react accordion
    </Link>
  </Layout>
);

export default IndexPage;
