import React from 'react'
import Menu from '../../menu/menu';
import DashNav from '../../dashNav/dashNav'
import './jadore.css'


function Jadore() {
  return (
    <>
      <div className='bodyJadore'>
        <Menu/>
        <div className='contentJadore'>
          <DashNav/>

        </div>
      </div>
    
    </>
  )
}

export default Jadore;
