import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
function Nav() {
  return (
    <div className='nav'>
            <div className='navLogo'>
                LOGO
            </div>
            <div className='navList'>
                <ul>
                <li><Link to='/home' className='a hoverHome'><span className='spanA'>home</span></Link></li>
                <li><Link to='/findJob'className='a hoverFind'><span className='spanB'></span>find job</Link></li>
                <li><Link to='/about'className='a hoverAbout'><span className='spanC'></span>about</Link></li>
                <li><Link to='/contact'className='a hoverContact'><span className='spanD'></span>contact</Link></li>
                </ul>
            </div>
            <div className='navBtn'>
                <Link to='/postJob' className='navBtnFirst '>Post job</Link>
                <Link to='/compte' className='navBtnSecond '>Compte</Link>
            </div>
    </div>
  )
}

export default Nav;
