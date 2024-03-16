import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h5 className="heading">What's next</h5>
      <h2>Get in touch?</h2>
      <p>
        I am currently looking for new opportunities. so id you have anything
        for me my inbox is always open. Whether you have a question or just want
        to say hi, i'll always get you back
      </p>
      <div className="container">
        <a
          className="topbox text"
          href="mailto:Sumit.Patel.0272@gmail.com"
          target="blank"
        >
          Say Hello
        </a>
        <div className="bottombox text"></div>
      </div>
    </div>
  );
};

export default Contact;
