import React from 'react';
import './style.scss';

function ContactForm(props) {
  return (
    <form className="Form" name="contact" method="POST" data-netlify="true" {...props}>
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
