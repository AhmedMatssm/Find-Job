import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FaMoon , FaTrashAlt} from 'react-icons/fa'
import {BsSunFill , BsFillPersonFill} from 'react-icons/bs'
import {RxDashboard} from 'react-icons/rx'
import {GrNotification} from 'react-icons/gr'
import {MdWork , MdLogout} from 'react-icons/md'
import {AiOutlineHeart , AiFillSetting} from 'react-icons/ai'
import '../dashbord/dash.css'
import {useCookies} from 'react-cookie'


function Dash() {
  const [cookies, setCookies] = useCookies(["tak_tok"])
  const navigate = useNavigate()

  const handleLogout = ()=>{
    navigate('../compte')
    setCookies('')
  }


  return (
    <>
      <div className='dash' >
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
              <p onClick={handleLogout}>Log out</p>
            </div>
          </div>
        </div>
        <div className='dashContent'>
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
          <div className="dashTitleBtn">
            <h1>My Dashbord</h1>
            <button>New Job</button>
          </div>

          <div className="dashContentBody">
            <div className="dashProJob">
              <div className="dashPro">
                <h1>Hello Ahmed!</h1>
                <p>Lorem ipsum dolor,e temporibus fuga ctetur doloribus reiciendis illident.</p>
                <button>Upload CV</button>
              </div>
              <div className="dashJob">
                
              </div>
            </div>
            <div className="dashJadorTrash">
              <div className="dashJador">

              </div>
              <div className="dashTrash">
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dash;
