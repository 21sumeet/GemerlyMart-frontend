import Headers from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, keyword, description }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <title>{title}</title>
      </Helmet>

      <Headers />

      <Toaster />
      {children}
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerce",
  keyword: "Ecommerce",
  description: "We sell the best products for cheap",
};

export default Layout;
