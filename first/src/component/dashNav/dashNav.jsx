import React from 'react'
import { Link } from 'react-router-dom'
import {GrNotification} from 'react-icons/gr'
import './dashNav.css'

function DashNav() {
  return (
    <>

        <div className="navigation">
            <div className='navList'>
                <ul>
                <li><Link to='/home' className='a hoverHome'><span className='spanA'>home</span></Link></li>
                <li><Link to='/findJob'className='a hoverFind'><span className='spanB'></span>find job</Link></li>
                <li><Link to='/about'className='a hoverAbout'><span className='spanC'></span>about</Link></li>
                <li><Link to='/contact'className='a hoverContact'><span className='spanD'></span>contact</Link></li>
                </ul>
            </div>
            <div className='navDarkProfile'>
              <div className="darkLight">
                  {/* <span className='dark' onClick={handleDark}><FaMoon /></span> */}
                 {/* <span className='light' onClick={handleLight}><BsSunFill /></span> */}
                 <span className='light'><GrNotification /></span>
              </div>
              <div className="avatarName">
                <img src="./images/avatarbg.png"/>
                <span>Ahmed Mouatassim</span>
              </div>
            </div>
          </div>
      
    </>
  )
}

export default DashNav;
