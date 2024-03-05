import React from 'react'
import '../findJob/findJob.css'
import Nav from '../navigation/nav';


function FindJob() {


  const handleFindJob = ()=>{
    
  }

  const handleFindCondidat = ()=>{

  }

  return (
    <>
        <div className='navigation'>
          <Nav/>
        </div>
      <div className='find'>
        <div className='sectionFind'>
          <h1>Find the first job or find condidat</h1>
          <div className='btnn'>
            <button onClick={handleFindJob}>findJob</button>
            <button onClick={handleFindCondidat}>find condidat</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FindJob;
