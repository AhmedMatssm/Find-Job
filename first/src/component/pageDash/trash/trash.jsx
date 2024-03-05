import React from 'react'
import Menu from '../../menu/menu';
import DashNav from '../../dashNav/dashNav';
import './trash.css'

function Trash() {
  return (
    <div>
      <div className='bodyTrash'>
        <Menu/>
        <div className='contentTrash'>
          <DashNav/>

        </div>
      </div>
    </div>
  )
}

export default Trash;
