import React from 'react'

export default ({ playlist: { playlistNumber, playlistTitle } }) => {
  return (
    <div className='wrapper'>
      <div className='row'>

        <div className='col-1'>
          <h1>{ playlistNumber }</h1>
        </div>

        <div className='col-11'>
          <h1>{ playlistTitle }</h1>
        </div>

      </div>
    </div>
  )
}
