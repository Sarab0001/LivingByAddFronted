import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.scss";

// Define the Form component outside of the Cart component
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pwwsam9",
        "template_616i91p",
        form.current,
        "Ii_qpqrdwWCbsubtc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <div className="form-group">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            required
            type="text"
            placeholder="NAME"
            name="from_name"
            className="form-control"
          />
          <label>Email</label>
          <input
            required
            type="email"
            placeholder="EMAIL"
            name="from_email"
            className="form-control"
          />
          <label>Phone No</label>
          <input
            required
            type="text"
            placeholder="PHONE NO."
            name="from_phone"
            className="form-control"
          />
          <label>Address</label>
          <textarea
            required
            name="message"
            placeholder="Enter your Address...."
            className="form-control"
          />
          <div className="form-group buttons">
            <input className="form-buttons mt-3" type="submit" value="SEND" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
