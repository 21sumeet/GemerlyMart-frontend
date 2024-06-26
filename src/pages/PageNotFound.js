import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/Layout";

const PageNotFound = () => {
  return (
    <div>
      <Layout title={"go back- page not found"}>
        <div className="pnf">
          <h1 className="pnf-title text-white">404</h1>
          <h2 className="pnf-heading text-white">Oops ! Page Not Found</h2>
          <Link to="/" className="pnf-btn">
            Go Back
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default PageNotFound;
