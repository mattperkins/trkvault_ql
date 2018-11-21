import * as React from 'react'
import { Query } from 'react-apollo'
import PlaylistItem from './PlaylistItem'
import { PLAYLISTS_QUERY } from '../queries/playlistQuery'

export default () => (
  <React.Fragment>
    <Query query={PLAYLISTS_QUERY}>
      {
        ({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>
          if (error) console.log(error)
          /* console.log(data)  */

          return <React.Fragment>
            {
              data.playlists.map(playlist => (
                <PlaylistItem key={playlist.id} playlist={playlist} />
              ))
            }
          </React.Fragment>
        }
      }
    </Query>
  </React.Fragment>
)
