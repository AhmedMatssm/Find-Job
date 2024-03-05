import React from 'react'
import DashNav from '../../dashNav/dashNav';
import Menu from '../../menu/menu';
import './settings.css'

function Settings() {
  return (
    <div>
      <div className='bodySettings'>
        <Menu/>
        <div className='contentSettings'>
          <DashNav/>

        </div>
      </div>
    </div>
  )
}

export default Settings;
