import React from 'react'
import { Link } from 'react-router-dom';
import {  FaLinkedin  } from "react-icons/fa";
import {  FaSquareFacebook , FaSquareXTwitter } from "react-icons/fa6";
import '../footer/footer.css'
function Footer() {
  return (
    <>
        <div className='footer'>
        <div className='footerContent'>
          <div className='listFooter'>
            <h1>LOGO</h1>
            <ul>
                <li><Link to='/home' className='a hoverHome'><span className='spanA'>home</span></Link></li>
                <li><Link to='/findJob'className='a hoverFind'><span className='spanB'></span>find job</Link></li>
                <li><Link to='/about'className='a hoverAbout'><span className='spanC'></span>about</Link></li>
                <li><Link to='/contact'className='a hoverContact'><span className='spanD'></span>contact</Link></li>
            </ul>
          </div>
          <div className='iconsFooter'>
            <h1>Suivez-nous</h1>
            <span><FaSquareFacebook/></span>
            <span><FaLinkedin/></span>
            <span><FaSquareXTwitter/></span>

          </div>
        </div >
        <p>© 2009-2023 - LOGO - Tous droits réservés</p>
      </div>

    </>
  )
}

export default Footer;
