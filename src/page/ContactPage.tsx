import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, useRef, useState } from 'react';
import { ReactComponent as EMAIL } from 'assets/image/contact/email.svg';
import { ReactComponent as PHONE } from 'assets/image/contact/phone.svg';

const ContactPage = () => {
  return (
    <section className='ContactPage'>
      <div className='ContactPage__inner'>
        <h1 className='ContactPage__title'>Contact</h1>
        <div className='ContactPage__content'>
          <div className='ContactPage__info-container'>
            <div className='ContactPage__info'>
              <h2 className='ContactPage__info-title'>Sales</h2>
              <ul className='ContactPage__info-list'>
                <ContactInfoIistItem icon={<PHONE title='tel' />} desc='310.848.3636' />
                <ContactInfoIistItem icon={<EMAIL title='email' />} desc=' charter@craftcharter.com' />
              </ul>
            </div>
            <div className='ContactPage__info'>
              <h2 className='ContactPage__info-title'>Careers</h2>
              <ul className='ContactPage__info-list'>
                <ContactInfoIistItem icon={<EMAIL title='email' />} desc=' charter@craftcharter.com' />
              </ul>
            </div>
            <div className='ContactPage__info'>
              <h2 className='ContactPage__info-title'>Looking for a flight?</h2>
              <a className='ContactPage__info-link' href='#'>
                Get a quote
              </a>
            </div>
          </div>
          <form className='ContactPage__form'>
            <ContactInput id='full-name' required name='full-name' placeholder='Full name*' />

            <ContactInput id='email' required name='email' placeholder='Email*' />
            <ContactInput id='phone' name='phone' placeholder='Phone number' />
            <ContactInput id='company' name='company' placeholder='Company' />
            <ContactTextarea id='enquiry' name='enquiry' placeholder='Enquiry' />
            <div className='ContactPage__form-button-container'>
              <button className='ContactPage__form-button'>Send</button>
              <p className='ContactPage__form-notice'>
                By submitting this form, you agree to&nbsp;
                <a href='#'>Craft's Cookies & Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInput: React.FC<ContactInputPropsType> = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className='ContactPage__form-input-container' data-focus={isFocus}>
      <label className='ContactPage__form-label' htmlFor={props.id}>
        {props.placeholder}
      </label>
      <input className='ContactPage__form-input' {...props} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
    </div>
  );
};

const ContactTextarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className='ContactPage__form-textarea-container' data-focus={isFocus}>
      <label className='ContactPage__form-label' htmlFor={props.id}>
        {props.placeholder}
      </label>
      <textarea className='ContactPage__form-textarea' {...props} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
    </div>
  );
};

const ContactInfoIistItem: React.FC<ContactInfolistItemPropsType> = (props) => {
  return (
    <li className='ContactPage__info-list-item'>
      <a href='#'>
        {props.icon}
        {props.desc}
      </a>
    </li>
  );
};

interface ContactInfolistItemPropsType {
  icon: ReactNode;
  desc: string;
}
interface ContactInputPropsType extends InputHTMLAttributes<HTMLInputElement> {}

export default ContactPage;
