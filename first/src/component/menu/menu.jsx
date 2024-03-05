import React from 'react'
import { Link } from 'react-router-dom';
import { FaTrashAlt} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {RxDashboard} from 'react-icons/rx'
import {MdWork , MdLogout} from 'react-icons/md'
import {AiOutlineHeart , AiFillSetting} from 'react-icons/ai'
import './menu'

function Menu() {
  return (
    <div>

<div className='dashMenu' >
          <h1>LOGO</h1>
          <div className='dashMenuList'>
            <div className="admin">
              <Link to='/dash' className='link'>
                <span><RxDashboard/></span>
                <p>Dashbord</p>
              </Link>
            </div>
            <div className="admin">
            <Link to='/jobs' className='link'>
              <span><MdWork/></span>
              <p>Jobs</p>
            </Link>
              
            </div>
            <div className="admin">
            <Link to='/jadore' className='link'>
              <span><AiOutlineHeart/></span>
              <p>J'adore</p>
            </Link>
              
            </div>
            <div className="admin">
            <Link to='/trash' className='link'>
              <span><FaTrashAlt/></span>
              <p>Trash</p>
            </Link>
              
            </div>
            <div className="admin">
            <Link to='/profile' className='link'>
              <span><BsFillPersonFill/></span>
              <p>Profile</p>
            </Link>
              
            </div>
            <div className="admin">
            <Link to='/settings' className='link'>
              <span><AiFillSetting/></span>
              <p>Setting</p>
            </Link>
              
            </div>
            <div className="logOut">
              <span><MdLogout/></span>
              <p>Log out</p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Menu;
