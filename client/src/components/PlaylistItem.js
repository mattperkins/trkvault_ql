import React from 'react'

export default ({ playlist: { playlistNumber, playlistTitle } }) => {
  return (
    <React.Fragment>
      <h1>{ playlistNumber }</h1>
      <h1>{ playlistTitle }</h1>
    </React.Fragment>
  )
}
