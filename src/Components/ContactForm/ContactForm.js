import React from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    suggestionSuccess: false
    }

    // Create a ref for the form
    this.form = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xpextjf', 'template_t22sgv8', this.form.current, 'M419am-xsu2oM1Kl0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      this.setState({ suggestionSuccess: true });
  };

  showMessage = () => {
    
  }

  render() {
    return (
    <div className="form-container">
      <h2>Contact Form</h2>
      {/* <p>Feel free to write your honest opinions and send them to the web developer here</p> */}
      <form className="form" ref={this.form} onSubmit={this.sendEmail}>
        <div className="input-containers">
          <h6>Your Name</h6>
          <textarea className="text-input-small" type="text" name="user_name" />
        </div>
        <div className="input-containers">
          <h6>Your Email</h6>
          <textarea className="text-input-small" type="email" name="email_from" />
        </div>
        <div className="input-containers test">
          <h6>Your Message</h6>
          <textarea className="text-input-large" name="message" />
        </div>
        <button className="button-3" type="submit" value="Send">Send</button>
      </form>
      {this.state.suggestionSuccess && <h6>Your message has been sent succesfully. Thank you! {this.props.suggestionSuccess}</h6>}
    </div>
   );
  }
}

export default ContactForm;