import React from 'react'
import M_Dashboard from '../Components/M_Dashboard';
import M_Sidebar from '../Components/Sidebar/M_Sidebar'


export default function Moderator_dash() {

  return (
<div className='bodd'>
    <div className='  container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <M_Sidebar />
        </div>
        <div className='col-10 row'>

          <div className='sticky-top'>
            
               
          </div>
          <div className='mt-5'>
            <M_Dashboard/>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}