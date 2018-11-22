import * as React from 'react'
import { Query } from 'react-apollo'
import PlaylistItem from './PlaylistItem'
import { PLAYLIST_QUERY } from '../queries/playlistQuery'

export default (props) => {
  let { id } = props.match.params
  return (
    <React.Fragment>
      <Query
        query={PLAYLIST_QUERY}
        variables={{ id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>
          if (error) console.log(error)
          /* console.log(data) */
          const { playlistTitle } = data.playlist
          const { trackNumber, trackTitle, duration, genre, composer, yearRecorded, instrumental } = data.playlist.track
          return <div className='wrapper'>
            <PlaylistItem
              playlistTitle={playlistTitle}
              trackNumber={trackNumber}
              trackTitle={trackTitle}
              duration={duration}
              genre={genre}
              composer={composer}
              yearRecorded={yearRecorded}
              instrumental={instrumental}
            />
          </div>
        }}
      </Query>
    </React.Fragment>
  )
}
