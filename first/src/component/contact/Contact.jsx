import React from 'react'
import './contact.css'
import Nav from '../navigation/nav'

function Contact() {
  return (
    <>
        <div className='navigation'>
          <Nav/>
        </div>
      <div className='contact'>
        <div className='contactContent'>
          <h1>Contact Us</h1>
          <form>
            <div className='name'>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" placeholder='Full Name' />
            </div>
            <div className='email'>
              <label htmlFor="Email">Email</label>
              <input type="email" placeholder='Email' />
            </div>
            <div className='message'>
              <label htmlFor="Message">Message</label>
              <textarea name="message" placeholder='Message' id="message" cols="50" rows="4"></textarea>
            </div>
            <div className='btn'>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
