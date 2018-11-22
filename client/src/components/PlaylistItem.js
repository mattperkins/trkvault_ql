import React from 'react'
import { Link } from 'react-router-dom'
export default ({ playlistTitle, trackNumber, trackTitle, duration, genre, composer, yearRecorded, instrumental }) => {
  return (
    <div className='wrapper'>
      <div className='row'>

        <div className='col-push-2'>
          <Link to={`/`}>Home</Link>
        </div>

        <div className='col-10' style={{ marginTop: 1 }}>
          <p>{ playlistTitle }</p>
          <p>{ trackNumber }</p>
          <p>{ trackTitle }</p>
          <p>{ duration }</p>
          <p>{ genre }</p>
          <p>{ composer }</p>
          <p>{ yearRecorded }</p>
          <p>{ instrumental }</p>
        </div>

      </div>
    </div>
  )
}
