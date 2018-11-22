import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className='wrapper'>
      <div className='row'>

        <div className='col-1'>
          <Link to={`/`}>Home</Link>
        </div>

        <div className='col-11'>
          <p>/\</p>
        </div>

      </div>
    </div>
  )
}
