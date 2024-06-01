import React from "react";
import Layout from "../components/layouts/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 text-white">
          <h3>Shipping Policy:</h3> Processing Time: Orders are typically
          processed within 1-2 business days. Please allow additional time
          during peak seasons. Shipping Rates: Shipping costs are calculated
          based on the weight of your order and your location. You can view the
          shipping cost during the checkout process. Delivery Time: Estimated
          delivery times vary depending on your location. You can track your
          order using the provided tracking information.
          <h3>Return and Exchange Policy: </h3>Returns: If you are not
          completely satisfied with your purchase, you can return the item(s)
          within 30 days of delivery for a full refund. Exchanges: We offer
          exchanges for defective or damaged items. Please contact our customer
          support team for assistance. Refund Process: Refunds are processed
          within 5-7 business days after we receive the returned item(s).
          {/* <h3>Privacy Policy:</h3> Personal Information: We respect your privacy
          and ensure the confidentiality of your personal information. We use
          secure protocols for data transmission and do not share your
          information with third parties. Payment Security: Your payment
          information is encrypted and processed securely. We do not store your
          payment details on our servers.
          <h3>Terms and Conditions:</h3> Usage: By using our website, you agree
          to comply with our terms and conditions. Please read them carefully
          before making a purchase. Intellectual Property: All content on our
          website, including images and text, is the intellectual property of
          [Your Shop Name]. Reproduction or distribution without permission is
          prohibited. */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
