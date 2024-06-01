import React from "react";
import Layout from "../components/layouts/Layout";

const About = () => {
  return (
    <div>
      <Layout title={"About us - Ecommer app"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2 text-white">
              Welcome to Shopify , we are passionate about providing a seamless
              online shopping experience for our valued customers. Our journey
              began with the vision to create a platform that not only offers a
              wide range of quality products but also prioritizes customer
              satisfaction and convenience. <br></br>Our mission is to bring joy
              and fulfillment to your life by offering an extensive selection of
              products that cater to your diverse needs.
              <h2 className="mt-2 text-white">What Sets Us Apart:</h2>
              Quality Assurance: We source products from reputable suppliers to
              ensure that you receive only the finest quality items.
              Customer-Centric Approach: Your satisfaction is our top priority.
              We aim to exceed your expectations with every purchase. Secure and
              Convenient Shopping: Shop with confidence on our secure platform,
              and enjoy a hassle-free shopping experience from the comfort of
              your home. Our Team: Behind [Your Shop Name] is a dedicated team
              of professionals who work tirelessly to curate a collection of
              products that align with your lifestyle. We are committed to
              continuous improvement, innovation, and creating a positive impact
              on the communities we serve.
            </p>
            <div className="col-md-6"></div>
          </div>
          <div></div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
