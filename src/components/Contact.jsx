import React from "react";
import { useState } from "react";

function Contact() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [buttonEnabled, isButtonEnabled] = useState("false");

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (e) => {
    const email = e.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Your email looks good!");
      isButtonEnabled(false);
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
      isButtonEnabled(true);
    }
  };

  return (
    <section className="contact-section" id="email">
      <form
        className="contact-form"
        action="https://formsubmit.co/43329a39be0c17c6a0b9b6db26647311"
        method="POST"
      >
        <h2>Let's Get in Touch</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={validateEmail}
          required
        />
        {/* EMAIL MESSAGE VALIDATION */}
        <div className={`email-validate ${isValid ? "success" : "error"}`}>
          {message}
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id=""
          rows="10"
          placeholder="Your message..."
          required
        ></textarea>
        <button
          disabled={buttonEnabled ? 0 : 1}
          className={`${buttonEnabled ? "btn-disabled" : "btn-enabled"}`}
          type="submit"
        >
          Submit
        </button>

        {/* CUSTOM TEMPLATE + REMOVES CAPTCHA */}
        <input type="hidden" name="_template" value="table"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="http://localhost:3000/"></input>
      </form>
    </section>
  );
}

export default Contact;
