import React from 'react'
import Menu from '../../menu/menu';
import DashNav from '../../dashNav/dashNav'
import './profile.css'

function Profile() {
  return (
    <div>
      <div className='bodyProfile'>
        <Menu/>
        <div className='contentProfile'>
          <DashNav/>

        </div>
      </div>
    </div>
  )
}

export default Profile;
