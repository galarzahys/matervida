import React from 'react';
import "../styles/MainStyleSheet.css";
import ContactForm from './Contact_form.js';
import siteData from '../siteData.js';


const ContactUs = () => {

    return (
      <section id="contact">
            <h4 className="lead">{ siteData.contato}</h4>
          <div className="row">
              <ContactForm />
          </div>

        </section>
        );
  }

  export default ContactUs