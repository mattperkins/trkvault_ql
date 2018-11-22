import React from 'react'
import { Link } from 'react-router-dom'

export default ({ playlist: { id, playlistNumber, playlistTitle } }) => {
  return (
    <div className='wrapper'>
      <div className='row'>

        <div className='col-1'>
          <Link to={`/playlist/${id}`}>{ playlistNumber }</Link>
        </div>

        <div className='col-11'>
          <h1>{ playlistTitle }</h1>
        </div>

      </div>
    </div>
  )
}
