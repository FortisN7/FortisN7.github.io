import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iugw0wh', 'template_557ihjj', form.current, '3vbIPQmuyMiUt-EjM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>fortisn7@gmail.com</h5>
            <a href="mailto:fortisn7@gmail.com">Send an email</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>(609) 742-5161</h5>
            <a href="tel:+1-609-742-5161">Click to call</a>
          </article>

          <article className="contact__option">
            <FaDiscord className='contact__option-icon' />
            <h4>Discord</h4>
            <h5>@Bladehhh</h5>
            <a href="https://discord.com/channels/@me" target='_blank' rel='noreferrer'>Add me on Discord</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact