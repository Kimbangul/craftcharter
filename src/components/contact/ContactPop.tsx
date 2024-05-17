import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { ReactComponent as EMAIL } from 'assets/image/contact/email.svg';
import { ReactComponent as PHONE } from 'assets/image/contact/phone.svg';

const ContactPop = () => {
  return (
    <section className='ContactPage'>
      <h1 className='ContactPage__title'>Contact</h1>
      <div className='ContactPage__content'>
        <div className='ContactPage__info-container'>
          <div className='ContactPage__info'>
            <h2 className='ContactPage__info-title'>Sales</h2>
            <ul className='ContactPage__info-list'>
              <li>
                <a href='#'>
                  <PHONE />
                  310.848.3636
                </a>
              </li>
              <li>
                <a href='#'>charter@craftcharter.com</a>
              </li>
            </ul>
          </div>
          <div className='ContactPage__info'>
            <h2 className='ContactPage__info-title'>Careers</h2>
            <ul className='ContactPage__info-list'>
              <li>
                <a href='#'>
                  <EMAIL />
                  charter@craftcharter.com
                </a>
              </li>
            </ul>
          </div>
          <div className='ContactPage__info'>
            <h2 className='ContactPage__info-title'>Looking for a flight?</h2>
            <a className='ContactPage__info-link' href='#'>
              <EMAIL /> charter@craftcharter.com
            </a>
          </div>
        </div>
        <form className='ContactPage__form'>
          <ContactInput id='full-name' required name='full-name' placeholder='Full name*' />
          {/* <div className="ContactPage__form-input-container">
            <label className="ContactPage__form-label" htmlFor="Full-name">Full name*</label>
            <input className="ContactPage__form-input" id='full-name' required name='full-name' placeholder="Full name*"/>
          </div> */}
          <ContactInput id='email' required name='email' placeholder='Email*' />
          <ContactInput id='phone' name='phone' placeholder='Phone number' />
          <ContactInput id='company' name='company' placeholder='Company' />
          {/* <div className="ContactPage__form-input-container">
            <label className="ContactPage__form-label" htmlFor="Full-name">Email*</label>
            <input className="ContactPage__form-input" id='full-name' required name='full-name' placeholder="Email*"/>
          </div> */}
          <div className='ContactPage__form-textarea-container'>
            <label className='ContactPage__form-label' htmlFor='enquiry'>
              Enquiry
            </label>
            <textarea className='ContactPage__form-textarea' id='enquiry' name='enquiry' />
          </div>
          <div className='ContactPage__form-button-container'>
            <button className='ContactPage__form-button'>Send</button>
            <p className='ContactPage__form-notice'>
              By submitting this form, you agree to <a href='#'>Craft's Cookies & Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

const ContactInput: React.FC<ContactInputPropsType> = (props) => {
  return (
    <div className='ContactPage__form-input-container'>
      <label className='ContactPage__form-label' htmlFor={props.id}>
        {props.placeholder}
      </label>
      <input className='ContactPage__form-input' {...props} />
    </div>
  );
};

interface ContactInputPropsType extends InputHTMLAttributes<HTMLInputElement> {}

export default ContactPop;
