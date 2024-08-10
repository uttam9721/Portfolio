import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, I'm here to help. Reach out to discuss your project, ask
            questions, or just say hello.
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__icon' />
              <h3>Email</h3>
              <h5>Uttammaurya377@gmail.com</h5>
              <a href="mailto:Uttammaurya377@gmail.com" target='_blank' rel="noopener noreferrer" className='btn'>Send a message</a>
            </article>

            <article className="contact__option">
              <RiWhatsappFill className='contact__icon' />
              <h3>WhatsApp</h3>
              <h5>+91 9721039470</h5>
              <a href="#" target='_blank' className='btn'>Send a message</a>
            </article>
          </div>
          
          <form>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows={7} placeholder='Your Message'></textarea>
            <button type='submit' className="btn btn__primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact