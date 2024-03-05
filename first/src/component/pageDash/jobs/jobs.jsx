import React from 'react'
import DashNav from '../../dashNav/dashNav';
import Menu from '../../menu/menu';
import './jobs.css'

function Jobs() {
  return (
    <div>
      <div className='bodyJobs'>
        <Menu/>
        <div className='contentJobs'>
          <DashNav/>

        </div>
      </div>
    </div>
  )
}

export default Jobs;
