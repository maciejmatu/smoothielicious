import React from 'react';
import { navigateTo } from "gatsby-link";
import './style.scss';

function handleSubmit(e) {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new FormData(e.target)
  })
    .then(() => navigateTo('/success/'))
    .catch(error => alert(error));

  e.preventDefault();
};

function ContactForm(props) {
  return (
    <form onSubmit={handleSubmit} className="Form" name="contact" action="/success/" method="POST" data-netlify="true" {...props}>
      <label hidden>
        Don’t fill this out: <input name="bot-field" />
      </label>
      <label className="FormItem">
        <p className="FormItem__title">Your Name:</p>
        <input className="FormItem__input" type="text" name="name" />
      </label>

      <label className="FormItem">
        <p className="FormItem__title">Your Email:</p>
        <input className="FormItem__input" type="email" name="email" />
      </label>

      <label className="FormItem">
        <p className="FormItem__title">Your Message:</p>
        <textarea className="FormItem__input" name="message" />
      </label>

      <div className="FormItem__recaptcha" data-netlify-recaptcha></div>

      <button className="Form__button" type="submit">Send</button>
    </form>
  )
}

export default ContactForm;
